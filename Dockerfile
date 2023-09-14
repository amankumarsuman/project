FROM node:16.14.0-alpine as builder 

WORKDIR /app                                 

COPY package.json ./   

RUN npm install --legacy-peer-deps

COPY . .      

RUN npm run build 


FROM nginx:alpine

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]