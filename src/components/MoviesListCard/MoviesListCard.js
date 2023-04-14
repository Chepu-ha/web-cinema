import {useLocation} from "react-router-dom";

import {PosterPreview} from "../PostserPreview/PosterPreview";
import {MovieInfo} from "../MovieInfo/MovieInfo";
import {StarsRating} from "../StarsRating/StarsRating";
import {GenreBadge} from "../GenreBadge/GenreBadge";

export function MoviesListCard({movie}) {
	const {pathname} = useLocation();
	localStorage.setItem("pathname", pathname);

	return (
		<div className="card">
			<GenreBadge movie={movie}/>
			<div>
				<PosterPreview movie={movie}/>
				<MovieInfo movie={movie}/>
			</div>
			<StarsRating rating={movie.vote_average}/>
		</div>
	);
}
