package kakao

import (
	"fmt"
	"io"
	"net/http"
	"strings"
)

func Authorization(code string) ([]byte, error) {
	url := "https://kauth.kakao.com/oauth/token"
	method := "POST"
	payload := strings.NewReader(fmt.Sprintf("grant_type=authorization_code&client_id=a8da8d6da7d4438225f73f8792a91c53&redirect_uri=http://localhost:8080/callback/kakao&code=%s", code))

	client := &http.Client{}
	req, err := http.NewRequest(method, url, payload)

	if err != nil {
		fmt.Println(err)
		return nil, err
	}
	req.Header.Add("Content-Type", "application/x-www-form-urlencoded;charset=utf-8")

	res, err := client.Do(req)
	if err != nil {
		fmt.Println(err)
		return nil, err
	}
	defer res.Body.Close()

	body, err := io.ReadAll(res.Body)
	if err != nil {
		fmt.Println(err)
		return nil, err
	}
	return body, nil
}

func GetUserInfo(token *KakaoAuthorizationTokenInfo) ([]byte, error) {
	url := "https://kapi.kakao.com/v2/user/me"
	method := "GET"

	client := &http.Client{}
	req, err := http.NewRequest(method, url, nil)
	if err != nil {
		return nil, err
	}

	req.Header.Add("Authorization", fmt.Sprintf("Bearer %s", token.AccessToken))
	req.Header.Add("Content-type", "application/x-www-form-urlencoded;charset=utf-8")

	res, err := client.Do(req)
	if err != nil {
		return nil, err
	}
	defer res.Body.Close()

	body, err := io.ReadAll(res.Body)
	if err != nil {
		return nil, err
	}
	return body, nil
}
