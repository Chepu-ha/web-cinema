import UserStyle from "./UserInfo.module.css";

export function UserInfo() {
	return (
		<div className={UserStyle.User}>
			<div className={UserStyle.Circle}></div>
			<div className={UserStyle.Name}>John Smit</div>
		</div>
	);
}