// @desc Get all movie
// @route Get /movie/all
// @access public
const GetAllMovie = (req, res) => {
    res.status(200).json({ message: "Get all movies" });
}

// @desc Get movie by id
// @route Get /movie/:id
// @access public
const GetMovieById = (req, res) => {
    res.status(200).json({ message: `Get movie by id ${req.params.id}` });
}

// @desc Create movie
// @route Create /movie
// @access public
const AddMovie = (req, res) => {
    res.status(201).json({ message: "Add movie" });
}

// @desc Update movie by id
// @route Update /movie/:id
// @access public
const UpdateMovieById = (req, res) => {
    res.status(200).json({ message: `Update movie by id ${req.params.id}` });
}

// @desc Delete movie by id
// @route Delete /movie/:id
// @access public
const DeleteMovieById = (req, res) => {
    res.status(200).json({ message: `Delete movie by id ${req.params.id}` });
}

module.exports = { GetAllMovie, GetMovieById, AddMovie, UpdateMovieById, DeleteMovieById };