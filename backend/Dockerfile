FROM golang:1.22.5-alpine AS builder

ENV GO111MODULE=on \
    CGO_ENABLED=0 \
    GOOS=linux

WORKDIR /backend

COPY . ./

RUN go mod download

RUN go build -o main .

WORKDIR /dist

RUN cp /backend/main .

FROM scratch

COPY --from=builder /dist/main .

ENTRYPOINT ["/main"]
