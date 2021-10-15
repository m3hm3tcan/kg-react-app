#  Welcome to Frontend React Test App

<p>
<img src="https://img.shields.io/badge/ReactJS-blue?logo=react">
<img src="https://img.shields.io/badge/Backend-NodeJS-green?logo=node.js">
<img src="https://img.shields.io/badge/DataBase-MongoDB-lightgreen?logo=mongoDB">
  <img src="https://img.shields.io/badge/DataBase-restDB.io-lightgreen?logo=restDB">
  
</p>


## Technology stack

This repository is built on top of Express and React, you will find other supporting technologies in details.

#### Client side

- [React] - A JavaScript library for building user interfaces
- [MongoDB] - The application data platform (Retired - only for local DB test),  we can also use Mondo Atlas could DB in future development.
- [Axios] - Promise based HTTP client for the browser and node.js
- [RestDB] - This is could based noSQL database platform

#### Server side

- [Node.js] - evented I/O for the backend
- [Express.js] - Fast, unopinionated, minimalist web framework for Node.js
- [Mongoose] - mongoose
- [Axios] - Promise based HTTP client for node.js server HTTP call on restcountryapi

#### Deployment
- Heroku

## Run the application on local
##### Prerequisites
- VS code editor
- Node version min v14.18.0
- Mongo local DB min v4.0

##### Steps
1. Clone repo into your pc
2. Run npm install for both `server` and `cline` project
3. Go into `client` folder and run npm command `npm run build` ( this steps will create build folder)
4. Go to root folder and run npm command `npm start` 
5. Open `localhost:3001` and test the application need to redirect you into `login` page.

## Project Structure
![image](https://user-images.githubusercontent.com/16703521/137472371-54b78f37-bb10-469c-9217-22c8e6731ebd.png)

## Test client app
#### on local 
To test the client, run the application and open your browser and visit `http://localhost:3001` url.
The system will redirect you to login page and if you dont have an account please click sign-up link and follow the instraction to register the user.
When you register the user, user information will be store in restDB cloud database. For secure data handling password will be store as encrypted data. 
After succesfully register operation the application will redirect to login page. Please provide information to login into system.
When you succesfully login application will open Home page and you can do futher opeartion such as county search by name, all county list and filter and county search by string array.

#### on Web 
  Plase visit my test page : https://kg-reacttest-app.herokuapp.com/
