const pool = require('./pool');

async function getAllGenres() {
  const { rows } = await pool.query('Select * from category');
  return rows;
}

async function getMoviesByGenre(id) {
  const { rows } = await pool.query(
    `SELECT movie.*
     FROM movie
     JOIN movie_category
       ON movie.id = movie_category.movie_id
     WHERE movie_category.category_id = $1`,
    [id],
  );

  return rows;
}

async function addGenre(genre) {
  await pool.query('INSERT INTO category (name) VALUES ($1)', [genre]);
}

async function updateGenre(id, name) {
  await pool.query('UPDATE category SET name = $1 WHERE id = $2', [name, id]);
}

async function deleteGenre(id) {
  await pool.query('DELETE FROM category WHERE id = ($1)', [id]);
}
