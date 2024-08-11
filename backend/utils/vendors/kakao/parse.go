package kakao

import (
	"backend/utils/vendors/common"
	"encoding/json"
)

type KakaoAuthorizationTokenInfo struct {
	AccessToken           string `json:"access_token"`
	TokenType             string `json:"token_type"`
	RefreshToken          string `json:"refresh_token"`
	IdToken               string `json:"id_token"`
	ExpiresIn             int    `json:"expires_in"`
	Scope                 string `json:"scope"`
	RefreshTokenExpiresIn int    `json:"refresh_token_expires_in"`
}

func ParseToken(body []byte) (*KakaoAuthorizationTokenInfo, error) {
	var token KakaoAuthorizationTokenInfo
	err := json.Unmarshal(body, &token)
	if err != nil {
		return nil, err
	}

	return &token, nil
}

type KakaoAuthorizationUserInfo struct {
	ID           int        `json:"id"`
	ConnectedAt  string     `json:"connected_at"`
	Properties   Properties `json:"properties"`
	KakaoAccount Account    `json:"kakao_account"`
}

type Properties struct {
	Nickname       string `json:"nickname"`
	ProfileImage   string `json:"profile_image"`
	ThumbnailImage string `json:"thumbnail_image"`
}

type Account struct {
	ProfileNicknameNeedsAgreement bool    `json:"profile_nickname_needs_agreement"`
	ProfileImageNeedsAgreement    bool    `json:"profile_image_needs_agreement"`
	Profile                       Profile `json:"profile"`
}

type Profile struct {
	Nickname          string `json:"nickname"`
	ThumbnailImageURL string `json:"thumbnail_image_url"`
	ProfileImageURL   string `json:"profile_image_url"`
	IsDefaultImage    bool   `json:"is_default_image"`
	IsDefaultNickname bool   `json:"is_default_nickname"`
}

func ParseUser(body []byte) (*common.CommonAuthorizationUserInfo, error) {
	var user KakaoAuthorizationUserInfo
	err := json.Unmarshal(body, &user)
	if err != nil {
		return nil, err
	}
	commonUser := common.CommonAuthorizationUserInfo{
		Id:         user.ID,
		ProfileUrl: user.Properties.ProfileImage,
		Name:       user.Properties.Nickname,
	}
	return &commonUser, err
}
