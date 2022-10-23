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
		original_title,
		tagline,
		vote_average,
		budget,
		release_date,
		production_countries,
		genres,
		original_language,
		overview,
		runtime,
		adult,
		status
	} = currentMovie;

	return (
		<div className="movieDetailsPage">
			<Link to={pathname}>Back to list</Link>
			{!error && title &&
				<div>
					<div className="title">
						<h1>{title}</h1>
					</div>
					<div className="body">
						<div className="poster">
							{poster_path ? <img src={postersURL + poster_path} alt={title}/> : <div></div>}
						</div>
						<div className="info">
							<div>Rating:</div>
							<div>{vote_average}/10</div>
							<div>Original title:</div>
							<div>{original_title}</div>
							<div>Budget:</div>
							<div>{budget}$</div>
							<div>Tagline:</div>
							<div>{tagline}</div>
							<div>Release date:</div>
							<div>{release_date}</div>
							<div>Production countries:</div>
							<div>
								{production_countries && production_countries.map((country, i) =>
									<div key={i}>{country.name}</div>)}
							</div>
							<div>Genres:</div>
							<div>{genres && genres.map((genre) =>
								<div key={genre.id}>{genre.name}</div>)}
							</div>
							<div>Original language:</div>
							<div>{original_language}</div>
							<div>Time:</div>
							<div>{runtime} min</div>
							<div>Adult:</div>
							<div>{adult ? "Yes" : "No"}</div>
							<div>Status:</div>
							<div>{status}</div>
						</div>
						<div className="overview">
							<h2>Overview</h2>
							<div>{overview}</div>
						</div>
					</div>
				</div>
			}
			{error && <h1>Error 404</h1>}
		</div>
	);
}