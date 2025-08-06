FROM node:22-alpine

WORKDIR /app

COPY . .

RUN npm ci

RUN npm run build

EXPOSE 3000

CMD [ "node", "/app/dist/server.js" ]