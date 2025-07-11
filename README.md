# Chat POC - Your Car Your Way

This project is a proof of concept for a real-time chat application, built with Angular for the front-end and Spring Boot for the back-end.

## Project Structure

- `front/`: Angular application (client)
- `src/main/java/`: Java source code (Spring Boot server)
- `src/main/resources/`: Spring Boot configuration files
- `src/test/java/`: Java unit tests

## Requirements

- Node.js and npm
- Java 17+
- Maven

## Running the Back-end api

```
mvn clean install
mvn spring-boot:run
```
The server starts at [http://localhost:8080](http://localhost:8080).

## Running the Front-end app

```
cd front
npm install
ng serve --open
```
The Angular application is available at [http://localhost:4200](http://localhost:4200).

## Technologies Used

- **Angular 19**
- **Spring Boot 3**
- **SockJS & STOMP** for WebSocket communication
- **Lombok** for simplifying Java code

## Resources

- [Spring WebSocket Guide](https://spring.io/guides/gs/messaging-stomp-websocket)
- [Angular Documentation](https://angular.dev/)
