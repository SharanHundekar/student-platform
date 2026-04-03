# ---- Stage 1: Build ----
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

# ---- Stage 2: Runtime ----
FROM node:20-alpine

WORKDIR /app

# create non-root user
RUN addgroup -S nodegroup && adduser -S nodeuser -G nodegroup

COPY --from=builder /app /app

USER nodeuser

EXPOSE 3000

ENV NODE_ENV=production

CMD ["node", "src/server.js"]