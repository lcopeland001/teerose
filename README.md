
# Prime Solo Project Starting Repo
This version uses React, Redux, Express, Passport, and PostgreSQL (a full list of dependencies can be found in `package.json`).

We **STRONGLY** recommend following these instructions carefully. It's a lot, and will take some time to set up, but your life will be much easier this way in the long run.

## Use the Template for This Repository (Don't Clone)

- Don't Fork or Clone. Instead, click the `Use this Template` button, and make a copy to your personal account. Make the project `PUBLIC`!


## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Create database and table

Create a new database called `prime_app` and create a `user` table:

```SQL
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);
```

If you would like to name your database something else, you will need to change `prime_app` to the name of your new database name in `server/modules/pool.js`

## Development Setup Instructions

[x] - Run `npm install`
[x] - Create a `.env` file at the root of the project and paste this line into the file:
  ```
  SERVER_SESSION_SECRET=superDuperSecret
  ```
  While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.
- Start postgres if not running already by using `brew services start postgresql`
[x]- Run `npm run server`
[x] - Run `npm run client`
[x] - Navigate to `localhost:3000`

## Debugging

To debug, you will need to run the client-side separately from the server. Start the client by running the command `npm run client`. Start the debugging server by selecting the Debug button.

![VSCode Toolbar](documentation/images/vscode-toolbar.png)

Then make sure `Launch Program` is selected from the dropdown, then click the green play arrow.

![VSCode Debug Bar](documentation/images/vscode-debug-bar.png)

## Testing Routes with Postman

To use Postman with this repo, you will need to set up requests in Postman to register a user and login a user at a minimum.

Keep in mind that once you using the login route, Postman will manage your session cookie for you just like a browser, ensuring it is sent with each subsequent request. If you delete the `localhost` cookie in Postman, it will effectively log you out.

1. Start the server - `npm run server`
2. Import the sample routes JSON file [v2](./PostmanPrimeSoloRoutesv2.json) by clicking `Import` in Postman. Select the file.
3. Click `Collections` and `Send` the following three calls in order:
   1. `POST /api/user/register` registers a new user, see body to change username/password
   2. `POST /api/user/login` will login a user, see body to change username/password
   3. `GET /api/user` will get user information, by default it's not very much

After running the login route above, you can try any other route you've created that requires a logged in user!

## Production Build

Before pushing to Heroku, run `npm run build` in terminal. This will create a build folder that contains the code Heroku will be pointed at. You can test this build by typing `npm start`. Keep in mind that `npm start` will let you preview the production build but will **not** auto update.

- Start postgres if not running already by using `brew services start postgresql`
- Run `npm start`
- Navigate to `localhost:5000`

## Lay of the Land

There are a few videos linked below that show a walkthrough the client and sever setup to help acclimatize to the boilerplate. Please take some time to watch the videos in order to get a better understanding of what the boilerplate is like.

- [Initial Set](https://vimeo.com/453297271)
- [Server Walkthrough](https://vimeo.com/453297212)
- [Client Walkthrough](https://vimeo.com/453297124)

Directory Structure:

- `src/` contains the React application
- `public/` contains static assets for the client-side
- `build/` after you build the project, contains the transpiled code from `src/` and `public/` that will be viewed on the production site
- `server/` contains the Express App

This code is also heavily commented. We recommend reading through the comments, getting a lay of the land, and becoming comfortable with how the code works before you start making too many changes. If you're wondering where to start, consider reading through component file comments in the following order:

- src/components
  - App/App
  - Footer/Footer
  - Nav/Nav
  - AboutPage/AboutPage
  - InfoPage/InfoPage
  - UserPage/UserPage
  - LoginPage/LoginPage
  - RegisterPage/RegisterPage
  - LogOutButton/LogOutButton
  - ProtectedRoute/ProtectedRoute

## Deployment

1. Create a new Heroku project
1. Link the Heroku project to the project GitHub Repo
1. Create an Heroku Postgres database
1. Connect to the Heroku Postgres database from Postico
1. Create the necessary tables
1. Add an environment variable for `SERVER_SESSION_SECRET` with a nice random string for security
1. In the deploy section, select manual deploy

## Update Documentation

Customize this ReadMe and the code comments in this project to read less like a starter repo and more like a project. Here is an example: https://gist.github.com/PurpleBooth/109311bb0361f32d87a2

- To Do list -- 
[] SCOPE 
  [] URL: https://docs.google.com/document/d/1YzRHBY5sgdtPj9XqQyoFfJvj_v-SxmnW/edit#heading=h.gjdgxs
  [x] Description
  [x] Wireframs
  [x] Database
  [] Schedule

[x] Change Title name
[] Add Page Compenent Folders
    [x] Home *
    [x] About *
    [] Gaming *
    [] Fitness
    [] Military
    [] Healing
    [x] Blog *
      [] Blog Admin *
      [x] Blog Form *
    [] AddBlog
    [] Podcast
    [] Social *
* = Proioritize

[] Update compenents
    [] Landing Page
    [] Login Page
    [] User Page
    [] Nav Bar
    [] Registration Page/ Form
    [] Protected Route
    [] Login Page/Form
    [] Logout Button
    [] Info page

[] CSS
    [] Home *
    [] About *
    [] Gaming 
    [] Fitness
    [] Military
    [] Healing
    [] Blog *
    [] Podcast
    [] Social *

[] Misc
  [] Nav Bar
  [] Footer
 
[] Home 
  [x] Display on DOM
    [x] Create component
    [x] Add to App.jsx
    [x] Conenct component to nav bar
  [] Add content
    [] Photo of Tee Rose
    [] Photo Background list of headers
    [] Short list  

[] About
  [x] Display on DOM
    [x] Create component
    [x] Add to App.jsx
    [x] Conenct component to nav bar
  [] Add content
    [] Photo of Tee Rose
    [] Bio 

[] Gaming
  [] Display on DOM
    [] Create component
    [] Add to App.jsx
    [] Conenct component to nav bar
  [] Add content
    [] 

[] Social
  [x] Display on DOM
    [x] Create component
    [x] Add to App.jsx
    [x] Conenct component to nav bar
  [] Add content
    [] 

[] Fitness
  [] Display on DOM
    [] Create component
    [] Add to App.jsx
    [] Conenct component to nav bar
  [] Add content
    [] 

[] Military
  [] Display on DOM
    [] Create component
    [] Add to App.jsx
    [] Conenct component to nav bar
  [] Add content
    [] 

[] Healing
  [] Display on DOM
    [] Create component
    [] Add to App.jsx
    [] Conenct component to nav bar
  [] Add content
    [] 

[] Podcast
  [] Display on DOM
    [] Create component
    [] Add to App.jsx
    [] Conenct component to nav bar
  [] Add content
    [] 

[] Blog Page
  [] Display on DOM
    [x] Create component
    [x] Add to App.jsx
    [x] Conenct component to nav bar
  [] Add content
    [] Add Blog data from database 
      [x] useSelector
      [x] useDispatch
      [x] useEffect
    [] Delete Button

[] Blog Form
  [] Display on DOM
    [x] Create component
    [x] Add to App.jsx
    [x] Conenct component to nav bar
  [] Add content
    [x] Form
      [x] useSelector
      [x] useDispatch
      [x] useEffect
      [x] use history
      [x] form content
  
[] Blog Data
  [] Reducer
    [na] Create reducer component
    [x] Add to root reducer
    [x] reducer function- make sure call matches saga
    [] single blog
    
  [] Saga
    [x] Create saga component
    [x] add to root saga
<<<<<<< HEAD
    [x] Create (GET)
      [] /
      [] /id
    [x] Read (POST)
    [] Update (PUT)
    [x] Delete (DELETE) 
    
  [] Create Server Routes (router)
    [x] Create (GET)
    [x] Read (POST)
=======
    [x] Create (POST)
    [x] Read (GET)
    [x] Update (PUT)
    [] Delete (DELETE) 
    
  [] Create Server Routes (router)
    [x] Create (POST)
    [x] Read (GET)
>>>>>>> f3f9e8a2181f03e8634476eb48504f0b27930cfb
    [] Update (PUT)
    [] Delete (DELETE) 
  
  [] Add to server.js
    [x] declare blog.router-require
    [x] app.use 

[] SQL
  [x] user
  [x] blog

Flow(setup): Page => Saga(rootsaga) => Reducer(rootdeducer) => Router(server)
Flow: Page => Saga => Router

REDUCERS
// Step 1: Create a new reducer and export it

SAGAS
// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga
// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user

// SAGA STEP 1: Create a saga file and export it
// SAGA STEP 2: Import saga into root saga
// SAGA STEP 3: Add new sagas to export default

COMPONENETS
// STEP 1: Create a component

Time Frames
- Set up (20 min)
- Display on DOM (10 min)
- 

Distplay Data from database
import useDispatch useSelector
import axios

Root Saga Notes
// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user

Root Reducer
// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'

  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in