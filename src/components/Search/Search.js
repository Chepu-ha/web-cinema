import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {movieActions} from "../../redux";

export function Search() {
	const {currentQuery} = useSelector(state => state.movieReducer);
	const [query, setQuery] = useSearchParams({query: currentQuery});
	const [title, setTitle] = useState("");

	const dispatch = useDispatch();

	useEffect(() => {
		setQuery({query: currentQuery});
	}, [currentQuery]);

	const change = (e) => {
		setTitle(e.target.value);
	};

	const search = () => {
		setQuery(query => ({query: title}));
		dispatch(movieActions.searchMovie(title.toLowerCase()));
		console.log(`movie?query=${title}`, "Search");
	};

	return (
		<div>
			<input onChange={(e) => change(e)} type="text"
					 placeholder={"Enter title"}/>
			<button disabled={!title} onClick={() => search()}>Submit</button>
		</div>
	);
}