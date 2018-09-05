import { MoviesClient } from "./tmdb-client/client.js";
import { PrintMovies } from "./views/view.js";
import { Controller } from "./controllers/controller.js";

const movies = new MoviesClient();
const print = new PrintMovies();
const controller = new Controller(print, movies);



