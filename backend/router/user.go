package router

import (
	"backend/controller"
	"backend/middleware"
	"backend/model"
	"database/sql"
	"net/http"
	"strconv"
	"strings"
)

func NewUserRouter(db *sql.DB) *http.ServeMux {
	userModel := &model.UserModel{DB: db}
	userController := &controller.UserController{Model: userModel}

	router := http.NewServeMux()
	router.HandleFunc("/api/users", func(w http.ResponseWriter, r *http.Request) {
		if r.Method == http.MethodGet {
			userController.GetUsers(w, r)
		} else if r.Method == http.MethodPost {
			userController.CreateUser(w, r)
		} else {
			http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		}
	})

	router.HandleFunc("/api/users/profile/", func(w http.ResponseWriter, r *http.Request) {
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

	router.HandleFunc("/api/users/name/", func(w http.ResponseWriter, r *http.Request) {
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

	router.HandleFunc("/api/users/", func(w http.ResponseWriter, r *http.Request) {
		pathParts := strings.Split(strings.Trim(r.URL.Path, "/"), "/")
		if len(pathParts) == 3 && pathParts[0] == "api" && pathParts[1] == "users" {
			userID := pathParts[2]
			r = setRequestContext(r, "user_id", userID)

			switch r.Method {
			case http.MethodGet:
				userID, err := strconv.Atoi(userID)
				if err != nil {
					http.Error(w, "잘못된 사용자 ID", http.StatusBadRequest)
					return
				}
				userController.GetUser(w, r, userID)
			case http.MethodDelete:
				userController.DeleteUser(w, r)
			default:
				http.Error(w, "허용되지 않는 메소드", http.StatusMethodNotAllowed)
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
