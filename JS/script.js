 "use strict";
// let numberOfFilms;

// function start() {
//   numberOfFilms = +prompt('How many of the film you watched?', '');

//   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//     numberOfFilms = +prompt('How many of the film you watched?', '');
//   }
// }

// start();

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// function rememberMyFilms() {
//   for(let i = 0; i < 2; i++) {
//     const lastFilm = prompt('Which film do you watched at last time?', '').trim();
//     const gradeFilm = prompt('How do you grade this film?', '');
//     if(lastFilm != null && gradeFilm != null && lastFilm != '' && gradeFilm != '' && 
//     lastFilm.length < 50){
//       personalMovieDB.movies[lastFilm] = gradeFilm;
//       console.log('done');
//     } else {
//       console.log('error');
//       i--;
//     }
//   }
// }
// rememberMyFilms();

// function detectPersonalLevel() {
//   if(numberOfFilms < 10) {
//     alert(`You watched not a lot of films.`);
//   } else if(numberOfFilms >= 10 && numberOfFilms <= 30) {
//     alert(`You are a classic watcher.`);
//   } else if(numberOfFilms > 30) {
//     alert(`You are a grandmaster.`);
//   }else alert(`Error.`);
// }
// detectPersonalLevel();

// function writeYourGeners() {
//   for(let i = 1; i <= 3; i++) {
//     personalMovieDB.genres[i - 1] = prompt(`Your favorite genre number ${i}?`, '');
//   }
// }
// writeYourGeners();

// function showMyDB(hidden) {
//   if(!hidden) {
//     console.log(personalMovieDB);    
//   } 
// }
// showMyDB(personalMovieDB.privat);

// function findMaxNumber(n1, n2, n3, n4) {
//   let result = 0;
//   let arr = [];
//   arr[0] = n1;
//   arr[1] = n2;
//   arr[2] = n3;
//   arr[3] = n4;
//   if(typeof n1 === 'number' && typeof n2 === 'number' && typeof n3 === 'number' && typeof n4 === 'number') {
//     for(let i = 0; i < arr.length; i++) {
//       if(result < arr[i]) {
//         result = arr[i];
//       }
//     }
//     console.log(result);
//   }else console.log(0);
// }

// findMaxNumber(1, 5, 6.6, 11);
// findMaxNumber(1, 5, '6', '11');
// findMaxNumber(1, 6.6, 11);
// findMaxNumber(1, 5, 1, 99);

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red',
//     },
// }
// for (let key in options) {
//     if(typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Object Key - ${i}. Object Value - ${options[key][i]}`);
//         }
//     }else {
//         console.log(`Key - ${key}. Value - ${options[key]}`);
//     }
    
// }
// function copy(mainObj) {
//     let objCopy = {};
//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5, 
//     c: {
//         x: 7,
//         y: 4,
//     },
// };

// const newNumbers = copy(numbers);
// newNumbers.a = 10;
// console.log(newNumbers);

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function (obj) {
        const {age, skills: {languages}} = obj;
        let info = `Мне ${age} и я владею языками: `;      
        for (let i = 0; i < languages.length; i++){
            info += `${languages[i].toUpperCase()}`;
            if (i !== languages.length - 1) {
                info += " ";
            }
        }
        return info;
    }
};
const result = personalPlanPeter.showAgeAndLangs(personalPlanPeter);
console.log(result);




function showExperience(plan) {
 const {exp} = personalPlanPeter.skills;
 return exp;
}


function showProgrammingLangs(plan) {
    let result = "";
    const {skills: {programmingLangs}} = personalPlanPeter;
    for (let key in programmingLangs) {
        result += `Язык ${key} изучен на ${programmingLangs[key]}%\n`;
    }
    return result;
}

const result = showProgrammingLangs(personalPlanPeter);
console.log(result);