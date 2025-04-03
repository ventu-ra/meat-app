# Etapa 1: Construção da aplicação Angular usando PNPM
FROM node:lts-alpine AS builder

WORKDIR /app

# Instalar PNPM globalmente
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copiar apenas os arquivos essenciais para instalar dependências
COPY package.json pnpm-lock.yaml ./

# Instalar dependências sem salvar e com cache otimizado
RUN pnpm install --frozen-lockfile

# Copiar o restante do código
COPY . .

# Construir o projeto Angular
RUN pnpm run ng build --configuration=production

# Etapa 2: Criar imagem final enxuta com Nginx
FROM nginx:alpine

# Copiar arquivos de build para o diretório de arquivos estáticos do Nginx
COPY --from=builder /app/dist/browser /usr/share/nginx/html

# Expor a porta 80
EXPOSE 80

# Comando de inicialização
ENTRYPOINT ["nginx", "-g", "daemon off;"]
