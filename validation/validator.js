const { body } = require('express-validator');

const validateGenre = [
  body('genre')
    .trim()
    .notEmpty()
    .withMessage('Genre is required')
    .isLength({ min: 2, max: 50 })
    .withMessage('Genre must be between 2 and 50 characters'),
];

const validateMovie = [
  body('title')
    .trim()
    .notEmpty()
    .withMessage('Title is required')
    .isLength({ min: 1, max: 50 })
    .withMessage('Title must be between 1 and 50 characters'),
  body('rating')
    .trim()
    .notEmpty()
    .withMessage('Rating is required')
    .isFloat({ min: 1, max: 3 })
    .withMessage('Rating must be between 1 and 10'),
  body('release_year')
    .trim()
    .notEmpty()
    .withMessage('Release year is required')
    .isInt()
    .withMessage('Release year must be an integer'),
  body('director')
    .trim()
    .notEmpty()
    .withMessage('Movie must have a director')
    .isLength({ min: 2, max: 50 })
    .withMessage('Director must be between 2 and 50 characters'),
  body('description')
    .optional()
    .trim()
    .notEmpty()
    .isLength({ min: 1, max: 200 })
    .withMessage('Description must be less than 200 characters'),
];

module.exports = { validateGenre, validateMovie };
