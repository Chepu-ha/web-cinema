import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useParams} from "react-router-dom";

import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {movieActions} from "../../redux";

export function MoviesList() {
	const {movies, loading, error} = useSelector(state => state.movieReducer);
	const dispatch = useDispatch();

	const {page, genre, search} = useParams();

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
	}, [page, genre, dispatch, search]);

	return (
		<div className="cards">
			{error && <h1 className="error">Error</h1>}
			{loading && <div className="loading"><h1>Loading...</h1></div>}
			{!loading && !!movies.length ? movies.map((movie) => <MoviesListCard key={movie.id} movie={movie}/>) : <h1>Empty</h1>}
		</div>
	);
}