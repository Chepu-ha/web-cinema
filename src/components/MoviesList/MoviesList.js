import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useParams, useSearchParams} from "react-router-dom";

import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {movieActions} from "../../redux";

import CardsStyle from "./MovieList.module.css";

export function MoviesList() {
	const {movies, loading, error} = useSelector(state => state.movieReducer);
	const [query, setQuery] = useSearchParams({page: "1"});
	const dispatch = useDispatch();

	const {currentQuery} = useSelector(state => state.movieReducer);

	const params = useParams();
	const {page, genre, search} = params;


	useEffect(() => {
		dispatch(movieActions.setCurrentMovie({}));
		const genreId = localStorage.getItem("genreId");
		if (page && genre !== "searchMode") {
			dispatch(movieActions.filterByGenre({page, currentGenreId: genreId.toString()}));
		} else if (search) {
			dispatch(movieActions.searchMovie({page, query: search}));
		} else {
			dispatch(movieActions.getAll(page));
		}

		console.log(`movie?page=${query.get("page")}`, "MovieList1");
	}, [page, genre, query, dispatch, params.page, search]);

	return (
		<div className={CardsStyle.Cards}>
			{loading && <h1>Loading...</h1>}
			{error && <h1>Error</h1>}
			{movies.map((movie) => <MoviesListCard key={movie.id} movie={movie}/>)}
		</div>
	);
}