// Requiring all dependencies that will be used once program initiates 
const path = require('path');
const express = require('express');
const routes = require('./controllers');
// express middleware that uses sessions, a mechanism that helps
// applications to determine whether multi requests came in from client.
const session = require('express-session');
// create template engine of choice 
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");

app.use(express.static(path.join(__dirname, 'public')));