const mysql = require('mysql2');
const config = require('../config');

const connection = mysql.createConnection({
  host: config.DATABASE_HOST,
  user: config.DATABASE_USER,
  password: config.DATABASE_PASSWORD,
  database: config.DATABASE_NAME,
  port: config.DATABASE_PORT
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.stack);
    return;
  }
  console.log('Connected to MySQL running on threadId', connection.threadId);
});

module.exports = connection;