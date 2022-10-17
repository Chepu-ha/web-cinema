import {GenresFilterList, MoviesList, Pagination} from "../../components";

export function MoviesListPage() {
	return (
		<div>
			<Pagination/>
			<GenresFilterList/>
			<MoviesList/>
		</div>
	);
}