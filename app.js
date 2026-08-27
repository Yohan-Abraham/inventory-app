const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('node:path');
const indexRouter = require('./routes/indexRouter');
const movieRouter = require('./controllers/movieController');
const genreRouter = require('./controllers/genreController');

// app.js
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/movies', movieRouter);
app.use('./genres', genreRouter);

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Listening to port ${port}`);
});
