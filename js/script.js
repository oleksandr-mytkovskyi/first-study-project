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

    if(fitstQuestion != '' && secondQuestion != '' && fitstQuestion != null && secondQuestion != null && fitstQuestion.length < 50) {
        personalMoviesDB.movies[fitstQuestion] = secondQuestion;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }

 
}

if(personalMoviesDB.count < 10) {
    alert('Watching little bit films');
} else if(personalMoviesDB.count >= 10 && personalMoviesDB.count <= 30){
    alert('You are classic customer');
} else if(personalMoviesDB.count > 30) {
    alert('You have superpower');
} else {
    alert('error');
}

console.log(personalMoviesDB);