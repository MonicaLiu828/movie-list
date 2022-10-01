const express = require('express');
const db = require('./connection');

var router = require('./router.js');
const app = express();
const PORT = 3000 || process.env.PORT;

app.use(express.json())
app.use(express.static('client/dist'));
app.use('/movies', router)

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})

