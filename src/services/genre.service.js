import {axiosService} from "./axios.service";
import {urls} from "../configs";

const genreService = {
	//https://api.themoviedb.org/3/genre/movie/list
	getAll: () => axiosService.get(urls.genres)
};

export {genreService};