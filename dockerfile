# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the current directory contents into the container at /app
COPY . .

# Build the app
RUN npm run build

# Expose port 3000 to the outside world
EXPOSE 3000

# Define environment variable
ENV REACT_APP_BACKEND_URL=http://backend:4000

# Run the application
CMD ["npm", "start"]

