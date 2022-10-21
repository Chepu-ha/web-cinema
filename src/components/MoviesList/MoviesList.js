import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";

import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {movieActions} from "../../redux";

import CardsStyle from "./MovieList.module.css";

export function MoviesList() {
	const {movies, loading, error} = useSelector(state => state.movieReducer);
	const [query, setQuery] = useSearchParams({page: "1"});
	const dispatch = useDispatch();

	const {currentQuery} = useSelector(state => state.movieReducer);

	useEffect(() => {
			console.log(currentQuery);
			setQuery({page: query.get("page")});
			dispatch(movieActions.getAll(query.get("page")));
			dispatch(movieActions.setCurrentMovie({}));


		console.log(`movie?page=${query.get("page")}`, "MovieList1");
	}, []);

	return (
		<div className={CardsStyle.Cards}>
			{loading && <h1>Loading...</h1>}
			{error && <h1>Error</h1>}
			{movies.map((movie) => <MoviesListCard key={movie.id} movie={movie}/>)}
		</div>
	);
}