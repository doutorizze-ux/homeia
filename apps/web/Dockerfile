# Base stage
FROM node:20-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Development stage
FROM base AS development
EXPOSE 3000
CMD ["npm", "run", "dev"]

# Production stage
FROM base AS build
RUN npm run build

FROM node:20-alpine AS production
WORKDIR /app
COPY --from=build /app/package*.json ./
COPY --from=build /app/next.config.ts ./
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/node_modules ./node_modules
EXPOSE 3000
CMD ["npm", "start"]
