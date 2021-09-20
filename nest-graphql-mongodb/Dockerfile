FROM node:16.8-alpine AS builder

RUN mkdir -p /backend
COPY ./ /backend

WORKDIR /backend
RUN npm ci
RUN npm run build