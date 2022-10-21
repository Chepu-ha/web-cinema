import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {useState} from "react";

import {movieActions} from "../../redux";

export function Search() {
	const {currentQuery} = useSelector(state => state.movieReducer);
	const [query, setQuery] = useSearchParams({page: "1", query: currentQuery});
	const [title, setTitle] = useState("");

	const dispatch = useDispatch();

	const change = (e) => {
		setTitle(e.target.value);
	};

	const search = () => {
		setQuery({page: query.get("page"), query: title});
		dispatch(movieActions.setCurrentQuery(title));
		dispatch(movieActions.setCurrentGenre({}));
		dispatch(movieActions.searchMovie({page: query.get("page"), query: title}));

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