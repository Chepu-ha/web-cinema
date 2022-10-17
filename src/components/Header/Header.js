import {UserInfo} from "../UserInfo/UserInfo";
import UserStyle from "./Header.module.css"

export function Header() {
	return (
		<div className={UserStyle.Header}>
			<div><input type="text" placeholder={"Enter title"}/></div>
			<UserInfo/>
		</div>
	);
}