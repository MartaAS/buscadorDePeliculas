export class MoviesClient {

  async fetchMovies(title: string) {
    const base = 'https://api.themoviedb.org/3/search/movie'
    return fetch(`${base}?api_key=486d343f9b5ccc40cd5650b69fc70c5e&query=${title}`)
      .then(function (response) {
        return response.json();
      }).then((response) => {
        return response.results
      });
  }

}

