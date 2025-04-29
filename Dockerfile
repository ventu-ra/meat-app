FROM node:lts-alpine AS builder

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm \
    && pnpm install --frozen-lockfile

COPY . .

RUN pnpm run ng build --configuration production

FROM nginx:alpine

COPY --from=builder /app/dist/meat-app_19/browser/ /usr/share/nginx/html

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]
