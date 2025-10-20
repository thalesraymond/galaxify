# Quickstart: Galaxify Initial Setup

This guide provides the basic steps to get the Galaxify application running locally for development.

## Prerequisites

- Node.js (v20.x or later)
- pnpm
- A running MongoDB instance

## 1. Installation

Clone the repository and install the dependencies using pnpm.

```bash
# Install dependencies from the root of the monorepo
pnpm install
```

## 2. Environment Configuration

The backend requires a `.env` file with a connection string to your MongoDB instance.

1.  Navigate to the API package:
    ```bash
    cd packages/api
    ```
2.  Create a copy of the example environment file:
    ```bash
    cp .env.example .env
    ```
3.  Edit the `.env` file and set your `MONGODB_URI`:
    ```
    MONGODB_URI=mongodb://localhost:27017/galaxify
    ```

## 3. Running the Application

You can run the backend and frontend in separate terminals for development.

### Backend (API)

In a terminal at the project root:

```bash
pnpm --filter api dev
```

This will start the Express server, typically on port 3000.

### Frontend (Web)

In a second terminal at the project root:

```bash
pnpm --filter web dev
```

This will start the SvelteKit development server, typically on port 5173.

## 4. Running Tests

To run the test suites for both packages, execute the following command from the root directory:

```bash
pnpm test
```
