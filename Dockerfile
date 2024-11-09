# Usa Ubuntu como base
FROM ubuntu:latest

# Actualiza los paquetes e instala dependencias necesarias
RUN apt-get update && apt-get install -y \
    curl \
    gnupg2 \
    lsb-release \
    ca-certificates

# Añade el repositorio de Node.js y su clave GPG
RUN curl -fsSL https://deb.nodesource.com/setup_22.x | bash -

# Instala Node.js v22.11.0
RUN apt-get install -y nodejs=22.11.0-1nodesource1

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia los archivos de la aplicación (incluyendo index.html) al contenedor
COPY . .

# Instala las dependencias de la aplicación
RUN npm install

# Expone el puerto 8080 (puedes cambiarlo según sea necesario)
EXPOSE 8080

# Inicia el servidor HTTP para servir el archivo index.html
CMD ["npm", "run", "start"]
