"use script";

let numberOfFilms;


function start() {
  numberOfFilms = +prompt("Сколько фильмов Вы посмотрели?", "");

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов Вы посмотрели?", "");
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Последний просмотренный фильм?", ""),
      b = prompt("На сколько оцените его?", "");
    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
      personalMovieDB.movies[a] = b;
    } else {
      i--;
    }
  }
}

rememberMyFilms();


// if (personalMovieDB.count > 0 && personalMovieDB.count < 10) {
function detectPersonalLvl() {
  if (personalMovieDB.count < 10) {
    alert("Просмотрено мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert("Вы Классический зритель");
  } else if (personalMovieDB.count >= 30) {
    alert("Вы киноман");
  } else {
    alert("Произошла ошибка");
  }
}

detectPersonalLvl();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);

function writYourGenres() {
  for (let i = 1; i <= 3; i++) {
    const genre = prompt(`Ваш любимый жанр ${i}`, '');
    personalMovieDB.genres[i - 1] = genre;
    // personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр ${i}`, '');
  }
}

writYourGenres();