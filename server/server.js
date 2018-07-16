const express = require('express');
const app = express();

var options = {
  error(error, e) {
    if (e.cn) {
      // A connection-related error;
      console.log("CN:", e.cn);
      console.log("EVENT:", error.message);
    }
  }
};

var pgp = require('pg-promise')(options);
var db = pgp('postgres://nqnxdhws:pmU5A841ugjh1uqwBCjckXQjagzVotF1@stampy.db.elephantsql.com:5432/nqnxdhws');

db.connect()
  .then(obj => {
	console.log('Connected to Database!'); 
    obj.done(); // success, release the connection;
  })
  .catch(error => {
  console.log('ERROR:', error.message || error);
});

app.use(express.static(__dirname + './../dist'));

app.listen(3000, (err, res) => {
	if (err) return err;
	console.log('Listening on port 3000!');
});

module.exports = app;