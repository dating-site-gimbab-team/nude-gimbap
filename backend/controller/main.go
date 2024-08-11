package controller

import (
	"backend/utils/vendors"
	"encoding/json"
	"net/http"
)

type MainController struct {
}

func (c *MainController) GetOAuthCallback(w http.ResponseWriter, r *http.Request, vendor_name string) {
	query := r.URL.Query()
	code := query.Get("code")
	if code == "" {
		http.Error(w, "code 쿼리가 존재하지 않습니다.", http.StatusInternalServerError)
		return
	}

	user_info := vendors.Authorization(code, vendor_name)
	if user_info != nil {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		json.NewEncoder(w).Encode(user_info)
	} else {
		http.Error(w, "에러", http.StatusInternalServerError)
	}
}
