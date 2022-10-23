import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useParams} from "react-router-dom";

import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {movieActions} from "../../redux";

export function MoviesList() {
	const {movies, loading, error} = useSelector(state => state.movieReducer);
	const dispatch = useDispatch();

	const params = useParams();
	const {page, genre, search} = params;

	// useEffect(() => {
	// 	localStorage.setItem("genreId", "");
	// 	localStorage.setItem("genreName", "");
	// }, []);

	useEffect(() => {
		dispatch(movieActions.setCurrentMovie({}));
		const genreId = localStorage.getItem("genreId");
		if (page && genre && genre !== "searchMode") {
			dispatch(movieActions.filterByGenre({page, currentGenreId: genreId}));
		} else if (search) {
			dispatch(movieActions.searchMovie({page, query: search}));
		} else {
			dispatch(movieActions.getAll(page));
		}
	}, [page, genre, dispatch, params.page, search]);

	return (
		<div className="cards">
			{loading && <h1>Loading...</h1>}
			{error && <h1>Error</h1>}
			{!loading && movies.map((movie) => <MoviesListCard key={movie.id} movie={movie}/>)}
		</div>
	);
}