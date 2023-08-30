"use strict";
const numberOfFilms = +prompt('How many of the film you watched?', '');

if(numberOfFilms < 10) {
  alert(`You watched not a lot of films.`);
} else if(numberOfFilms >= 10 && numberOfFilms <= 30) {
  alert(`You are a classic watcher.`);
} else if(numberOfFilms > 30) {
  alert(`You are a grandmaster.`);
}else alert(`Error.`);


const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};


for(let i = 0; i < 2; i++) {
  const lastFilm = prompt('Which film do you watched at last time?', '');
  const gradeFilm = prompt('How do you grade this film?', '');
  if(lastFilm != null && gradeFilm != null && lastFilm != '' && gradeFilm != '' && 
  lastFilm.length < 50){
    personalMovieDB.movies[lastFilm] = gradeFilm;
    console.log('done');
  } else {
    console.log('error');
    i--;
  }
}
console.log(personalMovieDB);