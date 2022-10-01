var db = require ('../connection');

module.exports = {

  getAll: function () {
  var promise = new Promise ((resolve, reject) => {
    db.query('select * from movies', (err, rows) => {
      if (err) {
        throw err;
      }
      resolve(rows);
      console.log('get request succeed')
    })
  })
  return promise;
}

  // getFilter: function () {

  // }

}