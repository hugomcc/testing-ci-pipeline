FROM node:16.8-alpine

RUN mkdir -p /backend
COPY ./ /backend

WORKDIR /backend
RUN npm ci
RUN npm run build