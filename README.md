# MERN Backend Setup

## Description

This project is a basic MERN Stack backend setup using Express.js and MongoDB Atlas. It demonstrates environment configuration, database connectivity, and a scalable project structure for future development.

## Features

* Express.js server setup
* MongoDB Atlas connection using Mongoose
* Environment variables using dotenv
* Organized project structure
* Git version control with .gitignore
* Ready for REST API development

## Project Structure

backend/
├── config/
│ └── db.js
├── controllers/
├── middleware/
├── models/
├── routes/
├── index.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md

## Technologies Used

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* dotenv

## Environment Setup

### 1. Install Dependencies

npm install

### 2. Create a .env File

Add the following variables:

MONGO_URI=your_mongodb_connection_string

PORT=3000

## Run the Application

Start the server:

node index.js

Expected Output:

Server running on port 3000

MongoDB Connected!

## API Endpoint

GET /

Response:

Backend running successfully with MongoDB!

## Notes

* The .env file is excluded from GitHub using .gitignore.
* MongoDB Atlas is used as the cloud database.
* The project structure follows common backend development practices and can be extended into a complete MERN application.
