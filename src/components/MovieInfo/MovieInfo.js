export function MovieInfo({movie}) {

	return (
		<div>
			<div>{movie.title}</div>
			<div>
				{movie.release_date.split("-", 1)}
			</div>
			<div>
				{movie.overview}
			</div>
		</div>
	);
}