const express = require('express');
const app = express();
const databaseController = require('./controllers/databaseController');

app.use(express.static(__dirname + './../dist'));

app.get('/', databaseController.getRecipeBooksPerUser);
app.get('/recipeBook', databaseController.getAllRecipesPerRecipeBook);

app.listen(3000, (err, res) => {
	if (err) return err;
	console.log('Listening on port 3000!');
});

module.exports = app;