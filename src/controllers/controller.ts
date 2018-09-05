import { PrintMovies } from "../views/view.js";
import { MoviesClient } from "../tmdb-client/client.js";

export class Controller {
  public movies: any[]
  private printMovies: PrintMovies
  private client: MoviesClient
  constructor(printMovies: PrintMovies, client: MoviesClient) {
    this.movies = [];
    this.printMovies = printMovies;
    this.client = client;

    const btnSearch = document.getElementById('btn__search') as HTMLElement
    btnSearch.addEventListener('click', this.searchMovie.bind(this))
  }

  searchMovie() {
    this.client.fetchMovies(this.printMovies.getTitle()).then(moviesResults => {
      this.printMovies.printGetMovies(moviesResults)
    })

  }
}