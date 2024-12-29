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

## File Structure

### Root Directory:
- `.gitignore`: Specifies files to be ignored by Git.
- `.gitlab-ci.yml`: GitLab CI/CD pipeline configuration.
- `Dockerfile`: Instructions for building the front-end Docker container.
- `package.json` & `package-lock.json`: Dependency management for the project.
- `README.md`: Project documentation.

### Public Directory:
- `index.html`: Entry point for the application.
- `favicon.ico`, `manifest.json`, `robots.txt`: Standard web assets.
- `Realms Image/`: Contains thematic images used in the application.
- `images/`: Logos and team photos.

### Source Directory (`src`):
- `App.js` & `App.css`: Main application component and styles.
- `index.js` & `index.css`: Application entry point and global styles.
- `components/`: Modular React components, including:
  - `Home.js` & `Home.css`: Homepage layout and styles.
  - `Login.js` & `Login.css`: Login functionality.
  - `Signup.js` & `Signup.css`: Signup functionality.
  - `Play.js` & `Play.css`: Core gameplay interface.
- `reportWebVitals.js`, `setupTests.js`: Performance metrics and testing setup.
- `Assets/`: Includes fonts and icons for branding.

## Prerequisites
- **Node.js** (version 16 or higher)
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