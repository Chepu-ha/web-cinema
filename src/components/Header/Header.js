import {UserInfo} from "../UserInfo/UserInfo";
import {ToggleTheme} from "../ToggleTheme/ToggleTheme";
import {Search} from "../Search/Search";

import UserStyle from "./Header.module.css"

export function Header() {
	return (
		<div className={UserStyle.Header}>
			<ToggleTheme/>
			<Search/>
			<UserInfo/>
		</div>
	);
}