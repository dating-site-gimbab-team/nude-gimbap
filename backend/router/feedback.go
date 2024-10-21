package router

import (
	"backend/controller"
	"backend/middleware"
	"backend/model"
	"database/sql"
	"net/http"
)

func NewFeedbackRouter(db *sql.DB) *http.ServeMux {
	feedbackModel := &model.LikeModel{DB: db}
	feedbackController := &controller.FeedbackController{Model: feedbackModel}

	router := http.NewServeMux()
	router.HandleFunc("/api/feeds/like", func(w http.ResponseWriter, r *http.Request) {
		if r.Method == http.MethodPost {
			feedbackController.FeedLike(w, r)
		} else {
			http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		}
	})

	router.HandleFunc("/api/feeds/dislike", func(w http.ResponseWriter, r *http.Request) {
		if r.Method == http.MethodPost {
			feedbackController.FeedDisLike(w, r)
		} else {
			http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		}
	})

	return router
}

func NewFeedbackLoggedRouter(db *sql.DB) http.Handler {
	router := NewFeedbackRouter(db)
	return middleware.LoggingMiddleware(router)
}
