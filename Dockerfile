# Etapa 1: Construção da aplicação (builder)
FROM node:16.14.0 AS builder

# Definir o diretório de trabalho dentro do container
WORKDIR /app

# Copiar o arquivo package.json e yarn.lock (se existir) para o diretório de trabalho
COPY package.json yarn.lock ./

# Instalar as dependências do projeto com Yarn
RUN yarn install

# Copiar o código-fonte da aplicação para o container
COPY . .

# Build da aplicação Angular com Yarn
RUN npx ng build --prod

# Etapa 2: Servindo a aplicação (serve)
FROM nginx:alpine

# Copiar os arquivos de build para o diretório de arquivos estáticos do Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Expor a porta 80 para acessar o conteúdo
EXPOSE 3000

# Comando para iniciar o servidor Nginx
CMD ["nginx", "-g", "daemon off;"]
