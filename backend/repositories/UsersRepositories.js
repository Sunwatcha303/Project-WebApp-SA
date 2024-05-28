const connection = require('../database/database');
const bcrypt = require('bcrypt');

const GetUserByUsernameOrEmail = (username, email) => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM users WHERE username = ? OR email = ?';
    connection.query(query, [username, email], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results.length === 0 ? null : results[0]);
      }
    });
  });
};

const AddUser = (username, fullname, email, password) => {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO users (username, fullname, email, password) VALUES (?, ?, ?, ?)';
    connection.query(query, [username, fullname, email, password], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve({ username, fullname, email, password });
      }
    });
  });
};

module.exports = {
  GetUserByUsernameOrEmail, AddUser,
};