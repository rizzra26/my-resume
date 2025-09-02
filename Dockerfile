    FROM node:lts-alpine AS build

    WORKDIR /

    COPY package.json yarn.lock ./

    RUN yarn install --frozen-lockfile

    COPY . .

    RUN yarn build

    FROM node:lts-alpine AS production

    WORKDIR /app

    COPY --from=build /app/.output /app/.output

    EXPOSE 3000

    CMD ["node", ".output/server/index.mjs"]