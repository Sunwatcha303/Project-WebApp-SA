const connection = require('../database/database');
const bcrypt = require('bcrypt');

const GetAllMoviesRepo = () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM movies INNER JOIN score_movies ON movies.hash_id = score_movies.hash_id';
        connection.query(query, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};

const GetMovieByIdRepo = (id) => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM movies WHERE hash_id = ?';
        connection.query(query, [id], (err, results) => {
            if (err) {
                reject(err);
            } else if (results.length === 0) {
                resolve(null);
            } else {
                resolve(results[0]);
            }
        });
    });
};

const AddMovieRepo = (id, name, description, release_date, duration, cover_url) => {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO movies (hash_id, name, description, release_date, duration, cover_url) VALUES (?, ?, ?, ?, ?, ?)';
        connection.query(query, [id, name, description, release_date, duration, cover_url], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve({ id, name, description, release_date, duration, cover_url });
            }
        });
    });
};

const UpdateMovieByIdRepo = (id, name_update, description_update, release_date_update, duration_update, cover_url_update) => {
    return new Promise((resolve, reject) => {
        const query = 'UPDATE movies SET name = ?, description = ?, release_date = ?, duration = ?, cover_url = ? WHERE hash_id = ?';
        connection.query(query, [name_update, description_update, release_date_update, duration_update, cover_url_update, id], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve({ id, name_update, description_update, release_date_update, duration_update, cover_url_update });
            }
        });
    });
};

const DeleteMovieByIdRepo = (id) => {
    return new Promise((resolve, reject) => {
        const query = 'DELETE FROM movies WHERE hash_id = ?';
        connection.query(query, [id], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
};

module.exports = {
  GetAllMoviesRepo, GetMovieByIdRepo, AddMovieRepo, UpdateMovieByIdRepo, DeleteMovieByIdRepo,
};