import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useSearchParams} from "react-router-dom";

import {movieActions} from "../../redux";
import {useForm} from "react-hook-form";

export function Search() {
	const navigate = useNavigate();


	const {currentQuery} = useSelector(state => state.movieReducer);
	const [query, setQuery] = useSearchParams({page: "1", query: currentQuery});

	const dispatch = useDispatch();
	const {register, handleSubmit, reset, formState: {isValid}} = useForm({mode: "all"});

	const search = (data) => {
		const {searchInput} = data;
		navigate(`1/searchMode/${searchInput}`)

		dispatch(movieActions.setCurrentQuery(searchInput));
		// setQuery({page: query.get("page"), query: searchInput});
		// dispatch(movieActions.setCurrentGenre({}));
		// dispatch(movieActions.searchMovie({page: query.get("page"), query: searchInput}));
		// reset();
		//
		// console.log(`movie?query=${searchInput}`, "Search");
	};

	return (
		<form onSubmit={handleSubmit(search)}>
			<input type="text"
					 placeholder={"Enter title"}
					 {...register("searchInput", {required: true, minLength: {value: 1}})}
			/>
			<button disabled={!isValid}>Submit</button>
		</form>
	);
}