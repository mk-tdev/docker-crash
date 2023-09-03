FROM node:latest

COPY package.json /app/
COPY src /app/

WORKDIR /app

RUN npm install
CMD ["node", "index.js"] 