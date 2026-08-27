const {
  getAllGenres,
  getMoviesByGenre,
  addGenre,
  updateGenre,
  deleteGenre,
} = require('../models/genreQueries');

module.exports = {
  displayAllGenres: async (req, res) => {
    const genres = await getAllGenres();
    res.render('genres', { genres });
  },

  getAllGenreMovies: async (req, res) => {
    const { id } = req.params;

    if (isNaN(Number(id))) {
      return res.status(400).send('Invalid genre ID');
    }
    const movies = await getMoviesByGenre(id);
    console.log(movies);
    res.render('genreInfo', { movies });
  },
};
