FROM node:16
WORKDIR /229064_pratibha
COPY package.json /229064_pratibha
RUN npm install
COPY .  /229064_pratibha
CMD node server.js
EXPOSE 8000
