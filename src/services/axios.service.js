import axios from "axios";

import {authService} from "./auth.service";
import {baseURL} from "../configs";

const axiosService = axios.create({baseURL});

axiosService.interceptors.request.use((config) => {

	authService.setToken("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjkxNjJjN2FlYmM1ZTFhYWE3MTRlZWUxNTgyZTMwMCIsInN1YiI6IjYzNGFkYjNhNTAxY2YyMDA3YTFmMDY2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6agJMV68v8P_WnGGZFcTnybSxBqKM2RaHUOZHEE_51g");
	const accessToken = authService.getAccessToken();

	if (accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`;
	}
	return config;
});

export {axiosService};

