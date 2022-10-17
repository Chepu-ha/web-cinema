const baseURL = "https://api.themoviedb.org/3";
const postersURL = "https://image.tmdb.org/t/p/w500";
const accessToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjkxNjJjN2FlYmM1ZTFhYWE3MTRlZWUxNTgyZTMwMCIsInN1YiI6IjYzNGFkYjNhNTAxY2YyMDA3YTFmMDY2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6agJMV68v8P_WnGGZFcTnybSxBqKM2RaHUOZHEE_51g";

const urls = {
	movies: "/discover/movie",
	genres: "/genre/movie/list",
	posters: "/t/p/w500"
};

export {baseURL, postersURL, accessToken, urls};