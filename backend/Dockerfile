# ===== Build Stage =====
FROM bellsoft/liberica-runtime-container:jdk-all-21-musl AS build
WORKDIR /app/backend

COPY mvnw pom.xml ./
COPY .mvn ./.mvn
COPY src ./src

RUN chmod +x mvnw && ./mvnw clean package -DskipTests

# Cria um runtime mínimo com módulos necessários ao Spring Boot
# Inclui java.desktop para java.beans (PropertyEditorSupport) e TLS (jdk.crypto.ec)
RUN jlink --module-path $JAVA_HOME/jmods \
  --add-modules \
java.base,java.logging,java.sql,java.xml,java.naming,java.management,java.instrument,jdk.management,jdk.unsupported,java.desktop,jdk.crypto.ec,java.security.jgss \
  --compress=2 --strip-debug --no-header-files --no-man-pages \
  --output /app/jlink-runtime

# ===== Runtime Stage =====
FROM alpine:3.18
WORKDIR /app

# Atualiza repositórios e instala certificados
RUN apk update && apk add --no-cache ca-certificates

COPY --from=build /app/jlink-runtime /jlink-runtime
COPY --from=build /app/backend/target/*.jar ./app.jar

EXPOSE 8082
ENTRYPOINT ["/jlink-runtime/bin/java", "-jar", "/app/app.jar"]
