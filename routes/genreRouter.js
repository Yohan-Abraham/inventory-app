const { Router } = require('express');
const genreRouter = Router();
const controller = require('../controllers/genreController');

genreRouter.get('/', controller.displayAllGenres);

genreRouter.get('/new', controller.displayAddPage);

genreRouter.post('/new', controller.addNewGenre);

genreRouter.get('/delete/:id', controller.displayDeletePage);

genreRouter.post('/delete/:id', controller.deleteGenre);

genreRouter.get('/:id', controller.getAllGenreMovies);

module.exports = genreRouter;
