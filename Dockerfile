# Stage 1: Build
FROM node:18-alpine AS builder

# Install pnpm
RUN npm install -g pnpm

# Set working directory
WORKDIR /app

# Copy dependency manifests
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy all source code
COPY . .

# Build all packages
RUN pnpm build

# Deploy the api package to a separate directory for production
RUN pnpm --filter api deploy /prod/api

# Stage 2: Production
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Set production environment
ENV NODE_ENV=production

# Copy deployed api package from builder
COPY --from=builder /prod/api /app/server

# Copy the built client
COPY --from=builder /app/packages/web/build /app/client/dist


# Expose port and start server
EXPOSE 3001
CMD ["node", "server/dist/index.js"]
