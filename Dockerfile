#BUILD

FROM node:22-alpine AS build

WORKDIR /app

COPY ./package.json ./package-lock.json ./

RUN npm install

COPY . .

RUN npm run build --prod

#rodar
FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /app/dist/passeio-app/browser /usr/share/nginx/html

EXPOSE 80

CMD nginx -g 'daemon off;'
 

