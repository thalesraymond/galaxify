# Research & Decisions: Initial Project Setup

**Status**: Completed

This document records the key architectural and technical decisions for the Galaxify MVP. These decisions were derived from the initial project backlog and the established constitution.

## Backend Technology Stack

- **Decision**: The backend will be built with Node.js, Express, and Mongoose.
- **Rationale**: This stack was explicitly defined in the project's foundational documents. It provides a robust, well-supported, and scalable platform for the API. TypeScript will be used to ensure type safety. Clean Architecture principles will be followed to ensure maintainability.
- **Alternatives Considered**: None. This stack was a prerequisite.

## Frontend Technology Stack

- **Decision**: The frontend will be built using SvelteKit.
- **Rationale**: SvelteKit was chosen for its performance, developer experience, and features like file-based routing, server-side rendering, and form actions that support progressive enhancement. This aligns with the project goal of creating a robust and accessible application.
- **Alternatives Considered**: None. This was a prerequisite.

## Database

- **Decision**: MongoDB will be the database, accessed via the Mongoose ODM.
- **Rationale**: The project requirements call for flexible data structures (especially for embedded documents like ship parts and planets), which is a strength of MongoDB. Mongoose provides schema validation and business logic modeling on top of MongoDB. The initial backlog specified Azure CosmoDB for MongoDB, but the connection will be abstracted to support any standard MongoDB instance.
- **Alternatives Considered**: Relational databases (e.g., PostgreSQL) were implicitly rejected by the choice of a document-based model in the project backlog.

## Authentication

- **Decision**: Authentication will be implemented using JSON Web Tokens (JWTs) stored in secure, httpOnly cookies.
- **Rationale**: This is a standard and secure method for authenticating users in a web application. Storing the JWT in an httpOnly cookie is a critical defense against XSS attacks, as it prevents client-side scripts from accessing the token. This approach was specified in the project backlog.
- **Alternatives Considered**: Session-based authentication was an alternative, but JWTs provide a more stateless and scalable solution suitable for a modern API-driven application.

## Testing Framework

- **Decision**: `vitest` will be used for both frontend and backend testing.
- **Rationale**: `vitest` offers a fast, modern testing experience with first-class Vite integration, which is ideal for the SvelteKit frontend. For the backend, using `vitest` with the `@swc/jest` transformer provides significant performance gains over other test runners, leading to faster CI/CD cycles.
- **Alternatives Considered**: Jest is a common alternative, but `vitest` provides better integration with the chosen build tools and superior performance.
