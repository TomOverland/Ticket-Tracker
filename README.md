# Ticket Tracker

[Deployed on Heroku](https://fathomless-savannah-39390.herokuapp.com/).

![Screenshot of Application](https://github.com/TomOverland/Ticket-Tracker/blob/main/public/assests/Screenshot%20of%20homepage.JPG)

## Description:

This application demonstrates a simple full stack development CRUD application with front end implemented with Handlebars and Bootstrap 4.  The backend is implemented with Node.js and sequelize.  The database was constructed with Sequelize and implemented to Heroku with JawsDB. 

This is a service desk application that allows users to track issues by submitting and viewing tickets after they have created an account and logged in. Once the user has logged in, they can view most frequently asked questions, submit a new ticket, view all submitted tickets, or view analytics about the submitted tickets powered by Chart.js. Once tickets are submitted, you can update the ticket's notes, change the ticket's completed status to true, or remove the ticket from the database.

## Installation:

#### Step 1 - Make sure you have a code editor, MySQL, Node.js and Node Package Manager installed

The code editor I used was Visual Studio Code. It can be found [here](https://code.visualstudio.com/download).  
Node.js and NPM download can be found [here](https://nodejs.org/en/).  
MySQL workbench can be found [here](https://dev.mysql.com/downloads/workbench/).

#### Step 2 - Clone my repository

In your command terminal, type the following to clone this repository: "git clone https://github.com/TomOverland/Ticket-Tracker.git"

#### Step 3 - Create a config.js file

Using the config.js.example file, create a config.js file with your local MySQL login information.

#### Step 4 - Move to the correct directory

Type the following in your command line: "cd Ticket-Tracker"

#### Step 5 - Install NPM dependencies

By typing "npm install -i" you will download all of the dependencies required for this application.

#### Step 6 - Create the Ticket Tracker Database

Go into your MySQL Workbench, and type the following, "CREATE DATABASE IF DOESNT EXIST ticket_tracker_db", then run execute.

#### Step 7 - Start the application on your local server

Type the following in your command line: "node server.js" and then go to the url "localhost:3000" in your internet browser.  When the server is run locally, Sequelize will create the User and Ticket tables in the database you've just created.

## Technology used
* Node.js
* Heroku-cli NPM Package
* Handlebars
* Express NPM Package
* Express-Handlebars NPM Package
* Sequelize
* MySQL2 NPM Package
* Passport
* Bcrypt.js
* Charts.js
* HTML 5
* CSS 3
* Bootstrap 4
* JavaScript
* jQuery
* Path NPM Package
* Util NPM Package

## Built With
* VS Code - https://code.visualstudio.com/
* MySQL Workbench - https://www.mysql.com/

## License:

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

For more information about the license, click the link below:

- [License](https://opensource.org/licenses/)

## Contributors:

Tom Overland: https://github.com/TomOverland  
Nou Vang: https://github.com/nomvaa  
Kiki Peggs: https://github.com/Arkpeggs  
Anusha Dhamera: https://github.com/adhamera  
Lierin Hanuman: https://github.com/LLHanuman  

## Tests:

This application was not developed with any tests.

## Questions:

For more information about the application, please reach out to me via my [GitHub Profile](https://github.com/TomOverland).

For any other questions, please send me an email at: thomas.c.overland@gmail.com.
