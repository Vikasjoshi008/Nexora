# Nexora – AI-Powered Chat Application

A production-ready MERN application offering multi-threaded AI conversations, secure authentication (JWT + Google OAuth), and a modern, responsive UI optimized for real-world usage.

---

## Overview

Nexora is a full-stack AI chat platform designed to demonstrate strong engineering capability across the MERN stack.  
Users can authenticate, create multiple chat threads, interact with an AI assistant, and maintain persistent chat history.

This project showcases:

- Scalable backend architecture  
- Clean and responsive frontend development  
- Authentication using JWT + Google OAuth  
- AI model integration  
- Production-level UI/UX patterns  

---

## Tech Stack

### Frontend
- React.js  
- Context API (global state management)  
- React Hooks  
- Custom CSS  
- Fully responsive UI  

### Backend
- Node.js  
- Express.js  
- REST API  

### Database
- MongoDB (Mongoose ORM)

### Authentication
- JWT Authentication  
- Google OAuth (Firebase Authentication)  

### AI Integration
- Backend AI model requests  
- Thread-based message storage  

---

## Key Features

### 1. Authentication
- User registration and login (JWT)
- Google Sign-In using Firebase
- Secure token-based route protection

### 2. AI Chat System
- Send prompts and receive AI responses
- Auto-generated thread titles
- Persistent conversation storage

### 3. Thread Management
- Create new chats  
- Switch between existing threads  
- Delete conversations  
- Each thread stores full chat history  

### 4. Responsive UI
- Mobile-friendly sidebar (auto-collapses on selection)
- Clean and minimal layout
- Smooth transitions and animations

### 5. Visual Effects
- Custom lightweight Liquid-Ether–style background
- Optimized for performance (animations reduced on mobile)
- Clean, modern aesthetic

---

## Project Structure

\- Nexora/
\- ├── Frontend/
\- │ ├── src/
\- │ │ ├── assets/
\- │ │ ├── components/
\- │ │ ├── pages/
\- │ │ ├── styles/
\- │ │ ├── App.jsx
\- │ │ └── main.jsx
\- │ │ └── MyContext.jsx
\- │ └── package.json
\- │
\- ├── Backend/
\- │ ├── models/
\- │ ├── routes/
\- │ ├── utils/
\- │ ├── server.js
\- │ └── package.json
\- │
\- └── README.md

## Running Locally

### Backend
- cd server
- npm install
- npm start

### Frontend
- cd client
- npm install
- npm run dev

Author ❤️
Vikas Joshi
Full-Stack MERN Developer
Creator of Nexora