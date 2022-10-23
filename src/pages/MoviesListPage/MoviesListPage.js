import {Outlet} from "react-router-dom";

import {GenresFilterList, Pagination, Search, ToTheBottom} from "../../components";

export function MoviesListPage() {
	return (
		<div className="moviesListPage">
			<ToTheBottom/>
			<GenresFilterList/>
			<Search/>
			<Outlet/>
			<Pagination/>
		</div>
	);
}