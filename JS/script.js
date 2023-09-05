 "use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,    
  start: function() {
    personalMovieDB.count = +prompt('How many of the film you watched?', '');
  
    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
        personalMovieDB.count = +prompt('How many of the film you watched?', '');
    }
  },
  rememberMyFilms: function() {
    for(let i = 0; i < 2; i++) {
      const lastFilm = prompt('Which film do you watched at last time?', '').trim();
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
  },
  detectPersonalLevel: function() {
    if(numberOfFilms < 10) {
      alert(`You watched not a lot of films.`);
    } else if(numberOfFilms >= 10 && numberOfFilms <= 30) {
      alert(`You are a classic watcher.`);
    } else if(numberOfFilms > 30) {
      alert(`You are a grandmaster.`);
    }else alert(`Error.`);
  },
  showMyDB: function(hidden) {
    if(!hidden) {
      console.log(personalMovieDB);    
    } 
  },
  toggleVisibleMyDB: function() {
    if (personalMovieDB.privat) {
        personalMovieDB.privat = false;
    }else {
        personalMovieDB.privat = true;
    }
  },
  writeYourGeners: function() {
    for(let i = 1; i <= 3; i++) {
      personalMovieDB.genres[i - 1] = prompt(`Your favorite genre number ${i}?`, '');
      while(personalMovieDB.genres[i - 1] === '' || personalMovieDB.genres[i - 1] === null){
        personalMovieDB.genres[i - 1] = prompt(`Your favorite genre number ${i}?`, '');  
      }
    }
    this.genres.forEach((film, i) => {
        console.log(`Любимый жанр ${i + 1} - это ${film}`);
    }) 
  },
};
personalMovieDB.writeYourGeners();