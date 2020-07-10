"use strict";

let numberOfFilms;

function start() {
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Скільки фільмів ви продивились?', '');
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
    for (let i = 0; i < 2; i++){
        const movie = prompt('Один із останніх переглянутих фільмів?', ''),
              evaluation = prompt('На скільки іи його оціните', '');
        if ((movie != null && movie != '' && movie.length <= 50) && (evaluation != null && evaluation != '')){
            personalMovieDB.movies[movie] = evaluation;
        } else {
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Переглянуто моло фільмів');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log('Ви класичний глядач');
    } else if (personalMovieDB.count > 30) {
        console.log('Ви кіноман');
    } else {
        console.log('Виникла помилка');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

function writeYourGeners(){
    for (let i = 1; i <= 3; i++){
        personalMovieDB.genres[i - 1] = prompt(`Ваш улюблений жанр під номером ${i}`,'');
    }
}

