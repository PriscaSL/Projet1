# Build Stage
FROM node:18-alpine as build
WORKDIR /app

# Installer TypeScript globalement compatible avec ton code
RUN npm install -g typescript@4.9

COPY package*.json ./
RUN npm install

COPY . .
# Compilation TS
RUN npm run build

# Runtime Stage
FROM node:18-alpine
WORKDIR /app

COPY package*.json ./
RUN npm install --only=production

COPY --from=build /app/build ./build
COPY .env .env

EXPOSE 3000
CMD ["node", "build/server.js"]
