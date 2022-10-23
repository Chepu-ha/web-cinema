import {UserInfo} from "../UserInfo/UserInfo";
import {ToggleTheme} from "../ToggleTheme/ToggleTheme";

export function Header() {
	return (
		<div className="header">
			<ToggleTheme/>
			<UserInfo/>
		</div>
	);
}