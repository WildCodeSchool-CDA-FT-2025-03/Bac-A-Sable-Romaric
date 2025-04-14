# prépare l'OS de déploiement dans ton container
FROM node:lts-alpine as PROD

#créer un dossier de stockage pour ton app
WORKDIR /app

# copier l'ensemble des fichers de configuration au format json
COPY *.json ./

# installe les node_modules dans ton container
RUN npm install

# copie le dossier src dans ton container, dans un dossier du même nom
COPY src src

# compile le code ts et js
RUN npm run build

# Expose le port de ton api
EXPOSE 4000

# execute le code de l'api 'run time'
CMD ["npm", "run", "prod"]