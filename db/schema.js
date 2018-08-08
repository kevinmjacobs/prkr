const { client } = require('./database');

client.connect();

client.query(`CREATE TABLE valets(id SERIAL PRIMARY KEY, first_name VARCHAR(100), last_name VARCHAR(100), address VARCHAR(255), city VARCHAR(255), state VARCHAR(10), zip VARCHAR(10), phone VARCHAR(10), email VARCHAR(255));`, (err, data) => {
  (err) && console.log(err.stack);
  client.end();
});