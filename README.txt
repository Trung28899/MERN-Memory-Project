    THIS IS THE TUTORIAL APP FOR HOW TO BUILD MERN STACK APPLICATIONS

1. Setting up basic folder structure: 
    - This is the basic folder structure for every MERN stack app
    - Code in 1st Commit

a. What is in this part ? 
    - Setting up folder structure for front-end and back-end 
        development
    - Basic code that will allow front-end to start running
        on localhost:3000 > type npm start in client folder 
        and go to localhost:3000
    - Note: see package.json in both ./client and ./server for info

b. Packages used: 
    - In Client: 
        +, $ npx create-react-app ./
        +, $ npm install axios moment react-file-base64 redux redux-thunk

    - In Server: 
        +, $ npm init -y
        +, $ npm install body-parser cors expres mongoose nodemon

2. Setting Up Backend Connections: 
    - Code in 3rd Commit
    - Basic settings for every MERN stack app in ./server/index.js

3. Setting Server Models and Controllers
    - Code in 4th Commit
    - See server/controllers and server/models
    - Status code reference: 
    https://www.restapitutorial.com/httpstatuscodes.html

    example: ./controllers/posts.js in res.status()