# **Threads Clone** (Social Media Platform)

## Overview

**Threads Clone** is a social media application, designed for users to create, share, and engage with Text and Image based posts. Built with the **MERN stack**, this project provides real-time interactions, user management, and seamless navigation, enabling users to like, comment, and follow others, along with a fully integrated chat system using socket.io.

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [File Structure](#file-structure)
4. [Installation](#installation)

## Features

- **User Authentication**: Secure login and signup, managed with JWT.
- **Real-time Chat**: Users can chat with each other,send images, and track message seen or unseen statuses.
- **Post Creation and Engagement**: Users can create posts, like and comment on posts by others.
- **User Profiles**: View and edit personal profiles, follow or unfollow other users, and view individual user threads.
- **Settings and Account Management**: Manage account settings by freezing the account. So, no user can access your account.
- **Responsive Design**: The application works seamlessly across desktops and mobile devices.
- **Dark/Light Mode**: Switch between dark and light themes for better accessibility.

## Technologies Used

- **Frontend**:
  - **React**: For building the user interface.
  - **Chakra UI**: For responsive styling and component-based design.
  - **Recoil**: For state management across components.
  - **socket.io-client**: For real-time communication between the client and server.
  - **react-router-dom**: For handling navigation between different pages.

- **Backend**:
  - **Node.js**: JavaScript runtime for the backend server.
  - **Express.js**: Framework for building API routes and managing server-side logic.
  - **MongoDB**: NoSQL database for storing user data, posts, and messages.
  - **Mongoose**: ODM library for MongoDB and Node.js.
  - **Socket.io**: For enabling real-time chat functionalities.
  - **Cron**: Scheduled tasks to manage periodic account maintenance.

- **Additional Libraries**:
  - **Cloudinary**: For image uploads.
  - **Bcrypt.js**: For password encryption.
  - **JWT**: For secure token-based authentication.
  - **Date-fns**: For handling and formatting dates.
  
- **Development Tools**:
  - **Vite**: For fast and optimized development.
  - **Nodemon**: Utility for automatically restarting the server.
  - **Cross-Env**: Environment variable management for Node.js.

## File Structure

The project follows a structured file organization:

### Frontend (src)

- **components**: Reusable UI components (e.g., Header, CreatePost, Chat).
- **pages**: Main app pages (e.g., HomePage, UserPage, AuthPage, ChatPage, SettingsPage).
- **atoms**: Recoil atoms for state management (e.g., `userAtom`).
- **context**: socketContext.js provides socket connection functionality to be accessed throughout the app.
- **hooks**: Custom hooks for managing various functionalities like usePreviewImg, useLogout, useShowToast etc.
- **App.jsx**: App file with routing configuration.
- **main.jsx**: Application entry point.

### Backend

- **controllers**: Controller functions for handling requests (e.g., `userController.js`, `postController.js`).
- **models**: Mongoose schemas for data modeling (e.g., `User.js`, `Post.js`).
- **routes**: API routes for each feature (e.g., `userRoutes.js`, `postRoutes.js`).
- **middlewares**: Middleware functions (e.g., `protectRoute.js`).
- **db**: Database connection file (e.g., connectDB.js ).
- **utils**: Utility functions and helpers (e.g., JWT token management).
- **cron**: Cron jobs for periodic account management tasks.

## Installation

To set up and run the **Threads Clone** application locally, follow these steps:

1. **Clone the repository**:

```bash=
   https://github.com/Aditya112003/ThreadsClone.git
```

2.**Navigate to the project directory**:

```
cd ThreadsClone
```

 3.**Install the dependencies**:

 ```
 npm install
 ```

4. **Set up environment variables**: Create a `.env` file in the root directory and add your MongoDB connection string and other necessary environment variables:

 ```
 PORT = 3000
MONGO_URI = your mongoDB connection string
JWT_SECRET = your jwt secret
CLOUDINARY_CLOUD_NAME = your cloudinary name
CLOUDINARY_API_KEY = your cloudinary API key
CLOUDINARY_API_SECRET = your cloudinary secret
BASE_URL= your base url after deployment only otherwise your local host url.
```

5. **Run the development server**:

```
npm run build
```

6. **Open your browser**: Visit [http://localhost:3000](http://localhost:3000) to view the application.
