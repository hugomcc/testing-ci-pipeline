FROM node:16.8-alpine AS builder


WORKDIR /backend
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build
