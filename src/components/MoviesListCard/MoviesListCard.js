import CardStyle from "./MovieCard.module.css";
import {PosterPreview} from "../PostserPreview/PosterPreview";
import {MovieInfo} from "../MovieInfo/MovieInfo";
import {StarsRaiting} from "../StarsRaiting/StarsRaiting";

export function MoviesListCard({movie}) {
	return (
		<div className={CardStyle.Card}>
			<PosterPreview movie={movie}/>
			<MovieInfo movie={movie}/>
			<StarsRaiting/>
		</div>
	);
}