const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  // {
  //   name: '',
  //   email: '',
  //   password: ''
  // },
 ];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;