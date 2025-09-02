    FROM node:lts-alpine AS build

    WORKDIR /

    COPY package.json yarn.lock ./

    RUN npm install

    COPY . .

    RUN npm run build

    CMD ["node", ".output/server/index.mjs"]

    EXPOSE 3000
