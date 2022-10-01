var models = require ('../Models')

module.exports = {

  get: function (req, res) {
    var promise = models.movieModel.getAll();
    promise
    .then((movie) => {
      console.log('get succeed');
      res.end(JSON.stringify(movie));
    })
    .catch((err) => {
      throw err;
    })

  }

}