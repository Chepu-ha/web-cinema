import {GenresFilterList, MoviesList, Pagination} from "../../components";
import {Outlet} from "react-router-dom";

export function MoviesListPage() {
	return (
		<div>
			<Outlet/>
			<GenresFilterList/>
			<Pagination/>
			<MoviesList/>
		</div>
	);
}