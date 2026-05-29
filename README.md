MERN Backend 

--> Folder Structure
backend/
 ┣ index.js  
 ┣ package.json  
 ┣ package-lock.json  
 ┣ .gitignore
 ┗ node_modules/

--> Technologies Used
Node.js
Express.js
MongoDB Atlas
Mongoose
dotenv / dotenvx

--> Environment Setup
1️. Install Dependencies
npm install express mongoose dotenv

2️. Create Environment Variables
Inside private .env file (not committed to GitHub):
MONGO_URI=your_mongo_connection_string
PORT=3000

--> Running the Backend

Start the server: node index.js

The Output should be-

Server running on port 3000
MongoDB Connected!

--> API Base URL
http://localhost:3000