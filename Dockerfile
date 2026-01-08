# Use official Node.js image
FROM node:20-alpine

# Set working directory
WORKDIR /app    

# Copy package files
COPY app/package.json app/package-lock.json ./


# Install dependencies
RUN npm install

# Copy project file
COPY  app  .

# Build Strapi admin panel
RUN npm run build

# Expose Strapi default port
EXPOSE 1337

# Start Strapi
CMD ["npm", "run", "dev"]