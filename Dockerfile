# Build Stage
FROM node:21 AS build

WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the React app
RUN npm run build

# Production Stage
FROM node:21 AS prod

WORKDIR /app

# Install a simple static file server to serve the built app
RUN npm install -g serve

# Copy the build output from the build stage
COPY --from=build /app/build /app/build

# Expose port 3000 (default port for 'serve')
EXPOSE 3000

# Serve the built React app using the 'serve' command
CMD ["serve", "-s", "build", "-l", "3000"]
