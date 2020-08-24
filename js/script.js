const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели:?', '');

const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actor: {},
    genres: [],
    privat: false,
};

let numberOfLastFilm = 2;

for(let i = 0; i<numberOfLastFilm; i++) {
   let fitstQuestion = prompt('Один из последних просмотренных фильмов:?'),
    secondQuestion = prompt('На сколько оцените его:?');
   personalMoviesDB.movies[fitstQuestion] = secondQuestion;
}
