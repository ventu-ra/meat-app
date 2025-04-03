# Etapa 1: Construção da aplicação (builder)
FROM oven/bun:alpine AS builder

WORKDIR /backend

# Copiar apenas os arquivos essenciais para instalar dependências
COPY package.json bun.lockb ./

# Instalar apenas dependências de produção
RUN bun install --frozen-lockfile --no-save

# Copiar todo o código-fonte
COPY . .

# Etapa 2: Criar imagem final enxuta
FROM oven/bun:alpine

WORKDIR /backend

# Copiar apenas os arquivos necessários do builder
COPY --from=builder /backend/node_modules ./node_modules
COPY --from=builder /backend/package.json ./package.json
COPY --from=builder /backend/. ./
EXPOSE 3001

ENTRYPOINT ["bun", "run", "start"]
