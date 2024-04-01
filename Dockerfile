FROM node:20.10-alpine3.18 as build-stage
ENV TIMEZONE Asia/Shanghai
# RUN ["npm", "config", "set", "registry", "https://registry.npm.taobao.org/"]
WORKDIR /app
COPY package*.json ./
RUN ["npm", "install"]
COPY . .
RUN ["npm", "run", "build:app"]

FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80