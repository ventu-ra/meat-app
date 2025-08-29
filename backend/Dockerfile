# ===== Build Stage =====
FROM bellsoft/liberica-runtime-container:jdk-all-21-musl AS build
WORKDIR /app/backend

COPY mvnw pom.xml ./
COPY .mvn ./.mvn
COPY src ./src

RUN chmod +x mvnw && ./mvnw clean package -DskipTests

# Cria um runtime mínimo com módulos necessários ao Spring Boot
RUN jlink --module-path $JAVA_HOME/jmods \
  --add-modules \
java.base,java.logging,java.sql,java.xml,java.naming,java.management,java.instrument,jdk.management,jdk.unsupported,java.desktop,jdk.crypto.ec,java.security.jgss \
  --compress=1 --strip-debug --no-header-files --no-man-pages \
  --output /app/jlink-runtime

# ===== Runtime Stage =====
FROM alpine:3.18
WORKDIR /app

# Instala apenas os certificados necessários
RUN apk add --no-cache ca-certificates

# Copia o runtime mínimo e o JAR gerado
COPY --from=build /app/jlink-runtime /jlink-runtime
COPY --from=build /app/backend/target/*.jar ./app.jar

# Cria um usuário não-root para executar a aplicação
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

EXPOSE 8082
ENTRYPOINT ["/jlink-runtime/bin/java", "-jar", "/app/app.jar"]
