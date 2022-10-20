import CardStyle from "./MovieCard.module.css";
import {PosterPreview} from "../PostserPreview/PosterPreview";
import {MovieInfo} from "../MovieInfo/MovieInfo";
import {StarsRating} from "../StarsRating/StarsRating";
import {GenreBadge} from "../GenreBadge/GenreBadge";

export function MoviesListCard({movie}) {
	return (
		<div className={CardStyle.Card}>
			<GenreBadge movie={movie}/>
			<PosterPreview movie={movie}/>
			<MovieInfo movie={movie}/>
			<StarsRating rating={movie.vote_average}/>
		</div>
	);
}