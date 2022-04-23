FROM golang:latest AS builder
WORKDIR /app
COPY . . 

RUN CGO_ENABLED=0 GOOS=linux go build rocks.go

FROM scratch
WORKDIR /app
COPY --from=builder /app .

ENTRYPOINT ["./rocks"]