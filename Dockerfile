# Stage 1: Build the Nuxt app
FROM node:16 AS build

WORKDIR /my-resume
COPY . .
RUN npm install
RUN npm run build

# Stage 2: Run Nuxt app
FROM node:16

WORKDIR /my-resume

COPY --from=build /my-resume /my-resume

EXPOSE 3000

CMD ["npm", "run", "start"]
