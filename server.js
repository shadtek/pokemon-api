const express = require('express');
const app = express();
const pokemon = require('./pokemon.js')

app.get('/pokemon', (req, res) => {
  res.send(pokemon.pokemon);
});

app.get('/pokemon/:id', (req, res) => {
  const {id} = req.params
  res.send(pokemon.pokemon.results[id-1]);
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});