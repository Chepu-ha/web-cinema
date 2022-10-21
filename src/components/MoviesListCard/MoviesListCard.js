import CardStyle from "./MovieCard.module.css";
import {PosterPreview} from "../PostserPreview/PosterPreview";
import {MovieInfo} from "../MovieInfo/MovieInfo";
import {StarsRating} from "../StarsRating/StarsRating";
import {GenreBadge} from "../GenreBadge/GenreBadge";
import {Link} from "react-router-dom";

export function MoviesListCard({movie}) {

	return (
		<div className={CardStyle.Card}>
			<GenreBadge movie={movie}/>
			<Link to={`${movie.id}`}>
				<PosterPreview movie={movie}/>
				<MovieInfo movie={movie}/>
			</Link>
			<StarsRating rating={movie.vote_average}/>
		</div>
	);
}