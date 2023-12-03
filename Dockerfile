# Use a multi-stage build
FROM openjdk:17.0.1-jdk-slim as build

WORKDIR /app

# Copy only the necessary files for dependency resolution
COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .

# Download dependencies
RUN ./mvnw dependency:go-offline -B

# Copy the entire project source
COPY src src

# Build the application
RUN ./mvnw package -DskipTests

# Create the final image
FROM openjdk:17.0.1-jdk-slim

WORKDIR /app

# Copy the JAR file from the build stage
COPY --from=build target/demo-0.0.1-SNAPSHOT.jar demo.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "demo.jar"]

