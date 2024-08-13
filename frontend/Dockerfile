FROM node:22.6.0-alpine as dependencies

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

FROM node:22.6.0-alpine as builder

WORKDIR /usr/src/app

COPY . .
COPY --from=dependencies /usr/src/app/node_modules ./node_modules

RUN npm run build

FROM node:22.6.0-alpine as runner

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/next.config.js ./next.config.js
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/package.json ./package.json

EXPOSE 3000

CMD ["npm", "start"]