const db = require('./../models/database');

getRecipeBooksPerUser = (req, res) => {
  db.tx(t => {
      return t.any("SELECT recipebookid FROM userandbookmap WHERE userid = 2")
            .then(result => {
              let names = [];
              for (let i in result) {
                names.push(t.any(`SELECT recipebooks.name FROM recipebooks WHERE recipebookid = $1`, result[i]["recipebookid"]))
              }
              return t.batch(names);
            });
  })                
  .then((data) => { 
    res.send(data); 
  })
  .catch((error) => {
    console.log('Error!', error);
  });
};

getAllRecipesPerRecipeBook = (req, res) => {
  console.log('Getting recipes for each user');
    /* -- method for single querying --
  let result = db.any('QUERY');
  result.then((data) => { res.send(data) } );
  console.log('Getting recipe books associated with user');
  */
};

module.exports = { getAllRecipesPerRecipeBook, getRecipeBooksPerUser};