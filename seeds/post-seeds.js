const { Post } = require('../models');

const postdata = [
  // {
  //   title: 'Fate Stay',
  //   content: 'Alexander',
  //   user_id: 10
  // },
  // {
  //   title: 'The Devil is a Part-Timer',
  //   content: 'I forgot',
  //   user_id: 8
  // },
  // {
  //   title: 'Tokyo Revengers',
  //   content: 'Mikey',
  //   user_id: 1
  // },
  // {
  //   title: '',
  //   content: '',
  //   user_id: 4
  // },
  // {
  //   title: '',
  //   content: '',
  //   user_id: 7
  // },
  // {
  //   title: '',
  //   content: '',
  //   user_id: 4
  // },
  // {
  //   title: '',
  //   content: '',
  //   user_id: 1
  // },
  // {
  //   title: "",
  //   content: '',
  //   user_id: 1
  // },
  // {
  //   title: '',
  //   content: '',
  //   user_id: 9
  // },
  // {
  //   title: '',
  //   content: '',
  //   user_id: 5
  // },
  // {
  //   title: '',
  //   content: '',
  //   user_id: 3
  // },
  // {
  //   title: '',
  //   content: '',
  //   user_id: 10
  // },
  // {
  //   title: '',
  //   content: '',
  //   user_id: 8
  // },
  // {
  //   title: '',
  //   content: '.',
  //   user_id: 3
  // },
  // {
  //   title: '',
  //   content: '',
  //   user_id: 3
  // },
  // {
  //   title: '',
  //   content: '',
  //   user_id: 7
  // },
  // {
  //   title: 'Naruto',
  //   content: 'Guy',
  //   user_id: 6
  // },
  // {
  //   title: 'Jujutsu Kaisen',
  //   content: 'Gojo',
  //   user_id: 4
  // },
  // {
  //   title: "Chainsaw Man",
  //   content: 'Denji.',
  //   user_id: 6
  // },
  // {
  //   title: 'Demon Slayer',
  //   content: 'Zenitsu',
  //   user_id: 7
  // }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;