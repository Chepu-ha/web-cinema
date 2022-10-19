import {GenresFilterList, MoviesList, Pagination} from "../../components";

export function MoviesListPage() {
	return (
		<div>
			<GenresFilterList/>
			<Pagination/>
			<MoviesList/>
		</div>
	);
}