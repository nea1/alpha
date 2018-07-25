FROM node:9-alpine

COPY package*.json ./
RUN npm install

COPY alpha.js ./

ENTRYPOINT ["node", "alpha.js" ]
