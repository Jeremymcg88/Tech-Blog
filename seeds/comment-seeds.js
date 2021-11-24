const { Comment } = require('../models');

const commentdata = [
  // {
  //   comment_text: '123',
  //   user_id: 6,
  //   post_id: 1
  // },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;

