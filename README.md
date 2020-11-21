## I. Introduction and Notes

    THIS IS THE TUTORIAL APP FOR HOW TO BUILD MERN STACK APPLICATIONS

    NOTE: bugs should be watched out (if not fixed in certain commit):
        - In ./server/controllers/posts.js: under createPost should have
            const newPost = new PostMessage(post);
        - If there is any compiling errors, check for package.json of
            server, make sure "type": "module" is not there
            also make sure we don't have import statement and
            export const variable on server files
        - In ./server/index.js, have to put
            app.use(cors());
        before app.use("/posts", postRoute);
        or any other route handling

## II. Commit Notes:

1. Setting up basic folder structure:
   - This is the basic folder structure for every MERN stack app
   - Code in 1st Commit

a. What is in this part ? - Setting up folder structure for front-end and back-end
development - Basic code that will allow front-end to start running
on localhost:3000 > type npm start in client folder
and go to localhost:3000 - Note: see package.json in both ./client and ./server for info

b. Packages used:

    - In Client:
        +, $ npx create-react-app
        +, $ npm install axios moment react-file-base64 redux redux-thunk
        +, $ npm install @material-ui/core
        +, $ npm install --force @material-ui/icons
        +, $ npm install react-redux

    - In Server:
        +, $ npm init -y
        +, $ npm install body-parser cors express mongoose nodemon

2. Setting Up Backend Connections:

   - Code in 3rd Commit
   - Basic settings for every MERN stack app in ./server/index.js

3. Setting Server Models and Controllers

   - Code in 4th Commit
   - See server/controllers and server/models
   - Status code reference:
     https://www.restapitutorial.com/httpstatuscodes.html

   example: ./controllers/posts.js in res.status()

4. Setting up redux and working on Components:

   - Code in 6th Commit
   - See ./client/src/index.js, .client/src/reducers to see how to set it up
   - See ./client/src/Components for post and form components

   - Using redux with react hooks:
     +, See App.js in useEffect() for setting up
     +, See ./components/Posts/Posts.js under useSelector()
     for how to get information from redux

5. Working on form:

   - Code in 7th Commit
   - See ./components/Form/Form.js

6. Sending a Post to the backend and database:

   - Code in 8th Commit
   - See handleSubmit() in components/Form/Form.js

   > Application now can send a post to the backend to create a post in database
   > Also able to retrieve all the posts from db in front-end
   > but not rendering it right now

7. Rendering Posts to Front-end:

   - Code in 10th Commit
   - See components/Posts/Posts.js and components/Posts/Post/Post.js

   C,R is done in CRUD of this app

   Background: https://www.svgbackgrounds.com/

8. Updating Functionality

   - Code in 11st Commit
   - See update process from front-end in: /components/Posts/Post/Post.js, /components/Form/Form.js (track it down to reducers and action files)
   - See update process from back-end in: /controllers/posts.js: under
     updatePost()
   - Now the user can click the 3 dots in a post, info will be bring into
     the form for updating > hit submit to update

   C,R,U is done at this point

9. Deleting Functionality

   - Code in 12nd Commit
   - See delete process from front-end in: /components/Posts/Post/Post.js
     (track it down to reducers and action files)
   - See delete process from back-end in /controllers/posts.js: under
     deletePost()
