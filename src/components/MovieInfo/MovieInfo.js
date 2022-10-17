export function MovieInfo({movie}) {
	const {title, overview, release_date: date} = movie;

	return (
		<div>
			{title && <div>{title}</div>}
			{date && <div>{date.split("-", 1)}</div>}
			{overview && <div>{overview}</div>}
		</div>
	);
}