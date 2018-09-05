export class PrintMovies {
  getMovies(arrayMovies) {
    const containerListOfMovies = document.createElement('ul');
    const container = document.getElementById('movies');
    let lista = '';
    lista += arrayMovies.map(movie => `<li class="movie__list">
        <p class="movie__title">${movie.title}</p>
        <img class="movie__image" src="http://image.tmdb.org/t/p/w300/${movie.poster_path}" width="160px"/>
        <p class="movie__points">${movie.vote_average} /10</p>
        </li>`);
    containerListOfMovies.innerHTML = lista;
    container.innerHTML = '';
    container.appendChild(containerListOfMovies);
  }

  printGetMovies(arrayMovies) {
    this.getMovies(arrayMovies);
  }

  getTitle() {
    let title = document.getElementById('movie__title-input');
    return title.value;
  }

}