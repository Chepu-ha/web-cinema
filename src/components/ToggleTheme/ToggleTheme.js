import {ThemeContext} from "../../App";

export function ToggleTheme() {

	return (
		<div>
			<ThemeContext.Consumer>
				{(value) => (
					<button onClick={() => value.toggleTheme()}>Change theme</button>
				)}
			</ThemeContext.Consumer>
		</div>
	);
}