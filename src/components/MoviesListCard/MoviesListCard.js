import CardStyle from "./MovieCard.module.css";
import {PosterPreview} from "../PostserPreview/PosterPreview";
import {MovieInfo} from "../MovieInfo/MovieInfo";
import {StarsRating} from "../StarsRating/StarsRating";
import {GenreBadge} from "../GenreBadge/GenreBadge";
import {Link, useLocation} from "react-router-dom";

export function MoviesListCard({movie}) {

	const {pathname}= useLocation();
	localStorage.setItem("pathname", pathname)
	return (

		<div className={CardStyle.Card}>
			<GenreBadge movie={movie}/>
			<Link to={`/movieDetailsPage/${movie.id}`}>
				<PosterPreview movie={movie}/>
				<MovieInfo movie={movie}/>
			</Link>
			<StarsRating rating={movie.vote_average}/>
		</div>
	);
}