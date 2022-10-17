import axios from "axios";

import {baseURL, accessToken} from "../configs";

const axiosService = axios.create({baseURL});

axiosService.interceptors.request.use((config) => {
	if (accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`;
	}
	return config;
});

export {axiosService};

