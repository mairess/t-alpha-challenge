FROM node:18.20-alpine

LABEL authors="maires"

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 5173

ENTRYPOINT [ "npm", "run" ]

CMD [ "dev" ]