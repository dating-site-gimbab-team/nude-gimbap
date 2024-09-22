package utils

import (
	"time"
)

type Metadata struct {
	Timestamp int64  `json:"timestamp"`
	Timezone  string `json:"timezone"`
}

type MetaPagination struct {
	TotalCount  int `json:"totalCount"`
	TotalPages  int `json:"TotalPages"`
	PerPage     int `json:"perPage"`
	PrevPage    int `json:"prevPage"`
	CurrentPage int `json:"currentPage"`
	NextPage    int `json:"nextPage"`
}

type SimpleResponse[T any] struct {
	StatusCode int      `json:"statusCode"`
	Message    *string  `json:"message,omitempty"`
	Metadata   Metadata `json:"_metadata"`
	Data       *T       `json:"data"`
}

type PaginationResponse[T any] struct {
	StatusCode int            `json:"statusCode"`
	Message    *string        `json:"message,omitempty"`
	Metadata   Metadata       `json:"_metadata"`
	Pagination MetaPagination `json:"pagination"`
	Data       []T            `json:"data"`
}

func ResponseDTO[T any](data *T, code int, msg *string) SimpleResponse[T] {
	location, err := time.LoadLocation("Asia/Seoul")
	if err != nil {
		panic(err)
	}
	time.Local = location

	timestamp := time.Now().Unix()
	timezone, _ := time.Now().Zone()
	response := SimpleResponse[T]{
		StatusCode: code,
		Message:    msg,
		Metadata: Metadata{
			Timestamp: timestamp,
			Timezone:  timezone,
		},
		Data: data,
	}
	return response
}

func PaginationResponseDTO[T any](data []T, pagination MetaPagination, code int, msg *string) PaginationResponse[T] {
	location, err := time.LoadLocation("Asia/Seoul")
	if err != nil {
		panic(err)
	}
	time.Local = location
	timestamp := time.Now().Unix()
	timezone, _ := time.Now().Zone()
	response := PaginationResponse[T]{
		StatusCode: code,
		Message:    msg,
		Metadata: Metadata{
			Timestamp: timestamp,
			Timezone:  timezone,
		},
		Pagination: MetaPagination{
			TotalCount:  pagination.TotalCount,
			TotalPages:  pagination.TotalPages,
			CurrentPage: pagination.CurrentPage,
			PerPage:     pagination.PerPage,
			NextPage:    pagination.NextPage,
			PrevPage:    pagination.PrevPage,
		},
		Data: data,
	}
	return response
}
