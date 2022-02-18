const ycql = require('yugabyte').YCQL.cassandraDriver;
const access = require('./ycql-access.json');

class Driver {
  client;
  keyspace;

  constructor() {
    this.keyspace = access.keyspace;
    const loadBalancingPolicy = new ycql.policies.loadBalancing.RoundRobinPolicy ();
    this.client = new ycql.Client({ contactPoints: access.contactPoints, policies : { loadBalancing : loadBalancingPolicy }});
  };

  selectAll = (table, res) => {
    const query = `SELECT * FROM ${this.keyspace}.${table};`;
    this.client.execute(query, function (err, result) {
      if (err) {console.log(err);}
      res.json(result.rows);
    });
  }

  selectById = (table, id, res) => {
    const query = `SELECT * FROM ${this.keyspace}.${table} WHERE id=${id};`;
    this.client.execute(query, function (err, result) {
      if (err) {console.log(err);}
      res.json(result.rows[0]);
    });
  }

  create = (table, body, res) => {
    const query = `INSERT INTO ${this.keyspace}.${table} (${Object.keys(body).join(',')}) 
      VALUES (${Object.values(body).join(', ')});`;
    this.client.execute(query, function (err, result) {
      if (err) {console.log(err);}
      res.status(201);
      res.json(result);
    });
  }

  removeById = (table, id, res) => {
    const query = `DELETE FROM ${this.keyspace}.${table} WHERE id=${id};`;
    this.client.execute(query, function (err, result) {
      if (err) {console.log(err);}
      res.status(200);
      res.send(id);
    });
  }

};

exports.driver = Driver;