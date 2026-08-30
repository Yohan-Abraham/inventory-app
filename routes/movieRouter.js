const { Router } = require('express');
const movieRouter = Router();
const controller = require('../controllers/movieController');
const validator = require('../validation/validator');

movieRouter.get('/', controller.displayAllMovies);

movieRouter.get('/new', controller.displayAddPage);

movieRouter.post('/new', validator.validateMovie, controller.addMovie);

movieRouter.get('/update/:id', controller.displayUpdatePage);

movieRouter.post('/update/:id', controller.updateMovie);

movieRouter.get('/delete/:id', controller.displayDeletePage);

movieRouter.post('/delete/:id', controller.deleteMovie);

movieRouter.get('/:id', controller.getMovieInfo);

module.exports = movieRouter;
