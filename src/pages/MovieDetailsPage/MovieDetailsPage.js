import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {postersURL} from "../../configs";
import {movieActions} from "../../redux";

export function MovieDetailsPage() {
	const dispatch = useDispatch();
	const {id} = useParams();
	const pathname = localStorage.getItem("pathname");

	useEffect(() => {
		dispatch(movieActions.getMovieById(id));
	}, [dispatch, id]);

	const {currentMovie, error} = useSelector(state => state.movieReducer);

	const {
		poster_path,
		title,
		tagline,
		vote_average,
		budget,
		release_date,
		production_countries,
		genres,
		original_language,
		overview,
		runtime,
	} = currentMovie;

	return (
		<div>
			<div><Link to={pathname}>List</Link></div>
			{!error && title &&
				<div>
					<div className={"title"}>
						<h1>{title}</h1>
					</div>
					<div>
						<div className={"poster"}>
							{poster_path && <img src={postersURL + poster_path} alt={title}/>}
						</div>
						<div className={"info"}>
							<div className={"rating"}><span>Rating:</span><span>{vote_average}/10</span></div>
							<div className={"budget"}><span>Budget:</span><span>{budget}$</span></div>
							<div className={"tagline"}><span>Tagline</span><span>{tagline}</span></div>
							<div className={"date"}><span>Release date:</span><span>{release_date}</span></div>
							<div className={"countries"}>
								<span>Production countries:</span>{production_countries && production_countries.map((country, i) =>
								<span key={i}>{country.name}</span>)}</div>
							<div className={"genres"}><span>Genres:</span>{genres && genres.map((genre) => <span
								key={genre.id}>{genre.name}</span>)}</div>
							<div className={"language"}><span>Original language:</span><span>{original_language}</span></div>
							<div className={"time"}><span>Time:</span><span>{runtime}</span></div>
						</div>
					</div>
					<div>
						<h2>Overview</h2>
						<div>{overview}</div>
					</div>
				</div>
			}
			{error && <h1>Error 404</h1>}
		</div>
	);
}