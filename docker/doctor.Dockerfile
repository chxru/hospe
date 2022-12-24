FROM node:14-alpine as builder
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install
RUN npm i -g nx
COPY . .
RUN apk add --no-cache git
RUN nx run frontend-doctor:build

FROM node:14-alpine as runner
WORKDIR /app
COPY --from=builder /app/dist/apps/frontend/doctor .
RUN rm next.config.js
COPY ./apps/frontend/next.config.js .
RUN yarn install --production
EXPOSE 4201
CMD ["npm", "run", "start", "--", "-p", "4201"]
