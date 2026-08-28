const { Router } = require('express');
const movieRouter = Router();
const controller = require('../controllers/movieController');

movieRouter.get('/', controller.displayAllMovies);

movieRouter.get('/new', controller.displayAddPage);

movieRouter.post('/new', controller.addMovie);

movieRouter.get('/delete/:id', controller.displayDeletePage);

movieRouter.post('/delete/:id', controller.deleteMovie);

movieRouter.get('/:id', controller.getMovieInfo);

module.exports = movieRouter;
