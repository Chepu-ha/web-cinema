import {axiosService} from "./axios.service";
import {urls} from "../configs";

const movieService = {
	getAll: (page = 1) => axiosService.get(urls.movies, {params: {page}}),
	getByGenre: (page = 1, genreId) => axiosService.get(urls.movies, {params: {page, with_genres: genreId}}),
	search: (page = 1, query) => axiosService.get(urls.search, {params: {page, query}}),
	getById: (id) => axiosService.get(urls.movie + id)
};

export {movieService};