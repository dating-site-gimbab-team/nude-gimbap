package vendors

import (
	"backend/utils/vendors/github"
	"backend/utils/vendors/kakao"
)

func Authorization(code string, vendor_name string) interface{} {
	if vendor_name == "github" {
		token_str, _ := github.Authorization(code)
		if token_str != "" {
			token_info := github.ParseToken(token_str)
			body, _ := github.GetUserInfo(token_info.AccessToken)
			if body != nil {
				user_info, _ := github.ParseUser(body)
				if user_info != nil {
					return user_info
				} else {
					return nil
				}
			} else {
				return nil
			}
		} else {
			return nil
		}
	} else if vendor_name == "kakao" {
		token_str, _ := kakao.Authorization(code)
		if token_str != nil {
			token_info, _ := kakao.ParseToken(token_str)
			body, _ := kakao.GetUserInfo(token_info)
			if body != nil {
				user_info, _ := kakao.ParseUser(body)
				if user_info != nil {
					return user_info
				} else {
					return nil
				}
			} else {
				return nil
			}
		} else {
			return nil
		}
	} else {
		panic("지원하지 않는 벤더 이름입니다.")
	}
}
