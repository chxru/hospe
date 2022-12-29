# Hospe

## Prerequisites

1. [Node Js](https://nodejs.org/en/download/)

## Initialize development environment

2. Make sure yarn is installed  
   `npm i -g yarn`
3. Install dependencies  
   `yarn`
4. Install nx globally  
   `npm install -g nx`
5. Initiate redis and mongodb instances  
   `docker-compose up -d`
6. Start application using nx command  
   `nx run <app-name>:serve`

## Applications and libraries

- `services-api` API
- `frontend-user` Next.js user application
- `frontend-doctor` Next.js doctor application
- `frontend-management` Next.js management application
- `next` Common Next.js files library
- `types` Shared types
- `ui` UI components library with Storybooks

```shell
# eg: Open next.js user app
nx run frontend-user:serve
```
