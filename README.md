# Realms of Discovery - Frontend

## Overview
The **Realms of Discovery - Frontend** is the client-side interface for an immersive and interactive application. Built using modern web development technologies, this repository handles the visual and functional aspects of the user experience.

## Features
- **Responsive Design**: Ensures compatibility across various devices and screen sizes.
- **Dynamic Components**: Powered by React for a seamless user experience.
- **User Authentication**: Includes login and signup functionality.
- **Interactive Gameplay**: Core gameplay elements for engaging user interaction.
- **Media Assets**: Incorporates high-quality images and icons for an enhanced visual appeal.
- **CI/CD Ready**: Configurations for continuous integration and deployment via GitLab.

## Prerequisites
- **Node.js** (version 21 or higher)
- **npm**

## Installation

Clone the repository:
```bash
git clone https://github.com/yourusername/realms-of-discovery-frontend.git
cd realms-of-discovery-frontend
```

Install dependencies:
```bash
npm install
```

Start the development server:
```bash
npm start
```

Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

## Build and Deployment

Build the production-ready app:
```bash
npm run build
```

Serve the production build:
```bash
npx serve -s build
```

(Optional) Build Docker container:
```bash
docker build -t realms-of-discovery-frontend .
```