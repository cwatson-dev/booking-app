#
# Builder stage.
# This state compile our TypeScript to get the JavaScript code
#
FROM node:14 AS builder

WORKDIR /usr/src/app

COPY package.json ./
COPY nodemon.json ./
COPY yarn.lock ./
COPY tsconfig*.json ./
COPY ./src ./src
RUN yarn install --frozen-lockfile
RUN yarn build
RUN ls -la && ls -la src

#
# Production stage.
# This state compile get back the JavaScript code from builder stage
# It will also install the production package only
#
FROM node:14-alpine

WORKDIR /app
ENV NODE_ENV=production

COPY package.json ./
COPY yarn.lock ./
RUN yarn install --frozen-lockfile --prod --non-interactive

## We just need the build to execute the command
COPY --from=builder /usr/src/app/build ./build

EXPOSE 8081