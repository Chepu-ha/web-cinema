import "./App.css";
import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {MoviesListPage} from "./pages";

function App() {
	return (
		<div>
			<Routes>
				<Route path={"/"} element={<MainLayout/>}>
					<Route index element={<Navigate to={"/moviesList"}/>}/>
					<Route path={"moviesList"} element={<MoviesListPage/>}/>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
