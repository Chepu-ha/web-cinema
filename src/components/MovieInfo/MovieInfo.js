import {Link} from "react-router-dom";

export function MovieInfo({movie}) {
	const {title, overview, release_date: date} = movie;

	return (
		<div className="info">
			{title ? <h3><Link to={`/movieDetailsPage/${movie.id}`}>{title}</Link></h3> : <div></div>}
			{date ? <div>{date.split("-", 1)}</div> : <div></div>}
			{overview ? <div>{overview}</div> : <div></div>}
		</div>
	);
}