package common

import (
	"strconv"
)

// 문자열을 정수로 변환하는 헬퍼 함수
func ParseInt(s string) int {
	result, err := strconv.Atoi(s)
	if err != nil {
		return 0
	}
	return result
}
