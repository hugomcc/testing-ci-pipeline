FROM node:16.8-alpine

RUN mkdir -p /frontend
COPY ./ /frontend

WORKDIR /frontend
RUN npm ci
RUN npm run build