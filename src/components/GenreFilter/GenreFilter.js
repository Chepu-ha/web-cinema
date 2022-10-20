import {useDispatch, useSelector} from "react-redux";

import GenreStyle from "./GenreFilter.module.css";
import {movieActions} from "../../redux";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";

export function GenreFilter({genre}) {
	const {id, name} = genre;
	const {currentGenre} = useSelector(state => state.movieReducer);
	const [query, setQuery] = useSearchParams({page: "1", with_genres: genre.name});
	const dispatch = useDispatch();

	useEffect(() => {
		setQuery();
	}, []);

	const genreFilter = () => {
		dispatch(movieActions.setCurrentGenre({name, id}));
		setQuery(query => ({page: query.get("page"), with_genres: name}));
	};

	return (
		<div onClick={() => genreFilter()}
			  className={currentGenre.name === name ? GenreStyle.FilterActive : GenreStyle.Filter}>
			<div>{name}</div>
		</div>
	);
}