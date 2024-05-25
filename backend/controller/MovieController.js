const { 
    GetAllMoviesRepo,
    GetMovieByIdRepo,
    AddMovieRepo,
    UpdateMovieByIdRepo,
    DeleteMovieByIdRepo,
} = require('../repositories/MoviesRepositories');

const { v4: uuidv4 } = require('uuid');
require('dotenv').config();

// @desc Get all movie
// @route Get /movie/all
// @access public
const GetAllMovie = async (req, res) => {
    try {
        const movies = await GetAllMoviesRepo();
        console.log('URL:', req.originalUrl); // Add URL logging
        console.log('All movies:', movies); // Add logging
        if (movies.length === 0) {
            console.log('No movies found'); // Add logging
            return res.status(404).json({ message: 'No movies found' });
        }
        res.status(200).json(movies);
    } catch (err) {
        console.error('Error getting all movies:', err); // Add logging
        res.status(500).json({ message: 'Server error', error: err.message });
    }
}

// @desc Get movie by id
// @route Get /movie/:id
// @access public
const GetMovieById = async (req, res) => {
    try {
        const {id} = req.params;
        const movie = await GetMovieByIdRepo(id);
        console.log('URL:', req.originalUrl); // Add URL logging
        console.log('Movie by ID:', movie); // Add logging
        if (!movie) {
            console.log('Movie not found'); // Add logging
            return res.status(404).json({ message: 'Movie not found' });
        }
        res.status(200).json(movie);
    } catch (err) {
        console.error('Error getting movie by ID:', err); // Add logging
        res.status(500).json({ message: 'Server error', error: err.message });
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
        res.status(201).json({ message: 'Movie added successfully', movie: newMovie });
    } catch (error) {
        console.error('Error adding movie:', error); // Add logging
        res.status(500).json({ message: 'Server error', error: error.message });
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
            console.log('Movie not found'); // Add logging
            return res.status(404).json({ message: 'Movie not found' });
        }

        const updateMovie = await UpdateMovieByIdRepo(id, name, description, release_date, duration, cover_url);
        console.log('Updated movie:', updateMovie); // Add logging
        res.status(200).json({ message: 'Movie updated successfully', movie: updateMovie });
    } catch (error) {
        console.error('Error updating movie:', error); // Add logging
        res.status(500).json({ message: 'Server error', error: error.message });
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
            console.log('Movie not found'); // Add logging
            return res.status(404).json({ message: 'Movie not found' });
        }

        await DeleteMovieByIdRepo(id);
        console.log('Deleted movie:', id); // Add logging
        res.status(200).json({ message: 'Movie deleted successfully', movie: id });
    } catch (error) {
        console.error('Error deleting movie:', error); // Add logging
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}

module.exports = { GetAllMovie, GetMovieById, AddMovie, UpdateMovieById, DeleteMovieById };