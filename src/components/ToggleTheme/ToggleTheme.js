import {ThemeContext} from "../../App";

import {FaSun} from "react-icons/fa";
import {FaMoon} from "react-icons/fa";

export function ToggleTheme() {

	return (
		<div className="weather">
			<ThemeContext.Consumer>
				{(value) => (
					value.theme === "dark" ?
						<FaSun size="40px" className="sun" onClick={() => value.toggleTheme()}/> :
						<FaMoon size="40px" className="moon" onClick={() => value.toggleTheme()}/>
				)}
			</ThemeContext.Consumer>
		</div>
	);
}