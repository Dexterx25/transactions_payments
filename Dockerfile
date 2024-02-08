# Use the official Node.js 14 image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

COPY .env .env.development ./

# Set NODE_ENV environment variable
ENV NODE_ENV dev

RUN npm ci --only=production && npm cache clean --force

# Expose the port that the app runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "run", "start:dev"]
