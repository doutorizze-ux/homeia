FROM node:20-slim AS base
# Prisma needs openssl on minimal debian/ubuntu bases
RUN apt-get update -y && apt-get install -y openssl
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npx prisma generate

FROM base AS build
RUN npm run build

FROM node:20-slim AS production
RUN apt-get update -y && apt-get install -y openssl
WORKDIR /app
COPY --from=build /app/package*.json ./
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/prisma ./prisma
EXPOSE 3002
CMD ["sh", "-c", "npx prisma db push --accept-data-loss && node dist/main"]
