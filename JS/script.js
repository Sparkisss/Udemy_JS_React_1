"use strict";
let numberOfFilms;

function start() {
  numberOfFilms = +prompt('How many of the film you watched?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('How many of the film you watched?', '');
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
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
}
rememberMyFilms();

function detectPersonalLevel() {
  if(numberOfFilms < 10) {
    alert(`You watched not a lot of films.`);
  } else if(numberOfFilms >= 10 && numberOfFilms <= 30) {
    alert(`You are a classic watcher.`);
  } else if(numberOfFilms > 30) {
    alert(`You are a grandmaster.`);
  }else alert(`Error.`);
}
detectPersonalLevel();

function writeYourGeners() {
  for(let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Your favorite genre number ${i}?`, '');
  }
}
writeYourGeners();

function showMyDB(hidden) {
  if(!hidden) {
    console.log(personalMovieDB);    
  } 
}
showMyDB(personalMovieDB.privat);