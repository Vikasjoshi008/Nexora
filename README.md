**Nexora** – AI-Powered Chat Application

A production-ready MERN application offering multi-threaded AI conversations, secure authentication (JWT + Google OAuth), and a modern responsive UI optimized for real-world usage.

### Overview

Nexora is a full-stack AI chat platform designed to demonstrate strong engineering skills across the MERN stack.
Users can authenticate, create multiple chat threads, interact with an AI assistant, and maintain persistent chat history.

This project focuses on:
Scalable backend architecture
Clean and responsive frontend design
Secure authentication flows
Smooth user experience
AI integration

🧰 Tech Stack

### Frontend
React.js
Context API
React Hooks
Custom CSS
Responsive mobile-first UI

### Backend
Node.js
Express.js
REST API architecture

### Database
MongoDB + Mongoose
Authentication
JWT Authentication
Google OAuth (Firebase Authentication)

### AI Integration
Backend AI request handling gemini API

Thread-based conversation storage
✨ Key Features
🔐 Authentication
Email/Password Signup/Login
Secure JWT tokens
Google Sign-In support
Protected API routes

### AI Chat System
Ask questions and receive AI-generated responses
Automatic thread title generation
Persistent chat storage

### Thread Management
Create new chat threads
View chat history
Switch between threads
Delete existing threads

### Responsive UI
Animated sidebar with auto-collapse on mobile
Clean and intuitive interface
Modern animations and effects

nexora/
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── styles/
│   │   ├── MyContext.jsx
│   │   └── App.jsx
│   └── package.json
│
├── server/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── server.js
│   └── package.json
│
└── README.md


▶️ Running Locally
### Backend
cd server
npm install
npm start

### Frontend
cd client
npm install
npm run dev

👨‍💻 Author

Vikas Joshi
Full-Stack MERN Developer
Creator of Nexora