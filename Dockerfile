# Stage 1: Build the Nuxt app
FROM node:16 AS build

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

# Stage 2: Run Nuxt app
FROM node:16

WORKDIR /app

COPY --from=build /app /app

# CMD ["node", ".output/server/index.mjs"]
CMD ["npx", "nuxi", "preview"]

EXPOSE 3000
