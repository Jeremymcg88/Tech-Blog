const { Model, DataTypes } = require('sequelize');
// keeps information encrypted
const bcrypt = require('bcrypt');
const sequelize = require ('../config/connection');

class User extends Model {}