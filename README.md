# Create Strapi project
npx create-strapi-app@latest app --no-run
npm install argparse
npm install --include=optional sharp
npm install --os=linux --libc=musl --cpu=x64 sharp

# Build Docker image
docker-compose build

# Start containers
docker-compose up -d