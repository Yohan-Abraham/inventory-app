const { Router } = require('express');
const genreRouter = Router();
const controller = require('../controllers/genreController');

genreRouter.get('/', controller.displayAllGenres);

genreRouter.get('/:id', controller.getAllGenreMovies);

module.exports = genreRouter;
