# The Movie DB Lite

Table of Contents
- [Technologies Used](#technologies-used)
- [Installation and Usage](#installation-and-usage)
    - [Installation](#installation)
    - [Docker](#docker)

## Technologies Used

- HTML
- CSS
- React
- Next.js
- Tailwind
- Styled Components

## Installation and Usage

### Prerequisites

- Node.js (version 18 or higher)
- Yarn or NPM (yarn more recommended)

### Installation

1. Navigate to the root directory of the project using `cd tmdb-next-tailwind`.
2. Install dependencies using either Yarn or NPM:
    - If using Yarn :
    ```PowerShell
    yarn install
    ```
    - If using NPM :
    ```PowerShell
    npm i
    ```
3. Build the project using either Yarn or NPM:
    - If using Yarn :
    ```PowerShell
    yarn build
    ```
    - If using NPM :
    ```PowerShell
    npm run build
    ```

### Docker

You can also run this Next.js app using Docker. Docker allows for easy containerization and deployment of applications.

To run the app using Docker, follow these steps:

1. Make sure you have Docker installed on your machine.
2. Build the Docker image by running the following command in the project's root directory:

    ```PowerShell
    docker build -t nextjs-app .
    ```
    
3. Once the image is built, you can run a container from the image with the following command:

    ```PowerShell
    docker run -p 3000:3000 nextjs-app
    ```
    
