import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";

const initialState = {
	movies: [],
	currentMovie: {},
	currentGenre: {},
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

const searchMovie = createAsyncThunk(
	"movieSlice/searchMovie",
	async ({page, query}, {rejectedWithValue}) => {
		try {
			const {data} = await movieService.search(page, query);
			return data.results;
		} catch (e) {
			return rejectedWithValue(e.response.data);
		}
	}
);

const getMovieById = createAsyncThunk(
	"movieSlice/getMovieById",
	async (id, {rejectedWithValue}) => {
		try {
			const {data} = await movieService.getById(String(id));
			return data;
		} catch (e) {
			return rejectedWithValue(e.response.data);
		}
	}
);

const movieSlice = createSlice({
	name: "movieSlice",
	initialState,
	reducers: {
		setCurrentGenre: (state, action) => {
			state.currentGenre = action.payload;
		},
		setCurrentQuery: (state, action) => {
			state.currentQuery = action.payload;
		},
		setCurrentMovie: (state, action) => {
			state.currentMovie = action.payload;
		}
	},
	extraReducers: builder =>
		builder
		.addCase(getAll.fulfilled, (state, action) => {
			state.movies = action.payload;
			state.loading = false;
			state.error = false;
		})
		.addCase(getAll.rejected, (state, action) => {
			state.error = action.payload;
			state.loading = false;
		})
		.addCase(getAll.pending, (state, action) => {
			state.loading = true;
		})
		.addCase(filterByGenre.fulfilled, (state, action) => {
			state.movies = action.payload;

		})
		.addCase(searchMovie.fulfilled, (state, action) => {
			state.movies = action.payload;
		})
		.addCase(getMovieById.fulfilled, (state, action) => {
			state.currentMovie = action.payload;
		})
		.addCase(getMovieById.rejected, (state, action) => {
			state.error = !action.payload;
		})
});

const {reducer: movieReducer, actions: {setCurrentGenre, setCurrentQuery, setCurrentMovie}} = movieSlice;

const movieActions = {
	getAll,
	filterByGenre,
	searchMovie,
	getMovieById,
	setCurrentGenre,
	setCurrentQuery,
	setCurrentMovie
};

export {movieReducer, movieActions};