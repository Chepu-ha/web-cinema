import {UserInfo} from "../UserInfo/UserInfo";
import {ToggleTheme} from "../ToggleTheme/ToggleTheme";

import UserStyle from "./Header.module.css"

export function Header() {
	return (
		<div className={UserStyle.Header}>
			<ToggleTheme/>
			<UserInfo/>
		</div>
	);
}