# mern_internshipMERN Stack Internship – Week 1 Assignment

This repository contains my Week 1 MERN Stack assignment for Wonkru Digital.
The goal of this week was to initialize the project, set up the environment, configure MongoDB Atlas, and successfully connect an Express.js backend to the database.

📁 Folder Structure
backend/
 ┣ index.js  
 ┣ .env  
 ┣ package.json  
 ┣ package-lock.json  
 ┣ README.md
 ┗ node_modules/
🛠️ Technologies Used
Node.js
Express.js
MongoDB Atlas
Mongoose
dotenv / dotenvx
⚙️ Environment Setup
1. Install Dependencies
npm install express mongoose dotenv
2. Environment Variables

A .env file was created in the root directory:

MONGO_URI=your_mongo_connection_string
PORT=3000

(.env file is not uploaded to GitHub for security)

🌐 Backend Setup (index.js)

The backend:

Imports Express
Connects to MongoDB using Mongoose
Loads environment variables via dotenv
Runs a server on PORT 3000
🚦 Running the Server

To start the server:

node index.js

Expected Output:

Server running on port 3000
MongoDB Connected!

This confirms the backend and database are configured properly.

🧪 MongoDB Connection Status

MongoDB Atlas cluster was created and the connection string was securely placed inside .env.

The connection was successfully tested and confirmed in the terminal.