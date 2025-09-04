FROM node:18

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY yarn.lock ./

ENV NODE_ENV=production
ENV NITRO_PRESET=node-server

# Install dependencies
RUN npm install
# atau RUN yarn install

# Copy source code
COPY . .

# Build aplikasi
RUN npm run build
# atau RUN yarn build

# Expose port
EXPOSE 3000

# Start aplikasi
CMD ["node", ".output/server/index.mjs"]