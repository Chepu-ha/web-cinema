import {postersURL} from "../../configs";
import {useSelector} from "react-redux";

import PosterStyle from "./Poster.module.css";

export function PosterPreview({movie}) {
	const {poster_path: posterPath, title} = movie;
	const {loading, error} = useSelector(state => state.movieReducer);

	return (
		<div className={posterPath ? PosterStyle.Poster : PosterStyle.ErrorPoster}>
			{posterPath && loading ? <div className={PosterStyle.LoadingPoster}></div> :
				<img src={postersURL + posterPath} alt={title}/>}
		</div>
	);
}