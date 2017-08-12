FROM node:8
ADD . /app
RUN npm i 
ENTRYPOINT ["npm", "start"]