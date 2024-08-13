#!/bin/bash

# ECR 배포 레포 이름 설정
REPO_NAME='nude-fe'
# AWS 토큰으로 로그인
aws ecr get-login-password --region ap-northeast-2 | docker login --username AWS --password-stdin xxx.dkr.ecr.ap-northeast-2.amazonaws.com
# 빌드 시 현재 날짜 설정
CURRENT_DATE=$(date +"%Y%m%d")
# 같은 날짜에 생성 된 이미지 개수 확인
IMAGE_COUNT=$(aws ecr describe-images \
    --repository-name $REPO_NAME \
    --filter tagStatus=TAGGED \
    | jq -c --arg date "$CURRENT_DATE" '.imageDetails[] | select( .imageTags[] | contains($date) )' \
    | wc -l)
# 같은 날짜에 생성 된 이미지 개수 1 증가
IMAGE_COUNT=$((IMAGE_COUNT + 1))
# 이미지 TAG 지정
DOCKER_TAG="${REPO_NAME}:${CURRENT_DATE}-${IMAGE_COUNT}"

git pull
# buildx 이미지 지정
docker buildx create --use --name multi-arch-builder
# buildx로 여러 플랫폼 배포 이미지 빌드 후 ECR에 Push
docker buildx build --platform=linux/amd64,linux/arm64/v8 -t xxx.dkr.ecr.ap-northeast-2.amazonaws.com/$DOCKER_TAG . --push