import {useDispatch, useSelector} from "react-redux";

import GenreStyle from "./GenreFilter.module.css";
import {movieActions} from "../../redux";
import {useSearchParams} from "react-router-dom";

export function GenreFilter({genre}) {
	const {id, name} = genre;
	const {currentGenre} = useSelector(state => state.movieReducer);
	const [query, setQuery] = useSearchParams({page: "1", with_genres: genre.name});
	const dispatch = useDispatch();

	const genreFilter = () => {
		setQuery(query => ({page: query.get("page"), with_genres: name}));
		dispatch(movieActions.filterByGenre({page: query.get("page"), currentGenreId: id}));
		dispatch(movieActions.setCurrentGenre(genre));

		console.log(`movie?page=${query.get("page")}&with_genres=${id}`, "GenreFilter");
	};

	return (
		<div onClick={() => genreFilter()}
			  className={currentGenre.name === name ? GenreStyle.FilterActive : GenreStyle.Filter}>
			<div>{name}</div>
		</div>
	);
}