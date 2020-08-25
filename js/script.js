let numberOfFilms,
    numberOfLastFilm = 2;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели:?', '');
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели:?', '');
    }
}

function detectPersonalLevel() {
    if(personalMoviesDB.count < 10) {
        alert('Watching little bit films');
    } else if(personalMoviesDB.count >= 10 && personalMoviesDB.count <= 30){
        alert('You are classic customer');
    } else if(personalMoviesDB.count > 30) {
        alert('You have superpower');
    } else {
        alert('error');
    }  
}

function rememberMyFilms() {
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
}

function showMyDB(hidden) {
    if(!hidden) {
        console.log(personalMoviesDB);
    }
}

function writeYourGenres() {
    for(let i = 0; i < 3; i++) {
        personalMoviesDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}?`);
    }
}

const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actor: {},
    genres: [],
    privat: false,
};


// start();

// rememberMyFilms();

// detectPersonalLevel(); 

writeYourGenres();

showMyDB(personalMoviesDB.privat);



