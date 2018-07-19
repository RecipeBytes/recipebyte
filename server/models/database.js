const options = {
  error(error, e) {
    if (e.cn) {
      // A connection-related error;
      console.log("CN:", e.cn);
      console.log("EVENT:", error.message);
    }
  }
};

let pgp = require('pg-promise')(options);
let db = pgp('postgres://nqnxdhws:pmU5A841ugjh1uqwBCjckXQjagzVotF1@stampy.db.elephantsql.com:5432/nqnxdhws');

db.connect()
  .then(obj => {
    console.log('Connected to database');
    obj.done(); // success, release the connection;
  })
  .catch(error => {
  console.log('ERROR:', error.message || error);
});

module.exports = db;
