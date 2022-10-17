import {axiosService} from "./axios.service";
import {urls} from "../configs";

const movieService = {
	//https://api.themoviedb.org/3/discover/movie?page=2
	getAll: (page=1) => axiosService.get(urls.movies, {params:{page}})
};

export {movieService};