FROM node:19-alpine3.16 as build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm cache clean --force
RUN rm -rf node_modules
RUN npm install

COPY . ./

ARG REACT_APP_API_BASE_URL
ENV REACT_APP_API_BASE_URL=${REACT_APP_API_BASE_URL}

RUN npm run build

FROM maven:3.6.0-jdk-11-slim
COPY pwd/certificate.crt /etc/ssl/certificate.crt
COPY pwd/private_key.key /etc/ssl/private.key

RUN update-ca-certificates


FROM nginx:latest

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80 443

ENTRYPOINT ["nginx","-g","daemon off;"]
