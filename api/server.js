const express = require('express');
const app = express();
const reasons = require('./reasons.json');
const port = process.env.PORT || 3000;

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/api/reasons', (request, response) => {
  console.log('Recibida peticion');

  response.setHeader('Content-Type', 'application/json');
  response.send(JSON.stringify(reasons));
});

// START APP
app.listen(port, () => console.log(`Listening on port ${port}`));