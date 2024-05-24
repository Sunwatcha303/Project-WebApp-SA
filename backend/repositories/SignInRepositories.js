const connection = require('../database/database');
const bcrypt = require('bcrypt');

const GetUserByUsernameOrEmail = (usernameOrEmail) => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM users WHERE username = ? OR email = ?';
    connection.query(query, [usernameOrEmail, usernameOrEmail], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

module.exports = {
  GetUserByUsernameOrEmail,
};