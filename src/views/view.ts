export class PrintMovies {
  getMovies(arrayMovies: any[]) {
    const containerListOfMovies = document.createElement('ul') as HTMLUListElement;
    const container = document.getElementById('movies') as HTMLDivElement;
    let lista: string = '';

    lista += arrayMovies.map((movie: any) =>
      `<li class="movie__list">
        <p class="movie__title">${movie.title}</p>
        <img class="movie__image" src="http://image.tmdb.org/t/p/w300/${movie.poster_path}" width="160px"/>
        <p class="movie__points">${movie.vote_average} /10</p>
        </li>`);

    containerListOfMovies.innerHTML = lista;
    container.innerHTML = '';
    container.appendChild(containerListOfMovies);
  }

  printGetMovies(arrayMovies: any[]) {
    this.getMovies(arrayMovies)
  }

  getTitle() {
    let title = document.getElementById('movie__title-input') as HTMLInputElement;
    return title.value
  }
}
