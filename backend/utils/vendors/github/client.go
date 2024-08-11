package github

import (
	"fmt"
	"io"
	"net/http"
	"strings"
)

func Authorization(code string) (string, error) {
	url := "https://github.com/login/oauth/access_token"
	method := "POST"

	payload := strings.NewReader(fmt.Sprintf(`{
		"client_id": "Iv23liNganHBQ9IMZq2W",
		"client_secret": "8ce5475eaefad738339858dc1ea3e3e84a32d84a",
		"code": "%s"
	}`, code))

	client := &http.Client{}
	req, err := http.NewRequest(method, url, payload)

	if err != nil {
		fmt.Println(err)
		return "", err
	}
	req.Header.Add("Content-Type", "application/json")

	res, err := client.Do(req)
	if err != nil {
		fmt.Println(err)
		return "", err
	}
	defer res.Body.Close()

	body, err := io.ReadAll(res.Body)
	if err != nil {
		fmt.Println(err)
		return "", err
	}
	return string(body), nil
}

func GetUserInfo(token string) ([]byte, error) {
	url := "https://api.github.com/user"
	method := "GET"

	client := &http.Client{}
	req, err := http.NewRequest(method, url, nil)
	if err != nil {
		return nil, err
	}

	req.Header.Add("Authorization", fmt.Sprintf("token %s", token))
	req.Header.Add("Accept", "application/json")

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
