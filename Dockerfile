FROM node:8
ADD . /app
WORKDIR /app
RUN npm i 
ENTRYPOINT ["npm", "start"]