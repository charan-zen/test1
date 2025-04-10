FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# install dependencies
RUN npm install


# Copy the rest of the application code
COPY . .

# build the app
RUN npm run build

# Expose the port the app runs on   
EXPOSE 3000

# Start the application
CMD ["npm", "start"]