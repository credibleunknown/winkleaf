
## Introduction
Welcome to the Winkleaf project. Kindly note that cloning this repository will by default give you access to the `Master` branch. Please don't make any changes on this branch. Here's what you should do instead.

* Checkout to the `Develop` branch.
* Create and checkout to a new branch. This new branch should contain your contributing codes.
* Ensure you properly understand the git workflow and work with it.
=======
# Winkleaf

### Introduction
Winkleaf is a social platform for documenting and sharing events.

This repository will contain all the codes that powers the application's functionalities.

### Winkleaf Features
* Users can signup and then login
* Authenticated (logged) users can update profile
* Non-Authenticated users can access all/individual users' profiles
* Authenticated users can create as well as delete their event
* Non-Authenticated users can access all/individual events
* Authenticated users can create as well as delete their events' update
* Non-Authenticated users can access all/individual events' update
* Authenticated users can create as well as delete their events' album
* Non-Authenticated users can access all/individual events' album
* Authenticated users can create comments on event's update
* Non-Authenticated users can access comments on event's update
* More will be added as see fit.

### Technologies Used
* [NodeJS](https://nodejs.org/) This is a cross-platform runtime environment built on Chrome's V8 JavaScript engine used in running JavaScript codes on the server. It allows for installation and managing of dependencies and communication with databases.

* [ExpressJS](https://www.expresjs.org/) This is the web application framework for NodeJS.

* [MongoDB](https://www.mongodb.com/) This is a free open source NOSQL document database with scalability and flexibility. Data are stored in flexible JSON-like documents.

* [Mongoose ODM](https://mongoosejs.com/) This makes it easy to write MongoDB validation by providing a straight-forward, schema-based solution to model to application data.


##### Other Tools/Dependencies Include
* [BabelJS](https://babeljs.io) This is a compiler for writing next generation JavaScript. It complies earlier ECMA versions to ES5.

* [EslintJS](https://eslint.org/) This is an open source project that provides a pluggable linting utility for JavaScript for cleaner codes.

* [Nodemon](https://nodemon.io/) This is used during the development of a NodeJS based application by monitoring for any changes in the application and automatically restarting the server.

* [BodyParser](https://github.com/expressjs/body-parser/) This is used for parsing incoming request bodies in NodeJS. 

* [Morgan](https://github.com/expressjs/morgan) This provides HTTP request logger middleware for NodeJS.

* [Dotenv](https://github.com/motdotla/dotenv) This loads environment variables from a .env file into process.env


### Installation Guide
* Clone this repository [here](git@gitlab.com:winkleaf/winkleaf.git). You will be required to add a SSH passphrase. Use `winkleaf`
* The server branch is the most stable branch at any given time, ensure you're working with this. Checkout using `git checkout server`
* Please stick to the `git workflow` when working on branches. Raise PRs.
* Install the dependencies using `npm install`
* Download MongoDB if not available on your local computer [MongoDB](https://mongodb.com/download-center#community)
* Install and setup mongodb in your local computer or connect to mlab.
* Create a .env file in your project root to look like .env.sample provided also in this project root.


### Usage
##### On local computer
* Run `npm start:dev` to start the app.
* Connect to the app on `Postman` using port `9999` to test all endpoints.

### API Routes
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| POST | /api/v1/user/signup | To create new user account |
| POST | /api/v1/user/login | To login user account |
| GET | /api/v1/user/ | To retrieve all users profile |
| GET | /api/v1/user/:userId | To retrieve an individual user profile |
| PUT | /api/v1/user/:userId/profile | To update user's profile |
| POST | /api/v1/events | To create a new event |
| GET | /api/v1/events | To retrieve all events |
| GET | /api/v1/events/:eventId | To retrieve an individual event |
| DELETE | /api/v1/events/:eventId | To delete an individual event |
| POST | /api/v1/events/:eventId/updates | To update an event |
| GET | /api/v1/events/:eventId/updates | To retrieve all updates of an event |
| GET | /api/v1/events/:eventId/updates/:updateId | To retrieve individual update of an event |
| DELETE | /api/v1/events/:eventId/updates/:updateId | To delete individual update of an event |
