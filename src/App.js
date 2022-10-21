import "./App.css";
import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {MovieDetailsPage, MoviesListPage} from "./pages";
import {createContext, useState} from "react";

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
						<Route index element={<Navigate to={"/moviesList"}/>}/>
						<Route path={"moviesList"} element={<MoviesListPage/>}/>
						<Route path={"moviesList/:id"} element={<MovieDetailsPage/>}/>
					</Route>
				</Routes>
			</div>
		</ThemeContext.Provider>
	);
}

export default App;
