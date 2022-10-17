import GenreStyle from "./GenreFilter.module.css";

export function GenreFilter({genre}) {
	return (
		<div className={GenreStyle.Filter}>
			<div>{genre.name}</div>
		</div>
	);
}