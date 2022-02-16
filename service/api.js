const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;

app.get('/:id', (req, res) => {
  res.send('get this id: ' + req.params.id);
})

app.post('/:id', (req, res) => {
  console.log('got this body: ' + req.body);
  res.send('post this id: ' + req.params.id);
})

app.patch('/:id', (req, res) => {
  res.send('patch this id: ' + req.params.id);
})

app.delete('/:id', (req, res) => {
  res.send('delete this id: ' + req.params.id);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})