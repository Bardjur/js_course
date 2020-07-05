"use strict"
const numberOfFilms = +prompt('Скільки фільмів ви продивились?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

for (let i = 0; i < 2; i++){
    const movie = prompt('Один із останніх переглянутих фільмів?', ''),
          evaluation = prompt('На скільки іи його оціните', '');
    if ((movie != null && movie != '' && movie.length <= 50) && (evaluation != null && evaluation != '')){
        personalMovieDB.movies[movie] = evaluation;
    } else {
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log('Переглянуто моло фільмів');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log('Ви класичний глядач');
} else if (personalMovieDB.count > 30) {
    console.log('Ви кіноман');
} else {
    console.log('Виникла помилка');
}
console.log(personalMovieDB);