// import the Sequelize constructor from the library
const { Sequelize } = require('sequelize');
// stores variables that don't need to be pushed up to server but stays local 
require ('dotenv').config();

// create connection to our db 
const sequelize = process.env.JAWSDB_URL
? new Sequelize(process.env.JAWSDB_URL)
: new Sequelize (process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;
