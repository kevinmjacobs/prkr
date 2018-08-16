const { getPool } = require('../../db/database');

module.exports = {
  get: (callback) => {
    const pool = getPool();
    pool.connect((err, client) => {
      (err) && callback(err, null);
      client.query(`SELECT * FROM valet;`, (err, data) => {
          (err) && console.log(err.stack);
          callback(null, data.rows);
        })
    });
  }
}