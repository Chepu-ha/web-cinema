import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams, useSearchParams} from "react-router-dom";

import GenreStyle from "./GenreFilter.module.css";

export function GenreFilter({genre}) {
	const {id: genreId, name} = genre;

	const params = useParams();
	const navigate = useNavigate();

	const {currentGenre} = useSelector(state => state.movieReducer);
	const [query, setQuery] = useSearchParams({page: "1", with_genres: genre.name});
	const dispatch = useDispatch();

	const genreFilter = () => {
		localStorage.setItem("genreId", `${genreId}`);
		localStorage.setItem("genreName", `${name}`);
		navigate(`/moviesListPage/1/${name}`);
	};

	return (
		<button disabled={params.genre === name} onClick={() => genreFilter()}
				  className={params.genre === name ? GenreStyle.FilterCurrent : GenreStyle.Filter}>
			<div>{name}</div>
		</button>
	);
}