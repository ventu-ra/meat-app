# Etapa 1: build da aplicação
FROM maven:3.9.8-eclipse-temurin-21 AS builder

WORKDIR /app

# Copia o pom.xml e baixa as dependências em cache
COPY pom.xml .
RUN mvn dependency:go-offline -B

# Copia o código e gera o JAR
COPY src ./src
RUN mvn clean package -DskipTests

# Etapa 2: imagem final, mais leve
FROM eclipse-temurin:21-jre-alpine

WORKDIR /app

# Copia o JAR da etapa de build
COPY --from=builder /app/target/*.jar app.jar

EXPOSE 8082

ENTRYPOINT ["java","-jar","app.jar"]
