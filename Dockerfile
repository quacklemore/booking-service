FROM node:12-alpine
WORKDIR /booking-service
COPY . .
RUN npm install --production
RUN npm run seedDB
CMD ["node", "server/index.js"]