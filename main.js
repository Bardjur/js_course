"use strict";

const personalMovieDB = {
    count: '',
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = prompt('Скільки фільмів ви продивились?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = prompt('Скільки фільмів ви продивились?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++){
            const movie = prompt('Один із останніх переглянутих фільмів?', ''),
                evaluation = prompt('На скільки іи його оціните', '');
            if ((movie != null && movie != '' && movie.length <= 50) && (evaluation != null && evaluation != '')){
                personalMovieDB.movies[movie] = evaluation;
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Переглянуто мало фільмів');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log('Ви класичний глядач');
        } else if (personalMovieDB.count > 30) {
            console.log('Ви кіноман');
        } else {
            console.log('Виникла помилка');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        this.privat = !this.privat;
    },
    writeYourGeners: function() {
        for (let i = 1; i < 2; i++) {
            /* let genre = prompt(`Ваш улюблений жанр під номером ${i}`, '');

            if (genre != '' && genre != null) {
                personalMovieDB.genres[i - 1] = genre;
            } else {
                i--;
            } */

            let genres = prompt(`Введіть Ваші улюблені жанри через кому`, '').toLowerCase;
            if (genres === '' || genres == null) {
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }
        }

        personalMovieDB.genres.forEach((val, key) => {
            console.log(`Улюблений жанр №${key+1} - це ${val}`);
        });
    },

};
