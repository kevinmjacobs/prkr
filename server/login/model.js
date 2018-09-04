const { getPool } = require('../../db/database');

module.exports = {
  get: (email, callback) => {
    const pool = getPool();
    pool.connect((err, client, release) => {
      (err) && callback(err, null);
      client.query(`
        SELECT id, email, password
        FROM app_users
        WHERE email = '${email}';
      `, (err, data) => {
        release();
        if (err) {
          callback(err, null)
        } else {
          callback(null, data.rows[0]);
        }
      })
    });
  }
}