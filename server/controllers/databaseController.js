const db = require('./../models/database');

async function getRecipeBooksPerUser(req, res) {
  let result = await db.any('SELECT * FROM users');
  console.log('db query: ', result);
  res.send(result);
  // console.log('Getting recipe books associated with user');
};

getUserRecipes = (req, res) => {
  console.log('Getting recipes for each user');
};

// db.getRecipeBooksPerUser(req, res);

module.exports = { getRecipeBooksPerUser, getUserRecipes };