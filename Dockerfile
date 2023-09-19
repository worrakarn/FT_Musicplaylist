FROM node:18.17.1-alpine3.17 as step01

RUN apk add --update tini

WORKDIR /app
COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.23.0

WORKDIR /usr/share/nginx/html

COPY --from=step01 /app/dist .

COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]