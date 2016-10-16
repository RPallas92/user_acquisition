# Configuration
==============================


# App
There is an app folder with 2 folders:
    app_src: it contains source files of the web app.
    cordova: it contains the cordova project to wrap the webapp into an Android an iOS apps.

Technologies used: ReactJS and cordova

Language: ES2015 (with Babel)

Architected following clean architecture principles: https://8thlight.com/blog/uncle-bob/2012/08/13/the-clean-architecture.html

**Available Scripts**:

`npm start`

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.


The page will reload if you make edits.
You will also see any lint errors in the console.

`npm run build`

Builds the app for production to the build folder.

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

`npm test`

Launches the test runner in the interactive watch mode.


**Work Flow**

- Set backend url in app/app_src/src/application/config/Config.js

- Build the app with `npm run build`

- Copy the contents of app/app_src/build to app/cordova/www

- (Tweak) delete first slash in index.html routes <link href="static/css/main.bcdf1b83.css" rel="stylesheet"> and <script type="text/javascript" src="static/js/main.89e8766c.js"></script>

- Run `cordova prepare` and `cordova run`


# Backend

The backend is a REST API written in JavaScript.

Technologies: 

- Node.js 
- LoopBack Framework by IBM
- Mongo DB

**Work Flow**

- Run mongo `mongod`

- Run backend `node .` (server/user_acquisition_server)

- Explore the API in the browser http://localhost:3088/explorer/




**License**

MIT


# Contact

Contact me at rpallas92@gmail.com for issues and suggestions