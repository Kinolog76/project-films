"use script";

const numberOfFilms = +prompt("Сколько фильмов Вы посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genders: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  const a = prompt("Последний просмотренный фильм?", ""),
    b = prompt("На сколько оцените его?", "");
  if (a != null && b != null && a != "" && b != "" && a.length < 50) {
    personalMovieDB.movies[a] = b;
  } else {
    i--;
  }
}

// if (personalMovieDB.count > 0 && personalMovieDB.count < 10) {
if (personalMovieDB.count > 0 && personalMovieDB.count < 10) {
  alert("Просмотрено мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  alert("Вы Классический зритель");
} else if (personalMovieDB.count >= 30) {
  alert("Вы киноман");
} else {
  alert("Произошла ошибка");
}

console.log(personalMovieDB);
