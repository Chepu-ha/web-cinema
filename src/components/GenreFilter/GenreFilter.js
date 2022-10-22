import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import GenreStyle from "./GenreFilter.module.css";

export function GenreFilter({genre}) {
	const {id: genreId, name} = genre;
	const {genre: paramsGenre} = useParams();
	const navigate = useNavigate();
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		if (paramsGenre === name) {
			setIsActive(true);
		} else {
			setIsActive(false);
		}
	}, [name, paramsGenre]);

	const genreFilter = () => {
		if (isActive) {
			navigate(`/moviesListPage`);
		} else {
			localStorage.setItem("genreId", `${genreId}`);
			localStorage.setItem("genreName", `${name}`);
			navigate(`/moviesListPage/1/${name}`);
		}
	};

	return (
		<button  onClick={() => genreFilter()}
				  className={isActive ? GenreStyle.FilterCurrent : GenreStyle.Filter}
		>
			{name}
		</button>
	);
}