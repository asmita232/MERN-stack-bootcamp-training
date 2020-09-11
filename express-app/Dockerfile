FROM node:latest
LABEL author="Asmita Chavan"
LABEL email="asmitachavan121@gmail.com"

WORKDIR /usr/src/app

ENV PORT=10000
ENV NODE_ENV=development

#Container port is exposed, host port will be mapped while creating container
EXPOSE ${PORT} 

COPY package*.json ./

RUN npm install

#Bundle app  source 
COPY . .

CMD [ "npm", "run", "start:docker" ]