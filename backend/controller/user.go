package controller

import (
	"backend/model"
	"backend/utils"
	"encoding/json"
	"net/http"
)

type UserController struct {
	Model *model.UserModel
}

// @Summary 전체 사용자 조회
// @Description
// @name GetUsers
// @Accept json
// @Produce json
// @Tags 사용자
// @Router /users [get]
// @Success 200 {object} utils.SimpleResponse[[]model.ItemDTO]
// @Failure 400 {object} utils.SimpleResponse[string]
func (c *UserController) GetUsers(w http.ResponseWriter, r *http.Request) {
	users, err := c.Model.GetAllUsers()
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	dto := utils.ResponseDTO[[]model.ItemDTO](&users, http.StatusOK, nil)
	w.WriteHeader(dto.StatusCode)
	json.NewEncoder(w).Encode(dto)
}

func (c *UserController) GetUser(w http.ResponseWriter, r *http.Request) {
	id, ok := r.Context().Value("user_id").(int)
	if !ok {
		http.Error(w, "User ID not found in context", http.StatusInternalServerError)
		return
	}

	user, err := c.Model.GetUserByID(id)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	if user == nil {
		http.Error(w, "User not found", http.StatusNotFound)
		return
	}
	dto := utils.ResponseDTO[model.User](user, http.StatusOK, nil)
	w.WriteHeader(dto.StatusCode)
	json.NewEncoder(w).Encode(dto)
}

// @Summary 사용자 생성
// @Description
// @name CreateUser
// @Accept json
// @Produce json
// @Tags 사용자
// @Router /users [post]
// @Param user body model.CreateUserDTO true "사용자 로그인 정보"
// @Success 201 {object} utils.SimpleResponse[any]
// @Failure 400 {object} utils.SimpleResponse[string]
func (c *UserController) CreateUser(w http.ResponseWriter, r *http.Request) {
	var user model.CreateUserDTO
	if err := json.NewDecoder(r.Body).Decode(&user); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	_, err := c.Model.InsertUser(user)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	dto := utils.ResponseDTO[any](nil, http.StatusCreated, nil)
	w.WriteHeader(dto.StatusCode)
	json.NewEncoder(w).Encode(dto)
}

func (c *UserController) UpdateUserName(w http.ResponseWriter, r *http.Request) {
	id, ok := r.Context().Value("user_id").(int)
	if !ok {
		http.Error(w, "User ID not found in context", http.StatusInternalServerError)
		return
	}

	var data struct {
		Name string `json:"name"`
	}
	if err := json.NewDecoder(r.Body).Decode(&data); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	if _, err := c.Model.UpdateUserName(id, data.Name); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusNoContent)
}

func (c *UserController) UpdateAge(w http.ResponseWriter, r *http.Request) {
	id, ok := r.Context().Value("user_id").(int)
	if !ok {
		http.Error(w, "User ID not found in context", http.StatusInternalServerError)
		return
	}

	var data struct {
		Age int `json:"age"`
	}
	if err := json.NewDecoder(r.Body).Decode(&data); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	if _, err := c.Model.UpdateAge(id, data.Age); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusNoContent)
}

func (c *UserController) UpdateProfileImage(w http.ResponseWriter, r *http.Request) {
	id, ok := r.Context().Value("user_id").(int)
	if !ok {
		http.Error(w, "User ID not found in context", http.StatusInternalServerError)
		return
	}

	var data struct {
		ProfileImage string `json:"profile_image"`
	}
	if err := json.NewDecoder(r.Body).Decode(&data); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	if _, err := c.Model.UpdateProfileImage(id, data.ProfileImage); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusNoContent)
}

func (c *UserController) DeleteUser(w http.ResponseWriter, r *http.Request) {
	id, ok := r.Context().Value("user_id").(int)
	if !ok {
		http.Error(w, "User ID not found in context", http.StatusInternalServerError)
		return
	}

	if _, err := c.Model.DeleteUser(id); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusNoContent)
}
