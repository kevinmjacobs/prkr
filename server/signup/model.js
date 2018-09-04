const { getPool } = require('../../db/database');

module.exports = {
  post: (email, password, callback) => {
    const pool = getPool();
    pool.connect((err, client, release) => {
      (err) && callback(err, null);
      client.query(`
        INSERT INTO app_users (id, email, password) 
        VALUES (DEFAULT, '${email}', '${password}')
        ON CONFLICT ON CONSTRAINT app_users_email_key 
        DO NOTHING;
        ;
      `, (err, data) => {
        release();
        if (err) {
          callback(err, null)
        } else {
          callback(null, { rowsAdded: data.rowCount });
        }
      })
    });
  }
}