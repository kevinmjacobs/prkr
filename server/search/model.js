const { getPool } = require('../../db/database');

module.exports = {
  get: (lat, lng, callback) => {
    const pool = getPool();
    pool.connect((err, client, release) => {
      (err) && callback(err, null);
      client.query(`SELECT id, concat(first_name,' ',last_name) as name, address, city, state, zip, lat, long FROM valet where lat >= (${lat} - 1) and lat <= (${lat} + 1) and long >= (${lng} - 1) and long <= (${lng} + 1);`, (err, data) => {
        release();
        (err) && callback(err, null);
        callback(null, data.rows);
        })
    });
  }
}