export class Controller {
  constructor(printMovies, client) {
    this.movies = [];
    this.printMovies = printMovies;
    this.client = client;
    const btnSearch = document.getElementById('btn__search');
    btnSearch.addEventListener('click', this.searchMovie.bind(this));
  }

  searchMovie() {
    this.client.fetchMovies(this.printMovies.getTitle()).then(moviesResults => {
      this.printMovies.printGetMovies(moviesResults);
    });
  }

}