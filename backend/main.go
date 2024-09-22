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
func main() {
	db, err := config.NewDB()
	if err != nil {
		log.Fatal("Error connecting to the database:", err)
	}
	defer db.Close()

	mainMux := http.NewServeMux()

	mainMux.Handle("/", router.NewMainLoggedRouter(db))

	mainMux.Handle("/api/users", router.NewUserLoggedRouter(db))

	mainMux.Handle("/docs/", httpSwagger.Handler(
		httpSwagger.URL("http://localhost:8080/docs/doc.json"),
	))

	log.Println("Server is listening on port 8080...")
	log.Fatal(http.ListenAndServe(":8080", mainMux))
}
