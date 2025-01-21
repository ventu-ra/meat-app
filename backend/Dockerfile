# Etapa 1: Construção da aplicação (builder)
FROM node:20 AS builder

# Definir o diretório de trabalho dentro do container
WORKDIR /backend

# Copiar o arquivo package.json e lock
COPY package*.json ./

# Instalar as dependências do projeto com Yarn
RUN yarn install

# Copiar o código-fonte da aplicação para o container
COPY . .


# Expor a porta 80 para acessar o conteúdo
EXPOSE 3001

# Comando para iniciar o servidor
CMD ["yarn", "start"]
