import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

import BadgeStyle from "./BageStyle.module.css";

export function GenreBadge({movie}) {
	const {genre_ids: movieGenresIds} = movie;
	const {genres} = useSelector(state => state.genreReducer);
	const [currentGenres, setCurrentGenres] = useState([]);
	const currentGenre = localStorage.getItem("genreName");

	useEffect(() => {
		if (currentGenre) {
			setCurrentGenres(genres.filter(genre => movieGenresIds.indexOf(genre.id) !== -1 && genre.name === currentGenre));
		} else {
			setCurrentGenres(genres.filter(genre => movieGenresIds.indexOf(genre.id) !== -1));
		}
	}, [currentGenre, genres, movieGenresIds]);

	return (
		<div className={BadgeStyle.Badge}>
			{currentGenres.map((genre) => <div key={genre.id}>{genre.name}</div>)}
		</div>
	);
}