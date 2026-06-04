# MERN Backend Setup

## Description

This repository contains the initial backend setup for a MERN Stack application. The project demonstrates Express.js server configuration, MongoDB Atlas integration, environment variable management, security middleware setup, and a scalable backend folder structure.

## Features

* Express.js server setup
* MongoDB Atlas connection using Mongoose
* Environment variable management with dotenv
* Security middleware integration (cors, helmet, morgan)
* Health check API endpoint
* Basic MVC folder structure
* Git version control with GitHub

## Folder Structure

```text
backend/
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── index.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Technologies Used

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* dotenv
* cors
* helmet
* morgan

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <repository-url>
cd backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create Environment Variables

Create a `.env` file in the root directory:

```env
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

### 4. Start the Server

```bash
node index.js
```

## API Endpoints

### Health Check

```http
GET /api/health
```

### Home Route

```http
GET /
```

## Expected Output

```text
Server running on port 3000
MongoDB Connected!
```

## Status

Backend setup completed successfully with:

* Express.js server
* MongoDB Atlas integration
* Environment variable configuration
* Security middleware
* Health check API
* MVC folder structure
* GitHub repository setup

```
```
