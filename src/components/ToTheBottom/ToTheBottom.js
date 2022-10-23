import {FaArrowDown} from "react-icons/fa";

export function ToTheBottom() {
	const down = () => {
		window.scrollTo({top: 100000000000, left: 0, behavior: "smooth"});
	};

	return (
		<FaArrowDown onClick={down} className="down" size="40px"/>
	);
}