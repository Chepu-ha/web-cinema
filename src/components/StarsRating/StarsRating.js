import {Rating} from "react-simple-star-rating";

export function StarsRating({rating}) {
	return (
		<div className="rating">
			<Rating
				initialValue={rating}
				iconsCount={10}
				readonly={true}
				allowFraction={true}
				fillColor={"#f1a545"}
				emptyColor={"#cccccc"}
				size={35}
			/>
		</div>
	);
}