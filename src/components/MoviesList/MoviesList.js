import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";

import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {movieActions} from "../../redux";
import CardsStyle from "./MovieList.module.css";

export function MoviesList() {
	const dispatch = useDispatch();
	const {movies, loading, error} = useSelector(state => state.movieReducer);

	const [query, setQuery]= useSearchParams({page:"1"})
	useEffect(() => {
		dispatch(movieActions.getAll(query.get("page")));
	}, [dispatch, query]);

	return (
		<div className={CardsStyle.Cards}>
			{loading && <h1>Loading...</h1>}
			{error && <h1>Error</h1>}
			{movies.map((movie) => <MoviesListCard key={movie.id} movie={movie}/>)}
		</div>
	);
}