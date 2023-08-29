const numberOfFilms = +prompt('How many of the film you watched?', '');
const lastFilm = prompt('Which film do you watched at last time?', '');
const gradeFilm = prompt('How do you grade this film?', '');
const lastFilmTwo = prompt('Which film do you watched at last time?', '');
const gradeFilmTwo = prompt('How do you grade this film?', '');
alert(`You watched ${numberOfFilms} films.`);

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
personalMovieDB.movies[lastFilm] = gradeFilm;
personalMovieDB.movies[lastFilmTwo] = gradeFilmTwo;