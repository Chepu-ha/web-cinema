import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams, useSearchParams} from "react-router-dom";

import GenreStyle from "./GenreFilter.module.css";
import {useEffect, useState} from "react";

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