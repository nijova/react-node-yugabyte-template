const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const conn = require('../api.json');
const yugabyte = require('./ycql.js');

const driver = new yugabyte.driver();

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/:table', (req, res) => {
  driver.selectAll(req.params.table, res);
})

app.get('/:table/:id', (req, res) => {
  driver.selectById(req.params.table, req.params.id, res);
})

app.post('/:table/:id', (req, res) => {
  console.log('got this body: ' + req.body);
  res.send('post this id: ' + req.params.id);
})

app.patch('/:table/:id', (req, res) => {
  res.send('patch this id: ' + req.params.id);
})

app.delete('/:table/:id', (req, res) => {
  res.send('delete this id: ' + req.params.id);
})

app.listen(conn.port, () => {
  console.log(`Service listening on port ${conn.port}`);
})