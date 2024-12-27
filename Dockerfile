# Build Stage
FROM node:21 AS build

WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Development Stage (instead of using NGINX, we'll use React's dev server)
FROM node:21 AS dev

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose port for React dev server
EXPOSE 3000

# Configure React to listen on all network interfaces (0.0.0.0)
ENV HOST=0.0.0.0

# echo "hi"

# Start React's development server
CMD ["npm", "start"]
