#!/bin/bash

# Executa o Spring Boot na pasta backend
echo "Iniciando backend com Spring Boot..."
(cd backend && ./mvnw spring-boot:run)
(cd frontend && pnpm install && pnpm run start)
