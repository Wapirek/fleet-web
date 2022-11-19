# Stage 1
FROM node:16-alpine3.14 as build-step

WORKDIR /app

COPY package.json /app

RUN npm install

COPY ./ /app/

ARG configuration=production

RUN npm run build -- --output-path=./dist/out --configuration $configuration

# Stage 2
FROM nginx:alpine

COPY --from=build-step /app/dist/out/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/

EXPOSE 4000

# When the container starts, replace the env.js with values from environment variables
CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/config/env.template.js > /usr/share/nginx/html/assets/config/env.js && exec nginx -g 'daemon off;'"]
