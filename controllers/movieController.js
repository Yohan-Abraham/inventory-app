const {
  getAllMovies,
  addMovie,
  removeMovie,
  getMovieDetails,
  updateMovie,
} = require('../models/movieQueries');
const { displayAddPage } = require('./genreController');

module.exports = {
  displayAllMovies: async (req, res) => {
    const movies = await getAllMovies();
    res.render('movies', { movies });
  },

  getMovieInfo: async (req, res) => {
    const { id } = req.params;
    const movie = await getMovieDetails(id);
    console.log(movie);
    res.render('movieInfo', { movie });
  },

  displayAddPage: (req, res) => {
    res.render('addMovie');
  },

  displayDeletePage: (req, res) => {
    res.render('deleteMovie');
  },
};
