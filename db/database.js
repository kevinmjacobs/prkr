const Pool = require('pg').Pool;

// process.env.DATABASE_URL || 'postgres://localhost:5432/prkr';

const config = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'prkr'
}

const pool = new Pool(config);

const getAll = (callback) => {
  pool.query(`SELECT * FROM valet;`, (err, data) => {
    (err) && console.log(err.stack);
    console.log(data);
    callback(data);
  })
}


const getPool = () => {
  return pool;
}

module.exports = {
  getPool
}  