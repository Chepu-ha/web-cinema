import {UserInfo} from "../UserInfo/UserInfo";
import UserStyle from "./Header.module.css"
import {ToggleTheme} from "../ToggleTheme/ToggleTheme";

export function Header() {
	return (
		<div className={UserStyle.Header}>
			<ToggleTheme/>
			<input type="text" placeholder={"Enter title"}/>
			<UserInfo/>
		</div>
	);
}