const numberOfFilms = +prompt('Скільки фільмів ви продивились?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

let movie = prompt('Один із останніх переглянутих фільмів?', ''),
    evaluation = prompt('На скільки іи його оціните','');
personalMovieDB.movies[movie] = evaluation;

movie = prompt('Один із останніх переглянутих фільмів?', '');
evaluation = prompt('На скільки іи його оціните', '');
personalMovieDB.movies[movie] = evaluation;

console.log(personalMovieDB);