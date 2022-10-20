import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";

import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {movieActions} from "../../redux";

import CardsStyle from "./MovieList.module.css";

export function MoviesList() {
	const {currentQuery, currentGenre, filterMovies, movies, loading, error} = useSelector(state => state.movieReducer);
	const [query, setQuery] = useSearchParams({page: "1"});
	const dispatch = useDispatch();

	useEffect(() => {
		console.log("movie?page=");
		dispatch(movieActions.getAll(query.get("page")));
	}, []);

	useEffect(() => {
		// if (!currentGenre.id) {
		// 	console.log("movie?page=");
		// 	dispatch(movieActions.getAll(query.get("page")));
		// }
		if (currentQuery) {
			console.log("movie?query=spider");
			dispatch(movieActions.searchMovie(currentQuery));
		}
		if (currentGenre) {
			dispatch(movieActions.filterByGenre({page: query.get("page"), currentGenreId: currentGenre.id}));
			console.log("movie?page=1&with_genres=");
		}

		// if (currentGenre.id) {
		// 	dispatch(movieActions.filterByGenre({page: query.get("page"), currentGenreId: currentGenre.id}));
		// 	console.log("movie?page=1&with_genres=");
		// }
		// if (currentQuery) {
		// 	console.log("movie?query=spider");
		// 	dispatch(movieActions.searchMovie(currentQuery));
		// }
		// else {
		// 	console.log("movie?page=");
		// 	dispatch(movieActions.getAll(query.get("page")));
		// }
	}, [currentGenre.id, currentQuery, dispatch, query]);

	// useEffect(()=>{
	// 	if(currentQuery) {
	//
	// 		console.log("movie?query=spider");
	// 		dispatch(movieActions.getAll(query.get("page")));
	//
	// 	}
	// }, [currentQuery])


	return (
		<div className={CardsStyle.Cards}>
			{loading && <h1>Loading...</h1>}
			{error && <h1>Error</h1>}
			{movies.map((movie) => <MoviesListCard key={movie.id} movie={movie}/>)}
		</div>
	);
}