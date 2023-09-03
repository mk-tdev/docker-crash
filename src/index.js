const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('It is working!!!');
});

app.listen(3000, () => {
  console.log('app started and running!');
});
