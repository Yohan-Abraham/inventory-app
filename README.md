# Movie Inventory

A full-stack movie inventory application built with **Node.js, Express, EJS, and PostgreSQL**.

The app lets users browse movies and genres, view movie details, add new movies and genres, assign multiple genres to a movie, and delete records while preserving database relationships.

## Live Demo

[View the deployed application](https://inventory-app-cold.onrender.com/)

## Tech Stack

- Node.js
- Express.js
- PostgreSQL
- EJS
- `pg`
- `express-validator`
- `dotenv`
- HTML5
- CSS3
- Render

## Features

- Browse all movies
- View individual movie details
- Browse movies by genre
- Add new movies
- Add new genres
- Assign multiple genres to a movie
- Delete movies and genres
- Server-side form validation with `express-validator`
- Responsive dark-themed interface
- PostgreSQL many-to-many relationship between movies and categories

## Database Design

The application uses three main tables:

```text
movie
-----
id
title
description
release_year
director
rating
```

```text
category
--------
id
name
```

```text
movie_category
--------------
movie_id
category_id
```

`movie_category` creates a many-to-many relationship, allowing one movie to belong to multiple categories and one category to contain multiple movies.

When a movie or category is deleted, the related join-table rows are removed without deleting unrelated movies or categories.

## Project Structure

```text
inventory-app/
├── controllers/
├── models/
├── public/
├── routes/
├── validation/
├── views/
├── app.js
├── package.json
└── package-lock.json
```

The project follows an MVC-style structure:

```text
Request
  ↓
Router
  ↓
Controller
  ↓
Model / PostgreSQL
  ↓
Controller
  ↓
EJS View
  ↓
Browser
```

## Validation

Form input is validated before database operations using `express-validator`.

Validation includes:

- required movie titles
- valid ratings
- valid release years
- director name requirements
- description length limits
- genre name validation

Parameterized SQL queries are also used to avoid directly interpolating user input into database queries.

## Responsive Design

The interface uses **CSS Grid**, **Flexbox**, and media queries to adapt across desktop, tablet, and mobile layouts.

Movie and genre grids reduce from three columns on larger screens to a single column on smaller screens.

## Local Setup

Clone the repository:

```bash
git clone https://github.com/Yohan-Abraham/inventory-app.git
cd inventory-app
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
DB_HOST=localhost
DB_USER=your_postgres_username
DB_NAME=your_database_name
DB_PORT=5432
```

Start the app:

```bash
node app.js
```

Then visit:

```text
http://localhost:3000
```

## What I Learned

This project strengthened my understanding of:

- Express routing and middleware
- PostgreSQL queries and relational database design
- many-to-many relationships and join tables
- server-side rendering with EJS
- form handling with `req.body`
- route parameters with `req.params`
- input validation and sanitization
- responsive layouts with Grid and Flexbox
- deploying a Node/PostgreSQL application

## Future Improvements

- Movie search and filtering
- Sorting by rating or release year
- Movie poster support
- Improved validation feedback
- Custom error pages
- Pagination
- Authentication
- Automated tests

## Author

**Yohan Abraham**

[GitHub Profile](https://github.com/Yohan-Abraham)  
[Repository](https://github.com/Yohan-Abraham/inventory-app)
