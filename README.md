# Leetcode_Clone

![Leetcode Clone](https://github.com/PrathumP/Leetcode_Clone/assets/115390367/15159fc7-d0f1-4dca-9999-9144e78368e9)

Demo : https://yeetcodeclone.netlify.app

## Description

Leetcode Clone is a web application aimed at helping developers practice coding problems and prepare for technical interviews. The platform provides a wide range of coding problems based on different topics and difficulty levels. It also offers mock technical interviews, interview preparation resources, and a community-driven discussion board for solutions.

This project is built using the MERN (MongoDB, Express.js, React.js, Node.js) stack, making it a full-stack application. It integrates with the YouTube API to fetch coding interview preparation videos and displays their thumbnails on the Technical Interview Preparation Resources page.

## Tech Stack

- Frontend: React.js, HTML, CSS
- Backend: Node.js, Express.js
- Database: MongoDB
- YouTube API Integration: Fetching coding interview videos and thumbnails.

## Prerequisites

Before running this project, please ensure that you have Node.js (v14 or higher) installed:

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/PrathumP/Leetcode_Clone.git
   ```
   
2. Change to the project directory:

   ```
   cd Leetcode_Clone
   ```

3. Start the server:
   
- Navigate to the `server` directory:
- 
  ```
  cd server
  ```
  
- Install the server dependencies:
  
  ```
  npm install
  ```

- Setup the environment variables:
  - Create a .env file.
  - Add the required environment variables, such as the MongoDB connection string and YouTube API key.
  
- Start the server:
  ```
  node index.js
  ```
  or
  ```
  nodemon start
  ```

4. Run the client:
  
- Navigate to the `leetcode_clone_frontend` directory:
  
  ```
  cd client
  ```
- Install the client dependencies:
  
  ```
  npm install
  ```
  
- Start the client:
  ```
  npm run dev
  ```

The client will be accessible at `http://localhost:3000`. 

## Deployed WebApp 

The webapp is fully deployed :
- Backend on Render : https://leetcode-backend-wxd7.onrender.com
- Frontend on Netlfiy : https://yeetcodeclone.netlify.app
- Database on MongoDB Atlas


## Contributing

We welcome contributions to improve the Leetcode Clone project. If you find any issues or have suggestions for new features, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). You are free to use, modify, and distribute the code according to the terms of the license.
