package router

import (
	"backend/controller"
	"backend/middleware"
	"backend/model"
	"database/sql"
	"net/http"
	"strings"
)

func NewUserRouter(db *sql.DB) *http.ServeMux {
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

	router.HandleFunc("/users/profile/", func(w http.ResponseWriter, r *http.Request) {
		if r.Method == http.MethodPatch {
			userController.UpdateUserName(w, r)
		} else {
			http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		}

		pathParts := strings.Split(strings.Trim(r.URL.Path, "/"), "/")
		if len(pathParts) == 3 && pathParts[0] == "users" && pathParts[1] == "profile" {
			userID := pathParts[1]
			r = setRequestContext(r, "user_id", userID)

			if r.Method == http.MethodPatch { // Corrected method for delete
				userController.UpdateProfileImage(w, r)
			} else {
				http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
			}
		} else {
			http.NotFound(w, r)
		}
	})

	router.HandleFunc("/users/name/", func(w http.ResponseWriter, r *http.Request) {
		if r.Method == http.MethodPatch {
			userController.UpdateUserName(w, r)
		} else {
			http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		}

		pathParts := strings.Split(strings.Trim(r.URL.Path, "/"), "/")
		if len(pathParts) == 3 && pathParts[0] == "users" && pathParts[1] == "name" {
			userID := pathParts[1]
			r = setRequestContext(r, "user_id", userID)

			if r.Method == http.MethodPatch { // Corrected method for delete
				userController.UpdateUserName(w, r)
			} else {
				http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
			}
		} else {
			http.NotFound(w, r)
		}
	})

	router.HandleFunc("/users/", func(w http.ResponseWriter, r *http.Request) {
		pathParts := strings.Split(strings.Trim(r.URL.Path, "/"), "/")
		if len(pathParts) == 2 && pathParts[0] == "users" {
			userID := pathParts[1]
			r = setRequestContext(r, "user_id", userID)

			if r.Method == http.MethodGet {
				userController.GetUser(w, r)
			} else if r.Method == http.MethodDelete { // Corrected method for delete
				userController.DeleteUser(w, r)
			} else {
				http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
			}
		} else {
			http.NotFound(w, r)
		}
	})

	return router
}

func NewUserLoggedRouter(db *sql.DB) http.Handler {
	router := NewUserRouter(db)
	return middleware.LoggingMiddleware(router)
}
