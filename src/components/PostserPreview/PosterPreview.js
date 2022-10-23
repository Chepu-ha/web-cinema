import {useSelector} from "react-redux";

import {postersURL} from "../../configs";
import {useNavigate} from "react-router-dom";

export function PosterPreview({movie}) {
	const {poster_path: posterPath, title} = movie;
	const {loading, error} = useSelector(state => state.movieReducer);
	const navigate = useNavigate();

	const link = () => {
		navigate(`/movieDetailsPage/${movie.id}`);
	};

	return (
		<div onClick={() => link()} className={posterPath ? "poster" : "poster-error"}>
			{posterPath && loading ? <div className="poster-loading"></div> :
				<img src={postersURL + posterPath} alt={title}/>}
		</div>
	);
}