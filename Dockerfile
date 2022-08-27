FROM node:16.17.0-alpine3.15
WORKDIR /app
COPY . .
RUN yarn install --production
CMD ["node","/app/src/index.js"]
