var controller = require('./controllers');
var router = require('express').Router();


router.get('/', controller.movieController.get);

router.all('/', (req, res)=> {
  res.end('hello world')
})
module.exports = router;