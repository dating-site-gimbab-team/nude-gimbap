package controller

import (
	"backend/model"
	"backend/utils"
	"encoding/json"
	"net/http"
)

type FeedbackController struct {
	Model *model.LikeModel
}

// @Summary 피드 좋아요
// @Description
// @name FeedLike
// @Accept json
// @Produce json
// @Tags 피드
// @Router /feeds/like [post]
// @Param feedback body model.CreateFeedbackDTO true "피드 좋아요 정보"
// @Success 201 {object} utils.SimpleResponse[any]
// @Failure 400 {object} utils.SimpleResponse[string]
func (c *FeedbackController) FeedLike(w http.ResponseWriter, r *http.Request) {
	var feedback model.CreateFeedbackDTO
	if err := json.NewDecoder(r.Body).Decode(&feedback); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	err := c.Model.ToggleLike(feedback.UserID, feedback.TargetUserID)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	dto := utils.ResponseDTO[any](nil, http.StatusOK, nil)
	w.WriteHeader(dto.StatusCode)
	w.Header().Set("Content-Type", "application/json")
	encoder := json.NewEncoder(w)
	encoder.SetIndent("", "  ")
	encoder.Encode(dto)
}

// @Summary 피드 싫어요
// @Description
// @name FeedDisLike
// @Accept json
// @Produce json
// @Tags 피드
// @Router /feeds/dislike [post]
// @Param feedback body model.CreateFeedbackDTO true "피드 싫어요 정보"
// @Success 201 {object} utils.SimpleResponse[any]
// @Failure 400 {object} utils.SimpleResponse[string]
func (c *FeedbackController) FeedDisLike(w http.ResponseWriter, r *http.Request) {
	var feedback model.CreateFeedbackDTO
	if err := json.NewDecoder(r.Body).Decode(&feedback); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	err := c.Model.ToggleDisLike(feedback.UserID, feedback.TargetUserID)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	dto := utils.ResponseDTO[any](nil, http.StatusOK, nil)
	w.WriteHeader(dto.StatusCode)
	w.Header().Set("Content-Type", "application/json")
	encoder := json.NewEncoder(w)
	encoder.SetIndent("", "  ")
	encoder.Encode(dto)
}
