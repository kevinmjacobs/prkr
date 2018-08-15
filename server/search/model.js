const { client } = require('../../db/database');
const { Pool } = require('pg');
// const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/prkr';

const pool = new Pool();

module.exports = {
  get: (callback) => {
    pool.on('error', (err, client) => {
      done();
      console.error('Error:', err);
      process.exit(-1);
    })
    pool.connect((err, client, done) => {
      if (err) {
        done();
        console.log(err);
      }
      client.query(`SELECT * FROM valet;`, (err, data) => {
          done();
          (err) && console.log(err.stack);
          console.log('query valet');
          callback(data);
        })
    });
    pool.end();
    // client.query(`SELECT * FROM valet;`, (err, data) => {
    //   (err) && console.log(err.stack);
    //   console.log('query valet');
    //   callback(data);
    // })
  }
}