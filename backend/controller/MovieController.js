const {
    GetAllMoviesRepo,
    GetMovieByIdRepo,
    AddMovieRepo,
    UpdateMovieByIdRepo,
    DeleteMovieByIdRepo,
} = require('../repositories/MoviesRepositories');

const {errorHandler, logging} = require('../util/logging');

const { v4: uuidv4 } = require('uuid');
require('dotenv').config();

// @desc Get all movie
// @route Get /movie/all
// @access public
const GetAllMovie = async (req, res) => {
    try {
        const movies = await GetAllMoviesRepo();
        console.log('URL:', req.originalUrl); // Add URL logging
        if (movies.length === 0) {
            console.log('No movies found'); // Add logging
            const errHd = errorHandler.MOVIE_NOT_FOUND;
            console.error(errHd);
            return res.status(errHd.code).json({
                name: errHd.name,
                desc_th: errHd.desc_th,
                desc_en: errHd.desc_en
            });
        }
        return res.status(200).json(movies);
    } catch (err) {
        const errHd = errorHandler.SERVER_ERROR;
        console.error(err, errHd);
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
        console.log('URL:', req.originalUrl); // Add URL logging
        if (!movie) {
            console.log('Movie not found'); // Add logging
            const errHd = errorHandler.MOVIE_NOT_FOUND;
            console.error(errHd);
            return res.status(errHd.code).json({
                name: errHd.name,
                desc_th: errHd.desc_th,
                desc_en: errHd.desc_en
            });
        }
        return res.status(200).json(movie);
    } catch (err) {
        const errHd = errorHandler.SERVER_ERROR;
        console.error(err, errHd);
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
        console.log('URL:', req.originalUrl); // Add URL logging
        console.log('New movie added:', newMovie); // Add logging
        return res.status(201).json({ message: 'Movie added successfully', movie: newMovie });
    } catch (error) {
        const errHd = errorHandler.SERVER_ERROR;
        console.error(err, errHd);
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
        console.log('URL:', req.originalUrl); // Add URL logging
        console.log('Movie to update:', movie); // Add logging
        if (!movie) {
            const errHd = errorHandler.MOVIE_NOT_FOUND;
            console.error(errHd);
            return res.status(errHd.code).json({
                name: errHd.name,
                desc_th: errHd.desc_th,
                desc_en: errHd.desc_en
            });
        }

        const updateMovie = await UpdateMovieByIdRepo(id, name, description, release_date, duration, cover_url);
        console.log('Updated movie:', updateMovie); // Add logging
        return res.status(200).json({ message: 'Movie updated successfully', movie: updateMovie });
    } catch (err) {
        const errHd = errorHandler.SERVER_ERROR;
        console.error(err, errHd);
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
        console.log('URL:', req.originalUrl); // Add URL logging
        if (!movie) {
            const errHd = errorHandler.MOVIE_NOT_FOUND;
            console.error(errHd);
            return res.status(errHd.code).json({
                name: errHd.name,
                desc_th: errHd.desc_th,
                desc_en: errHd.desc_en
            });
        }

        await DeleteMovieByIdRepo(id);
        console.log('Deleted movie:', id); // Add logging
        return res.status(200).json({ message: 'Movie deleted successfully', movie: id });
    } catch (error) {
        const errHd = errorHandler.SERVER_ERROR;
        console.error(err, errHd);
        return res.status(errHd.code).json({
            name: errHd.name,
            desc_th: errHd.desc_th,
            desc_en: errHd.desc_en
        });
    }
}

module.exports = { GetAllMovie, GetMovieById, AddMovie, UpdateMovieById, DeleteMovieById };