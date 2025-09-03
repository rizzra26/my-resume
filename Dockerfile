# Menggunakan image Node.js sebagai base image
FROM node:16-alpine

# Set working directory
WORKDIR /

# Copy package.json dan package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy semua file aplikasi ke dalam container
COPY . .

# Build aplikasi Nuxt.js
RUN npm run build

# Menjalankan aplikasi di port 3000
CMD ["node", ".output/server/index.mjs"]

# Expose port 3000
EXPOSE 3000
