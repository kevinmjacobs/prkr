const { Client } = require('pg');
const connection = process.env.DATABASE_URL || 'postgres://localhost:5432/prkr';

const client = new Client(connection);

module.exports = {
  client
}