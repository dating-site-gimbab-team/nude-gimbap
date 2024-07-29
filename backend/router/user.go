package router

import (
	"backend/controller"
	"backend/model"
	"database/sql"
	"log"
	"net/http"
)

func loggingMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		log.Printf("%s %s\n", r.Method, r.RequestURI)
		next.ServeHTTP(w, r)
	})
}

func NewRouter(db *sql.DB) *http.ServeMux {
	userModel := &model.UserModel{DB: db}
	userController := &controller.UserController{Model: userModel}

	router := http.NewServeMux()
	router.HandleFunc("/users", func(w http.ResponseWriter, r *http.Request) {
		if r.Method == http.MethodGet {
			userController.GetUsers(w, r)
		} else if r.Method == http.MethodPost {
			userController.CreateUser(w, r)
		} else {
			http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		}
	})
	router.HandleFunc("/users/", func(w http.ResponseWriter, r *http.Request) {
		if r.Method == http.MethodGet {
			userController.GetUser(w, r)
		} else if r.Method == http.MethodPatch {
			userController.UpdateUserName(w, r)
		} else if r.Method == http.MethodDelete {
			userController.DeleteUser(w, r)
		} else {
			http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		}
	})

	return router
}

func NewLoggedRouter(db *sql.DB) http.Handler {
	router := NewRouter(db)
	return loggingMiddleware(router)
}
