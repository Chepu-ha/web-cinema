import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export function GenreFilter({genre}) {
	const {id: genreId, name} = genre;
	const {genre: paramsGenre} = useParams();
	const [isActive, setIsActive] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		if (paramsGenre === name) {
			setIsActive(true);
		} else {
			setIsActive(false);
		}
	}, [name, paramsGenre]);

	const genreFilter = () => {
		if (isActive) {
			localStorage.setItem("genreId", "");
			localStorage.setItem("genreName", "");
			navigate(`/moviesListPage/1`);
		} else {
			localStorage.setItem("genreId", `${genreId}`);
			localStorage.setItem("genreName", `${name}`);
			navigate(`/moviesListPage/1/${name}`);
		}
	};

	return (
		<button  onClick={() => genreFilter()}
				  className={isActive ? "filter-current" : "filter"}
		>
			{name}
		</button>
	);
}