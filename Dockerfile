# Etapa 1: Construção da aplicação Angular usando Bun
FROM oven/bun:alpine AS builder

WORKDIR /app

# Copiar apenas os arquivos essenciais para instalar dependências
COPY package.json bun.lock ./

# Instalar dependências com Bun
RUN bun install --frozen-lockfile --no-save

# Copiar o restante do código
COPY . .

# Construir o projeto Angular
RUN bun run ng build --configuration=production

# Etapa 2: Criar imagem final enxuta com Nginx
FROM nginx:alpine

# Copiar arquivos de build para o diretório de arquivos estáticos do Nginx
COPY --from=builder /app/dist/browser /usr/share/nginx/html

# Expor a porta 80
EXPOSE 80

# Comando de inicialização
ENTRYPOINT ["nginx", "-g", "daemon off;"]
