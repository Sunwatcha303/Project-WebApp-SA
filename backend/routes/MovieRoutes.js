const express = require("express");
const router = express.Router();

const {
    GetAllMovie,
    GetMovieById,
    GetMoviesBySearchQuery,
    AddMovie,
    UpdateMovieById,
    DeleteMovieById
} = require("../controller/MovieController")

router.route("/all").get(GetAllMovie);

router.route("/:id").get(GetMovieById);

router.route("/search/:query").get(GetMoviesBySearchQuery);

router.route("/").post(AddMovie);

router.route("/:id").put(UpdateMovieById);

router.route("/:id").delete(DeleteMovieById);

module.exports = router;