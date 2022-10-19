import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";

const initialState = {
	movies: [],
	currentGenre: {},
	filterMovies: [],
	posters: [],
	loading: false,
	error: null
};

const getAll = createAsyncThunk(
	"movieSlice/getAll",
	async (page, {rejectedWithValue}) => {
		try {
			const {data} = await movieService.getAll(String(page));
			return data.results;
		} catch (e) {
			return rejectedWithValue(e.response.data);
		}
	}
);

const filterByGenre = createAsyncThunk(
	"movieSlice/filterByGenre",
	async ({page, currentGenreId}, {rejectedWithValue}) => {
		try {
			const {data} = await movieService.getByGenre(page, currentGenreId);
			return data.results;
		} catch (e) {
			return rejectedWithValue(e.response.data);
		}
	}
);

const movieSlice = createSlice({
	name: "movieSlice",
	initialState,
	reducers: {
		setCurrentGenreId: (state, action) => {
			state.currentGenre = action.payload;
		}
	},
	extraReducers: builder =>
		builder
		.addCase(getAll.fulfilled, (state, action) => {
			state.movies = action.payload;
			state.loading = false;
		})
		.addCase(getAll.rejected, (state, action) => {
			state.error = action.payload;
			state.loading = false;
		})
		.addCase(getAll.pending, (state, action) => {
			state.loading = true;
		})
		.addCase(filterByGenre.fulfilled, (state, action) => {
			state.filterMovies = action.payload;
		})
});

const {reducer: movieReducer, actions: {setCurrentGenreId}} = movieSlice;

const movieActions = {
	getAll,
	setCurrentGenreId,
	filterByGenre
};

export {movieReducer, movieActions};