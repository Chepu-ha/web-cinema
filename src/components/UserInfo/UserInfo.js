import {FaUserAlt} from "react-icons/fa";

export function UserInfo() {
	return (
		<div className="user">
			<FaUserAlt className="avatar" size="30px"/>
			<div className="name">John Smit</div>
		</div>
	);
}