const Pool = require('pg').Pool;

const config = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'prkr'
}

const pool = new Pool(config);

const getPool = () => {
  return pool;
}

module.exports = {
  getPool
}  