const pool = require('./pool');

async function getAllMovies() {
  const { rows } = await pool.query('SELECT * from movie');
  return rows;
}

async function addMovie(title, description, release_year, director, rating) {
  await pool.query(
    `INSERT INTO movie
      (title, description, release_year, director, rating)
     VALUES ($1, $2, $3, $4, $5)`,
    [title, description, release_year, director, rating],
  );
}

async function removeMovie(id) {
  await pool.query('DELETE FROM movie WHERE id = $1', [id]);
}

async function getMovieDetails(id) {
  const { rows } = await pool.query(
    `SELECT  movie.id,
       movie.title,
       movie.description,
       movie.release_year,
       movie.director,
       movie.rating,
       category.name AS category 
       FROM movie
JOIN movie_category 
ON movie.id = movie_category.movie_id
JOIN category
ON category.id = movie_category.category_id
WHERE movie.id = $1;`,
    [id],
  );
  return rows;
}

async function updateMovie(
  id,
  title,
  description,
  release_year,
  director,
  rating,
) {
  await pool.query(
    `UPDATE movie
     SET title = $1,
         description = $2,
         release_year = $3,
         director = $4,
         rating = $5
     WHERE id = $6`,
    [title, description, release_year, director, rating, id],
  );
}
