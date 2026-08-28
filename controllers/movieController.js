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

  addMovie: async (req, res) => {
    const { title, rating, release_year, director, description } = req.body;
    await addMovie(title, description, release_year, director, rating);
    res.redirect('/movies');
  },

  deleteMovie: async (req, res) => {
    const { id } = req.params;
    await removeMovie(id);
    res.redirect('/movies');
  },
};
