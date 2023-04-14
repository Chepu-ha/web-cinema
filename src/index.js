import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import "./index.scss";

import {setUpStore} from "./redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = setUpStore();

root.render(
	<Provider store={store}>
		<BrowserRouter basename="/Movie-catalog">
			<App/>
		</BrowserRouter>
	</Provider>
);

reportWebVitals();
