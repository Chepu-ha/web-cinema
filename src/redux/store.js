import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {genreReducer, movieReducer} from "./slices";

const rootReducer = combineReducers({
	movieReducer,
	genreReducer
});

const setUpStore = () => configureStore({
	reducer: rootReducer,
});

export {setUpStore};