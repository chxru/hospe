FROM node:14-alpine as builder
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install
RUN npm i -g nx
COPY . .
RUN apk add --no-cache git
RUN nx run services-api:build

FROM node:14-alpine as runner
WORKDIR /app
COPY --from=builder /app/dist/apps/services/api .
RUN yarn install --production
EXPOSE 5000
CMD ["node", "main.js"]
