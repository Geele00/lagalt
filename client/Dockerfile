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

FROM nginx:1.23.3-alpine

COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80 443

ENTRYPOINT ["nginx","-g","daemon off;"]
