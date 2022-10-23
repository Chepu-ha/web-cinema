import {Outlet} from "react-router-dom";

import {Header} from "../components";

export function MainLayout() {
	return (
		<div className="mainLayout">
			<Header/>
			<Outlet/>
		</div>
	);
}