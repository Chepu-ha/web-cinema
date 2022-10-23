import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {genreActions} from "../../redux";
import {GenreFilter} from "../GenreFilter/GenreFilter";

export function GenresFilterList() {
	const dispatch = useDispatch();
	const {genres, loading, error} = useSelector(state => state.genreReducer);

	useEffect(() => {
		dispatch(genreActions.getAll());
	}, [dispatch]);

	return (
		<div className="filters">
			{loading && <h1>Loading...</h1>}
			{error && <h1>Error</h1>}
			{genres.map((genre) => <GenreFilter key={genre.id} genre={genre}/>)}
		</div>
	);
}