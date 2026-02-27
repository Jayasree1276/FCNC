# Stage 1: Build & dependencies
FROM node:18 AS builder
WORKDIR /app
# Copy only dependency files first (better caching)
COPY package*.json ./
RUN npm install --production
# Copy application source code
COPY server.js .
# Stage 2: Runtime (small image)
FROM node:18-slim
WORKDIR /app
# Copy only required files from builder
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/server.js .
CMD ["node", "server.js"]
