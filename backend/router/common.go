package router

import (
	"context"
	"net/http"
)

type contextKey string

// http request에 context 추가
func setRequestContext(r *http.Request, key contextKey, value string) *http.Request {
	ctx := context.WithValue(r.Context(), key, value)
	return r.WithContext(ctx)
}
