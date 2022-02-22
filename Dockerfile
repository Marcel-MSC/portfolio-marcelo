# syntax=docker/dockerfile:1
FROM node:12-alpine
RUN npm install --silent
RUN npm install react-scripts@3.3.1 -g -silent
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "start"]