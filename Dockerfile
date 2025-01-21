# Etapa 1: Construção da aplicação Angular
FROM node:16.14.0 AS builder

# Diretório de trabalho
WORKDIR /app

# Copiar dependências
COPY package.json yarn.lock ./

# Instalar dependências
RUN yarn install

# Copiar todo o código para o container
COPY . .

# Construir o projeto Angular
RUN yarn run ng build --prod

# Etapa 2: Servir os arquivos com Nginx
FROM nginx:alpine

# Copiar arquivos de build para o diretório de arquivos estáticos do Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Expor a porta 80
EXPOSE 80

# Comando de inicialização
CMD ["nginx", "-g", "daemon off;"]
