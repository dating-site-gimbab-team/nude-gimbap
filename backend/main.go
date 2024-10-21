package main

import (
	"backend/config"
	_ "backend/docs"
	"backend/router"
	"log"
	"net/http"

	httpSwagger "github.com/swaggo/http-swagger"
)

// @title 개인 프로젝트 API
// @version 1.0.0

// @securityDefinitions.apikey BearerAuth
// @in header
// @name Authorization

// @host localhost:8080
// @BasePath /api

func enableCORS(allowedOrigins []string) func(http.Handler) http.Handler {
	return func(next http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			origin := r.Header.Get("Origin")
			for _, allowedOrigin := range allowedOrigins {
				if origin == allowedOrigin {
					w.Header().Set("Access-Control-Allow-Origin", origin)
					break
				}
			}
			w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
			w.Header().Set("Access-Control-Allow-Headers", "Authorization, Content-Type")

			if r.Method == "OPTIONS" {
				w.WriteHeader(http.StatusOK)
				return
			}

			next.ServeHTTP(w, r)
		})
	}
}

func main() {
	db, err := config.NewDB()
	if err != nil {
		log.Fatal("Error connecting to the database:", err)
	}
	defer db.Close()

	mainMux := http.NewServeMux()

	allowedOrigins := []string{
		"http://localhost:3000",
		"http://localhost:8080",
	}

	corsMiddleware := enableCORS(allowedOrigins)

	mainMux.Handle("/", corsMiddleware(router.NewMainLoggedRouter(db)))
	mainMux.Handle("/api/users", corsMiddleware(router.NewUserLoggedRouter(db)))
	mainMux.Handle("/api/users/", corsMiddleware(router.NewUserLoggedRouter(db)))
	mainMux.Handle("/api/feeds/", corsMiddleware(router.NewFeedbackLoggedRouter(db)))

	mainMux.Handle("/docs/", httpSwagger.Handler(
		httpSwagger.URL("http://localhost:8080/docs/doc.json"),
	))

	log.Println("Server is listening on port 8080...")
	log.Fatal(http.ListenAndServe(":8080", mainMux))
}
