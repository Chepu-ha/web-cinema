import {Rating} from "react-simple-star-rating";

import StarsStyle from "./StarsStyle.module.css";

export function StarsRating({rating}) {
	return (
		<div className={StarsStyle.Stars}>
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