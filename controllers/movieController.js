const {
  getAllMovies,
  addMovie,
  removeMovie,
  getMovieDetails,
  updateMovie,
} = require('../models/movieQueries');

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
};
