import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";

const initialState = {
	movies: [],
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

const movieSlice = createSlice({
	name: "movieSlice",
	initialState,
	reducers: {},
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
});

// eslint-disable-next-line no-empty-pattern
const {reducer: movieReducer, actions} = movieSlice;

const movieActions = {
	getAll
};

export {movieReducer, movieActions};