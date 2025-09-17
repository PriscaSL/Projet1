# Étape 1 : utiliser Nginx
FROM nginx:alpine

# Répertoire de travail Nginx
WORKDIR /usr/share/nginx/html

# Copier ton site dans le conteneur
COPY . .

# Exposer le port
EXPOSE 80

# Lancer Nginx
CMD ["nginx", "-g", "daemon off;"]
