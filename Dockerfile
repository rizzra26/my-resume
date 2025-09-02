    FROM node:lts-alpine AS build

    WORKDIR /

    COPY package.json yarn.lock ./

    RUN yarn install

    COPY . .

    RUN yarn build

    FROM node:lts-alpine AS production

    WORKDIR /app

    COPY --from=build /.output /.output

    EXPOSE 3000

    CMD ["node", ".output/server/index.mjs"]