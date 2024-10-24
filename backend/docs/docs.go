// Package docs Code generated by swaggo/swag. DO NOT EDIT
package docs

import "github.com/swaggo/swag"

const docTemplate = `{
    "schemes": {{ marshal .Schemes }},
    "swagger": "2.0",
    "info": {
        "description": "{{escape .Description}}",
        "title": "{{.Title}}",
        "contact": {},
        "version": "{{.Version}}"
    },
    "host": "{{.Host}}",
    "basePath": "{{.BasePath}}",
    "paths": {
        "/feeds/dislike": {
            "post": {
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "피드"
                ],
                "summary": "피드 싫어요",
                "parameters": [
                    {
                        "description": "피드 싫어요 정보",
                        "name": "feedback",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/model.CreateFeedbackDTO"
                        }
                    }
                ],
                "responses": {
                    "201": {
                        "description": "Created",
                        "schema": {
                            "$ref": "#/definitions/utils.SimpleResponse-any"
                        }
                    },
                    "400": {
                        "description": "Bad Request",
                        "schema": {
                            "$ref": "#/definitions/utils.SimpleResponse-string"
                        }
                    }
                }
            }
        },
        "/feeds/like": {
            "post": {
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "피드"
                ],
                "summary": "피드 좋아요",
                "parameters": [
                    {
                        "description": "피드 좋아요 정보",
                        "name": "feedback",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/model.CreateFeedbackDTO"
                        }
                    }
                ],
                "responses": {
                    "201": {
                        "description": "Created",
                        "schema": {
                            "$ref": "#/definitions/utils.SimpleResponse-any"
                        }
                    },
                    "400": {
                        "description": "Bad Request",
                        "schema": {
                            "$ref": "#/definitions/utils.SimpleResponse-string"
                        }
                    }
                }
            }
        },
        "/users": {
            "get": {
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "사용자"
                ],
                "summary": "전체 사용자 조회",
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/utils.SimpleResponse-array_model_ItemDTO"
                        }
                    },
                    "400": {
                        "description": "Bad Request",
                        "schema": {
                            "$ref": "#/definitions/utils.SimpleResponse-string"
                        }
                    }
                }
            },
            "post": {
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "사용자"
                ],
                "summary": "사용자 생성",
                "parameters": [
                    {
                        "description": "사용자 로그인 정보",
                        "name": "user",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/model.CreateUserDTO"
                        }
                    }
                ],
                "responses": {
                    "201": {
                        "description": "Created",
                        "schema": {
                            "$ref": "#/definitions/utils.SimpleResponse-any"
                        }
                    },
                    "400": {
                        "description": "Bad Request",
                        "schema": {
                            "$ref": "#/definitions/utils.SimpleResponse-string"
                        }
                    }
                }
            }
        },
        "/users/{user_id}": {
            "get": {
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "사용자"
                ],
                "summary": "사용자 조회",
                "parameters": [
                    {
                        "type": "integer",
                        "description": "사용자 ID",
                        "name": "user_id",
                        "in": "path",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/utils.SimpleResponse-model_User"
                        }
                    },
                    "400": {
                        "description": "Bad Request",
                        "schema": {
                            "$ref": "#/definitions/utils.SimpleResponse-string"
                        }
                    }
                }
            }
        }
    },
    "definitions": {
        "model.CreateFeedbackDTO": {
            "type": "object",
            "properties": {
                "targetUserId": {
                    "type": "integer"
                },
                "userId": {
                    "type": "integer"
                }
            }
        },
        "model.CreateUserDTO": {
            "type": "object",
            "properties": {
                "age": {
                    "type": "integer"
                },
                "gender": {
                    "type": "integer"
                },
                "name": {
                    "type": "string"
                },
                "phone_number": {
                    "type": "string"
                },
                "profile_image": {
                    "type": "string"
                },
                "provider": {
                    "type": "string"
                }
            }
        },
        "model.ItemDTO": {
            "type": "object",
            "properties": {
                "age": {
                    "type": "integer"
                },
                "gender": {
                    "type": "integer"
                },
                "id": {
                    "type": "integer"
                },
                "name": {
                    "type": "string"
                },
                "phone_number": {
                    "type": "string"
                },
                "profile_image": {
                    "type": "string"
                },
                "provider": {
                    "type": "string"
                }
            }
        },
        "model.User": {
            "type": "object",
            "properties": {
                "age": {
                    "type": "integer"
                },
                "created_at": {
                    "type": "string"
                },
                "gender": {
                    "type": "integer"
                },
                "id": {
                    "type": "integer"
                },
                "name": {
                    "type": "string"
                },
                "phone_number": {
                    "type": "string"
                },
                "profile_image": {
                    "type": "string"
                },
                "provider": {
                    "type": "string"
                }
            }
        },
        "utils.Metadata": {
            "type": "object",
            "properties": {
                "timestamp": {
                    "type": "integer"
                },
                "timezone": {
                    "type": "string"
                }
            }
        },
        "utils.SimpleResponse-any": {
            "type": "object",
            "properties": {
                "_metadata": {
                    "$ref": "#/definitions/utils.Metadata"
                },
                "data": {},
                "message": {
                    "type": "string"
                },
                "statusCode": {
                    "type": "integer"
                }
            }
        },
        "utils.SimpleResponse-array_model_ItemDTO": {
            "type": "object",
            "properties": {
                "_metadata": {
                    "$ref": "#/definitions/utils.Metadata"
                },
                "data": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/model.ItemDTO"
                    }
                },
                "message": {
                    "type": "string"
                },
                "statusCode": {
                    "type": "integer"
                }
            }
        },
        "utils.SimpleResponse-model_User": {
            "type": "object",
            "properties": {
                "_metadata": {
                    "$ref": "#/definitions/utils.Metadata"
                },
                "data": {
                    "$ref": "#/definitions/model.User"
                },
                "message": {
                    "type": "string"
                },
                "statusCode": {
                    "type": "integer"
                }
            }
        },
        "utils.SimpleResponse-string": {
            "type": "object",
            "properties": {
                "_metadata": {
                    "$ref": "#/definitions/utils.Metadata"
                },
                "data": {
                    "type": "string"
                },
                "message": {
                    "type": "string"
                },
                "statusCode": {
                    "type": "integer"
                }
            }
        }
    },
    "securityDefinitions": {
        "BearerAuth": {
            "type": "apiKey",
            "name": "Authorization",
            "in": "header"
        }
    }
}`

// SwaggerInfo holds exported Swagger Info so clients can modify it
var SwaggerInfo = &swag.Spec{
	Version:          "1.0.0",
	Host:             "localhost:8080",
	BasePath:         "/api",
	Schemes:          []string{},
	Title:            "개인 프로젝트 API",
	Description:      "",
	InfoInstanceName: "swagger",
	SwaggerTemplate:  docTemplate,
	LeftDelim:        "{{",
	RightDelim:       "}}",
}

func init() {
	swag.Register(SwaggerInfo.InstanceName(), SwaggerInfo)
}
