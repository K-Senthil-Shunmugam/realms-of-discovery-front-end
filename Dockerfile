# Build Stage
FROM node:21 AS build

WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the React app (optional, only needed for production builds)
RUN npm run build

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

# Start React's development server (by default it runs on port 3000)
CMD ["npm", "start"]
