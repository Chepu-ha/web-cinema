import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";

import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {movieActions} from "../../redux";

import CardsStyle from "./MovieList.module.css";

export function MoviesList() {
	const {currentGenre, filterMovies, movies, loading, error} = useSelector(state => state.movieReducer);
	const [query, setQuery] = useSearchParams({page: "1"});
	const dispatch = useDispatch();

	useEffect(() => {
		if (currentGenre) {
			dispatch(movieActions.filterByGenre({page: query.get("page"), currentGenreId: currentGenre.id}));
		} else {
			dispatch(movieActions.getAll(query.get("page")));
		}
	}, [currentGenre, dispatch, query]);

	return (
		<div className={CardsStyle.Cards}>
			{loading && <h1>Loading...</h1>}
			{error && <h1>Error</h1>}
			{
				currentGenre ? filterMovies.map((movie) => <MoviesListCard key={movie.id} movie={movie}/>) :
					movies.map((movie) => <MoviesListCard key={movie.id} movie={movie}/>)
			}
		</div>
	);
}