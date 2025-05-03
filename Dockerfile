# Etapa de build usando uma imagem leve
FROM node:20-alpine AS builder

# Instala dependências essenciais para Angular e compilação
RUN apk add --no-cache libc6-compat openssl

WORKDIR /app

# Copia arquivos de dependência primeiro (para cache eficiente)
COPY package.json pnpm-lock.yaml ./

# Instala o pnpm e dependências da app
RUN npm install -g pnpm \
    && pnpm install --frozen-lockfile

# Copia restante do projeto
COPY . .

# Build Angular app para produção
RUN pnpm run ng build --configuration production

# Etapa final usando nginx alpine
FROM nginx:alpine

# Remove arquivos default do nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia os artefatos da build
COPY --from=builder /app/dist/browser/ /usr/share/nginx/html

# Expondo a porta
EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]
