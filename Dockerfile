FROM node:16-alpine as base
WORKDIR /app

FROM base as build
COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile
COPY . ./
RUN yarn build

FROM base
COPY --from=build /app/dist src
CMD node src
