let numberOfLastFilm = 2;

const personalMoviesDB = {
    count: 0,
    movies: {},
    actor: {},
    genres: [],
    privat: false,
    toggleVisibleMyDB: function() {
        if (this.privat) {
            this.privat = false;
        } else this.privat = true;
    },
    startApp: function() {
        let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели:?', '');
        while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели:?', '');
        }
        this.count = numberOfFilms;
    },
    detectPersonalLevel: function() {
        if(this.count < 10) {
            alert('Watching little bit films');
        } else if(this.count >= 10 && this.count <= 30){
            alert('You are classic customer');
        } else if(this.count > 30) {
            alert('You have superpower');
        } else {
            alert('error');
        }  
    },
    rememberMyFilms: function() {
        for(let i = 0; i<numberOfLastFilm; i++) {
            let a = prompt('Один из последних просмотренных фильмов:?'),
             b = prompt('На сколько оцените его:?');
         
             if(a != '' && b != '' && a != null && b != null && a.length < 50) {
                 this.movies[a] = b;
                 console.log('done');
             } else {
                 console.log('error');
                 i--;
             }
         }
    },
    showMyDB: function() {
        if(!this.privat) {
            console.log(personalMoviesDB);
        }
    },    
    writeYourGenres: function() {
        let genres = [];
        for(let i = 0; i < 3; i++) {
            genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}?`);
            if (genres[i] == '' || genres[i] == null) {
                i--;
            } 
        }
        genres.forEach( (item, index) => {
            console.log(`Любимый жанр ${index+1} - это ${item}`);
        });
        this.genres = [...genres];
    }
};


// personalMoviesDB.startApp();
// personalMoviesDB.detectPersonalLevel();
// personalMoviesDB.rememberMyFilms();
// personalMoviesDB.writeYourGenres();
// personalMoviesDB.showMyDB();




