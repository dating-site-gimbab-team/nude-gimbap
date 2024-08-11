package router

import (
	"backend/controller"
	"backend/middleware"
	"database/sql"
	"net/http"
)

func NewMainRouter(db *sql.DB) *http.ServeMux {
	mainController := &controller.MainController{}

	router := http.NewServeMux()
	router.HandleFunc("/callback/github", func(w http.ResponseWriter, r *http.Request) {
		if r.Method == http.MethodGet {
			mainController.GetOAuthCallback(w, r, "github")
		} else {
			http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		}
	})
	router.HandleFunc("/callback/kakao", func(w http.ResponseWriter, r *http.Request) {
		if r.Method == http.MethodGet {
			mainController.GetOAuthCallback(w, r, "kakao")
		} else {
			http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		}
	})
	return router
}

func NewMainLoggedRouter(db *sql.DB) http.Handler {
	router := NewMainRouter(db)
	return middleware.LoggingMiddleware(router)
}
