FROM node:7-slim
RUN mkdir -p /src/app
WORKDIR /src
RUN npm install -g yarn
RUN yarn global add ava webpack@2.1.0-beta.25 webpack-dev-server@2.1.0-beta.9 babel-preset-es2015@6.18.0
WORKDIR /src/app
EXPOSE 8080
CMD ["yarn", "run", "dev"]
