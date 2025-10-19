# Dockerfile for the Web service

# 1. Use a Node.js base image
FROM node:18-alpine AS base

# 2. Set up pnpm
RUN npm install -g pnpm

# 3. Create a workspace directory
WORKDIR /app

# 4. Copy root dependency files
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# 5. Copy project-specific dependency files
COPY packages/shared/package.json ./packages/shared/package.json
COPY packages/web/package.json ./packages/web/package.json

# 6. Install all dependencies
RUN pnpm install --frozen-lockfile

# 7. Copy the rest of the source code
COPY . .

# 8. Build the project
RUN pnpm --filter web build

# 9. Set the working directory to the web package
WORKDIR /app/packages/web

# 10. Set the command to run the application
# The output of an adapter-node build is a standard Node app
CMD [ "node", "./build/index.js" ]
