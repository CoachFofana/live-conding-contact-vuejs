# Utilisation de l'image Node.js officielle
FROM node:16-alpine

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json dans le répertoire de travail
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code de l'application dans le conteneur
COPY . .

# Compiler l'application pour la production
RUN npm run build

# Exposer le port sur lequel l'application va fonctionner
EXPOSE 80

# Démarrer l'application avec le script "preview"
CMD ["npm", "run", "preview"]
