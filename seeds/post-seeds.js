const { Post } = require('../models');

const postdata = [
  // {
  //   title: 'Fate Stay',
  //   content: 'Alexander',
  //   user_id: 10
// };
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;