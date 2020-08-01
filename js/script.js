'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const adv = document.querySelectorAll('.promo__adv img'),
        promo = document.querySelector('.promo__bg'),
        genre = promo.querySelector('.promo__genre'),
        watchedMovies = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm){
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substr(0, 21)}...`;
            }

            if (favorite) {
                console.log('Добавлено улюблений фільм');
            }

            movieDB.movies.push(newFilm);

            createMovieList(movieDB.movies, watchedMovies);
        }

        event.target.reset();

    });


    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };


    const makeChanges = () => {
        genre.textContent = 'драма';

        promo.style.cssText = 'background: url("img/bg.jpg") center center/cover no-repeat;';
    };


    const sortArray = (arr) => {
        arr.sort();
    };


    function createMovieList(films, parent) {
        parent.innerHTML = '';
        sortArray(films);

        films.forEach((items, num) => {
            parent.innerHTML += `
                <li class="promo__interactive-item"> ${num + 1} ${items}  
                    <div class="delete"></div>
                </li>
            `;

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                
                createMovieList(films, parent);
            });
        });

        });
    }

    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, watchedMovies);
});

