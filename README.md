# Trackify

Trackify is a full-stack finance tracking expense application using the MERN Stack (MongoDB, Express.js, React.js, Node.js) + GraphQL

## Installation Guide

### Server
Run `npm install` to install all dependencies.

Create a `.env` file and add the following lines:

```
MONGO_URI="your-mongo-uri"
SESSION_SECRET="your-session-secret"
```

Then, run `npm run dev` to start the Express backend server.

### Client
Create a `.env` file in the client directory and add the following lines:

```
VITE_NODE_ENV=development
```

In another new terminal window, navigate to the `client` folder and run `npm install` to install all dependencies. Then, run `npm run dev` to start the development server.

## Technologies & Frameworks Used
- GraphQL
- MongoDB
- Express.js
- React.js
- Node.js
- Apollo
- Mongoose
- Passport.js
- Bcrypt
- Tailwind CSS
- Vite
- Ant Design
- Aceternity UI

## Directory Structure
- `/client`: Holds all client-side code
- `/server`: Holds all server-side code

## Deployed on Render
- https://trackify-k7u8.onrender.com/
