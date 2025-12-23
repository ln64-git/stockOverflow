## Description

A full-stack inventory management system with Vue.js frontend and Spring Boot backend—RESTful API, JWT authentication, and shared inventory lists with real-time CRUD operations.

## Skills / Tools / Stack

- Vue.js / Nuxt.js
- Spring Boot
- PostgreSQL
- JWT Authentication
- RESTful API Design

# Summary

StockOverflow is a full-stack application for managing shared inventory lists. The Vue.js frontend provides a reactive interface for CRUD operations while the Spring Boot backend handles data persistence and authentication.

The system separates concerns cleanly. Nuxt.js handles server-side rendering and routing on the frontend. Pinia manages state. Spring Boot exposes a RESTful API documented with Swagger. JWT tokens secure access to inventory data.

Built as a demonstration of full-stack development across two distinct ecosystems—JavaScript/TypeScript on the frontend, Java on the backend—with PostgreSQL bridging both.

## Features

- Reactive frontend interface with Vue.js and Nuxt.js
- Pinia state management for predictable data flow
- Spring Boot RESTful API with clean endpoint design
- JWT authentication for secure user sessions
- PostgreSQL database with robust data persistence
- Swagger API documentation for endpoint discovery
- Tailwind CSS with DaisyUI components
- Axios HTTP client for API communication
- TypeScript throughout the frontend codebase
- Maven build automation for the Java backend

### Roadmap

1. Add inventory categories and filtering
2. Implement low-stock alerts and notifications
3. Build barcode scanning for item lookup
4. Create multi-user collaboration with permissions
5. Add export functionality for reports

### Instructions

1. Start the Spring Boot backend with `mvn spring-boot:run` from the java directory
2. Configure PostgreSQL connection in application properties
3. Install frontend dependencies with `npm install` from the nuxt directory
4. Start the frontend development server with `npm run dev`
5. Access the application at `http://localhost:3000`

### License

MIT
