package github

import (
	"backend/utils/vendors/common"
	"encoding/json"
	"net/url"
)

type GithubAuthorizationTokenInfo struct {
	AccessToken           string
	ExpiresIn             int
	RefreshToken          string
	RefreshTokenExpiresIn int
	Scope                 string
	TokenType             string
}

func ParseToken(token string) GithubAuthorizationTokenInfo {
	values, err := url.ParseQuery((token))

	if err != nil {
		return GithubAuthorizationTokenInfo{}
	}

	tokenInfo := GithubAuthorizationTokenInfo{
		AccessToken:           values.Get("access_token"),
		ExpiresIn:             common.ParseInt(values.Get("expires_in")),
		RefreshToken:          values.Get("refresh_token"),
		RefreshTokenExpiresIn: common.ParseInt(values.Get("refresh_token_expires_in")),
		Scope:                 values.Get("scope"),
		TokenType:             values.Get("token_type"),
	}
	return tokenInfo
}

type GithubAuthorizationUserInfo struct {
	Id        int    `json:"id"`
	AvatarURL string `json:"avatar_url"`
	Name      string `json:"name"`
}

func ParseUser(body []byte) (*common.CommonAuthorizationUserInfo, error) {
	var user GithubAuthorizationUserInfo
	err := json.Unmarshal(body, &user)
	if err != nil {
		return nil, err
	}

	commonUser := common.CommonAuthorizationUserInfo{
		Id:         user.Id,
		ProfileUrl: user.AvatarURL,
		Name:       user.Name,
	}
	return &commonUser, err
}
