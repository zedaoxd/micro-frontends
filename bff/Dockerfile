FROM node:20.13.0-slim

RUN apt-get update && apt-get install -y openssl procps

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm install

RUN npx prisma migrate dev --name "init"

EXPOSE 4000

CMD ["npm", "run", "start:dev"]