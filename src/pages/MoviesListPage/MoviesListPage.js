import {GenresFilterList, Pagination, Search} from "../../components";
import {Outlet} from "react-router-dom";

export function MoviesListPage() {
	return (
		<div>
			<GenresFilterList/>
			<Pagination/>
			<Search/>
			<Outlet/>
		</div>
	);
}