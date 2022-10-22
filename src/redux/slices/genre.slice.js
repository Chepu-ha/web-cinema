import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genreService} from "../../services";

const initialState = {
	genres: [],
	loading: false,
	error: null
};

const getAll = createAsyncThunk(
	"genreSlice/getAll",
	async (_, {rejectedWithValue}) => {
		try {
			const {data} = await genreService.getAll();
			return data.genres;
		} catch (e) {
			return rejectedWithValue(e.response.data);
		}
	}
);

const genreSlice = createSlice({
	name: "genreSlice",
	initialState,
	reducers: {},
	extraReducers: builder =>
		builder
		.addCase(getAll.fulfilled, (state, action) => {
			state.genres = action.payload;
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

const {reducer: genreReducer, actions} = genreSlice;

const genreActions = {
	getAll
};

export {genreReducer, genreActions};