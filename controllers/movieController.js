const {
  getAllMovies,
  addMovie,
  removeMovie,
  getMovieDetails,
  updateMovie,
} = require('../models/movieQueries');

const { getAllGenres } = require('../models/genreQueries');
const { validationResult } = require('express-validator');

module.exports = {
  displayAllMovies: async (req, res) => {
    const movies = await getAllMovies();
    res.render('movies', { movies });
  },

  getMovieInfo: async (req, res) => {
    const { id } = req.params;
    const movie = await getMovieDetails(id);
    res.render('movieInfo', { movie });
  },

  displayAddPage: async (req, res) => {
    const genres = await getAllGenres();
    res.render('addMovie', { genres });
  },

  displayDeletePage: (req, res) => {
    res.render('deleteMovie');
  },

  addMovie: async (req, res) => {
    const { title, rating, release_year, director, description } = req.body;
    const category = Array.isArray(req.body.category)
      ? req.body.category
      : [req.body.category];

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const genres = await getAllGenres();
      return res.status(400).render('addMovie', {
        genres,
        errors: errors.array(),
      });
    }

    console.log(category);
    await addMovie(
      title,
      description,
      release_year,
      director,
      rating,
      category,
    );
    res.redirect('/movies');
  },

  deleteMovie: async (req, res) => {
    const { id } = req.params;
    await removeMovie(id);
    res.redirect('/movies');
  },
};
