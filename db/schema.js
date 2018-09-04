const { getPool } = require('./database');


const client = getPool();

client.connect();

client.query(`
  CREATE TABLE valet(
      id SERIAL PRIMARY KEY NOT NULL,
      first_name VARCHAR(100) NOT NULL, 
      last_name VARCHAR(100) NOT NULL, 
      address VARCHAR(255) NOT NULL, 
      city VARCHAR(255) NOT NULL, 
      state VARCHAR(10) NOT NULL, 
      zip VARCHAR(10) NOT NULL, 
      phone VARCHAR(20) NOT NULL, 
      email VARCHAR(255) NOT NULL,
      lat VARCHAR(20) NOT NULL,
      long VARCHAR(20) NOT NULL
    );`
  , (err, data) => {
    (err) && console.log(err.stack);
  client.end();
});

client.query(`
  CREATE TABLE app_users(
      id SERIAL PRIMARY KEY NOT NULL,
      email VARCHAR(255) NOT NULL,
      password VARCHAR(255) NOT NULL
    );`
  , (err, data) => {
    (err) && console.log(err.stack);
  client.end();
});