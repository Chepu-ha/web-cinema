import "./App.css";
import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {MovieDetailsPage, MoviesListPage} from "./pages";
import {createContext, useState} from "react";
import {MoviesList} from "./components";

export const ThemeContext = createContext(null);


function App() {
	const [theme, setTheme] = useState("light");

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
	};
	return (
		<ThemeContext.Provider value={{theme, toggleTheme}}>
			<div id={theme}>
				<Routes>
					<Route path={"/"} element={<MainLayout/>}>
						<Route index element={<Navigate to={"moviesListPage"}/>}/>
						<Route path={"moviesListPage"} element={<MoviesListPage/>}>
							<Route index element={<Navigate to={"1"}/>}/>
							<Route path={":page"} element={<MoviesList/>}/>
							<Route path={":page/:genre/:search"} element={<MoviesList/>}/>
							<Route path={":page/:genre"} element={<MoviesList/>}/>
						</Route>
						{/*<Route path={"moviesListPage/:page/:search"} element={<MoviesListPage/>}/>*/}
						{/*<Route path={"moviesListPage/:page/:genre"} element={<MoviesListPage/>}/>*/}
						<Route path={"movieDetailsPage/:id"} element={<MovieDetailsPage/>}/>
					</Route>
				</Routes>
			</div>
		</ThemeContext.Provider>
	);
}

export default App;
