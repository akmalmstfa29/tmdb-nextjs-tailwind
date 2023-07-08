# Use the official Node.js v18 image as the base
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Install project dependencies
COPY package.json yarn.lock /app/
RUN yarn install

# Install webpack and workbox-webpack-plugin
RUN yarn add --dev webpack@5.54.0 workbox-webpack-plugin@6.4.2

# Copy the rest of the project files
COPY . /app/

# Build the Next.js application
RUN yarn build

# Expose the default Next.js port
EXPOSE 3000

# Start the Next.js server
CMD ["yarn", "start"]
