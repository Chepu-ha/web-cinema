import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams, useSearchParams} from "react-router-dom";

import {movieActions} from "../../redux";
import {useForm} from "react-hook-form";

export function Search() {
	const {currentQuery} = useSelector(state => state.movieReducer);
	const [query, setQuery] = useSearchParams({page: "1", query: currentQuery});

	const dispatch = useDispatch();
	const {register, handleSubmit, reset, formState: {isValid}} = useForm({mode: "all"});

	const search = (data) => {
		const {searchInput} = data;
		setQuery({page: query.get("page"), query: searchInput});
		dispatch(movieActions.setCurrentQuery(searchInput));
		dispatch(movieActions.setCurrentGenre({}));
		dispatch(movieActions.searchMovie({page: query.get("page"), query: searchInput}));
		reset();

		console.log(`movie?query=${searchInput}`, "Search");
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