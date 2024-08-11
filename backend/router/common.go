package router

import (
	"context"
	"net/http"
)

type contextKey string

func setRequestContext(r *http.Request, key contextKey, value string) *http.Request {
	ctx := context.WithValue(r.Context(), key, value)
	return r.WithContext(ctx)
}
