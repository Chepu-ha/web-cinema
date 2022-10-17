import PosterStyle from "./Poster.module.css";
import {postersURL} from "../../configs";

export function PosterPreview({movie}) {
	const {poster_path: posterPath, title} = movie;

	return (
		<div className={posterPath ? PosterStyle.Poster : PosterStyle.ErrorPoster}>
			{posterPath ? <img src={postersURL + posterPath} alt={title}/> : null}
		</div>
	);
}