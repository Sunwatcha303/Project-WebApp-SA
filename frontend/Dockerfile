# Use the official Node.js 14 image as base for building React app
FROM node:14 as build

# Set the working directory in the container
WORKDIR /frontend

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app for production
RUN npm run build

# Use nginx as base image for serving React app in production
FROM nginx:alpine

# Copy build files from the build stage to nginx server
COPY --from=build /frontend/build /usr/share/nginx/html
# Copy the custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 to serve the application
EXPOSE 80

# Nginx runs in the foreground
CMD ["nginx", "-g", "daemon off;"]