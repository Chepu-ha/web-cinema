import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

import BadgeStyle from "./BageStyle.module.css";

export function GenreBadge({movie}) {
	const {genres} = useSelector(state => state.genreReducer);
	const {genre_ids: movieGenresIds} = movie;
	const [currentGenres, setCurrentGenres] = useState([]);

	useEffect(() => {
		setCurrentGenres(genres.filter(genre => movieGenresIds.indexOf(genre.id) !== -1));
	}, [genres, movieGenresIds]);

	return (
		<div className={BadgeStyle.Badge}>
			{currentGenres.map((genre) => <div key={genre.id}>{genre.name}</div>)}
		</div>
	);
}