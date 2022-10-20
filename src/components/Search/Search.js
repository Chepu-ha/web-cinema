import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {movieActions} from "../../redux";

export function Search() {
	const {currentQuery, currentGenre} = useSelector(state => state.movieReducer);
	const [query, setQuery] = useSearchParams({query: currentQuery});
	const dispatch = useDispatch();
	const [title, setTitle] = useState("");

	useEffect(() => {
		setQuery({query: currentQuery});
		// dispatch(movieActions.searchMovie(currentQuery));
	}, [currentQuery]);

	const change = (e) => {
		setTitle(e.target.value);
	};

	const search = () => {
		dispatch(movieActions.setCurrentQuery(title.toLowerCase()));
		setQuery(query => ({query: currentQuery}));
	};

	return (
		<div>
			<input onChange={(e) => change(e)} type="text"
					 placeholder={"Enter title"}/>
			<button disabled={!title} onClick={() => search()}>Submit</button>
		</div>
	);
}