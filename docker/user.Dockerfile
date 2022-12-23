FROM node:14-alpine as builder
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install
RUN npm i -g nx
COPY . .
RUN apk add --no-cache git
RUN nx run frontend-user:build

FROM node:14-alpine as runner
WORKDIR /app
COPY --from=builder /app/dist/apps/frontend/user .
RUN yarn install --production
EXPOSE 4200
CMD ["yarn", "start"]
