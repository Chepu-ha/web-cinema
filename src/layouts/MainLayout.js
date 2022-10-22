import {Outlet} from "react-router-dom";

import {Header} from "../components";

import LayoutStyle from "./MainLayout.module.css";

export function MainLayout() {
	return (
		<div className={LayoutStyle.Main}>
			<Header/>
			<Outlet/>
		</div>
	);
}