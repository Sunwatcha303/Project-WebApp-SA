const {
    GetAllMoviesRepo,
    GetMovieByIdRepo,
    GetMoviesBySearchQueryRepo,
    AddMovieRepo,
    UpdateMovieByIdRepo,
    DeleteMovieByIdRepo,
} = require('../repositories/MoviesRepositories');
const logging = require('../util/logging');

const { errorHandler, successHandler } = require('../util/responseHandler');

const { v4: uuidv4 } = require('uuid');
require('dotenv').config();

// @desc Get all movie
// @route Get /movie/all
// @access public
const GetAllMovie = async (req, res) => {
    try {
        const movies = await GetAllMoviesRepo();
        if (movies.length === 0) {
            const errHd = errorHandler.MOVIE_NOT_FOUND;
            logging(req, errHd, errHd);
            return res.status(errHd.code).json({
                name: errHd.name,
                desc_th: errHd.desc_th,
                desc_en: errHd.desc_en
            });
        }
        logging(req, null, movies);
        return res.status(200).json(movies);
    } catch (err) {
        const errHd = errorHandler.SERVER_ERROR;
        console.error(err);
        logging(req, errHd, errHd);
        return res.status(errHd.code).json({
            name: errHd.name,
            desc_th: errHd.desc_th,
            desc_en: errHd.desc_en
        });
    }
}

// @desc Get movie by id
// @route Get /movie/:id
// @access public
const GetMovieById = async (req, res) => {
    try {
        const { id } = req.params;
        const movie = await GetMovieByIdRepo(id);
        if (!movie) {
            const errHd = errorHandler.MOVIE_NOT_FOUND;
            logging(req, errHd, errHd);
            return res.status(errHd.code).json({
                name: errHd.name,
                desc_th: errHd.desc_th,
                desc_en: errHd.desc_en
            });
        }
        logging(req, null, movie);
        return res.status(200).json(movie);
    } catch (err) {
        const errHd = errorHandler.SERVER_ERROR;
        console.error(err);
        logging(req, errHd, errHd);
        return res.status(errHd.code).json({
            name: errHd.name,
            desc_th: errHd.desc_th,
            desc_en: errHd.desc_en
        });
    }
}

// @desc Get movies by search query
// @route Get /movie/search/:query
// @access public
const GetMoviesBySearchQuery = async (req, res) => {
    try {
        const { query } = req.params;
        const movies = await GetMoviesBySearchQueryRepo(query);
        if (!movies) {
            const errHd = errorHandler.MOVIE_NOT_FOUND;
            logging(req, errHd, errHd);
            return res.status(errHd.code).json({
                name: errHd.name,
                desc_th: errHd.desc_th,
                desc_en: errHd.desc_en
            });
        }
        logging(req, null, movies);
        return res.status(200).json(movies);
    } catch (err) {
        const errHd = errorHandler.SERVER_ERROR;
        console.error(err);
        logging(req, errHd, errHd);
        return res.status(errHd.code).json({
            name: errHd.name,
            desc_th: errHd.desc_th,
            desc_en: errHd.desc_en
        });
    }
}

// @desc Create movie
// @route Post /movie
// @access public
const AddMovie = async (req, res) => {
    const { name, description, release_date, duration, cover_url } = req.body;
    const id = uuidv4();

    try {
        const newMovie = await AddMovieRepo(id, name, description, release_date, duration, cover_url);
        const log = successHandler.ADDED_MOVIE;
        logging(req, log, newMovie);
        return res.status(log.code).json(newMovie);
    } catch (error) {
        const errHd = errorHandler.SERVER_ERROR;
        console.error(err);
        logging(req, errHd, errHd);
        return res.status(errHd.code).json({
            name: errHd.name,
            desc_th: errHd.desc_th,
            desc_en: errHd.desc_en
        });
    }
}

// @desc Update movie by id
// @route Update /movie/:id
// @access public
const UpdateMovieById = async (req, res) => {
    const { name, description, release_date, duration, cover_url } = req.body;
    const id = req.params.id;

    try {
        const movie = await GetMovieByIdRepo(id);
        if (!movie) {
            const errHd = errorHandler.MOVIE_NOT_FOUND;
            logging(req, errHd, errHd);
            return res.status(errHd.code).json({
                name: errHd.name,
                desc_th: errHd.desc_th,
                desc_en: errHd.desc_en
            });
        }

        const updateMovie = await UpdateMovieByIdRepo(id, name, description, release_date, duration, cover_url);
        const log = successHandler.UPDATED_MOVIE;
        logging(req, log, updateMovie);
        return res.status(log.code).json(updateMovie);
    } catch (err) {
        const errHd = errorHandler.SERVER_ERROR;
        console.error(err);
        logging(req, errHd, errHd);
        return res.status(errHd.code).json({
            name: errHd.name,
            desc_th: errHd.desc_th,
            desc_en: errHd.desc_en
        });
    }
}

// @desc Delete movie by id
// @route Delete /movie/:id
// @access public
const DeleteMovieById = async (req, res) => {
    const id = req.params.id;

    try {
        const movie = await GetMovieByIdRepo(id);
        if (!movie) {
            const errHd = errorHandler.MOVIE_NOT_FOUND;
            logging(req, errHd, errHd);
            return res.status(errHd.code).json({
                name: errHd.name,
                desc_th: errHd.desc_th,
                desc_en: errHd.desc_en
            });
        }

        await DeleteMovieByIdRepo(id);
        const log = successHandler.DELETED_MOVIE;
        logging(req, log, movie);
        return res.status(log.code).json(movie);
    } catch (error) {
        const errHd = errorHandler.SERVER_ERROR;
        console.error(err);
        logging(req, errHd, errHd);
        return res.status(errHd.code).json({
            name: errHd.name,
            desc_th: errHd.desc_th,
            desc_en: errHd.desc_en
        });
    }
}

module.exports = { GetAllMovie, GetMovieById, GetMoviesBySearchQuery, AddMovie, UpdateMovieById, DeleteMovieById };