import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {movieReducer} from "./slices";
import {genreReducer} from "./slices/genre.slice";


const rootReducer = combineReducers({
	movieReducer,
	genreReducer
});

const setUpStore = () => configureStore({
	reducer: rootReducer,
});

export {setUpStore};