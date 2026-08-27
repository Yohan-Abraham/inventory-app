const { Router } = require('express');
const movieRouter = Router();
const controller = require('../controllers/movieController');

movieRouter.get('/', controller.displayAllMovies);

movieRouter.get('/:id', controller.getMovieInfo);

module.exports = movieRouter;
