import {useLocation, useNavigate, useParams, useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {movieActions} from "../../redux";

import paginationStyle from "./Pagination.module.css";

export function Pagination() {
	const params = useParams();
	const {page, genre} = params;
	const navigate = useNavigate();
	const dispatch = useDispatch();

	// const location = useLocation();
	// const {pathname} = location;

	const [query, setQuery] = useSearchParams({page: "1"});
	const {currentGenre, currentQuery} = useSelector(state => state.movieReducer);

	const [currentPage, setCurrentPage] = useState(page);
	const [allPages, setAllPages] = useState([]);

	const [floorCurrentPage, setFloorCurrentPage] = useState(0);
	const [ceilCurrentPage, setCeilCurrentPage] = useState(10);


	useEffect(() => {
		setCurrentPage(+page);
		setCeilCurrentPage(Math.ceil(currentPage / 10) * 10);

		if (currentPage % 10 === 0) {
			setFloorCurrentPage(Math.floor((currentPage - 1) / 10) * 10);
		} else {
			setFloorCurrentPage(Math.floor(currentPage / 10) * 10);
		}
	}, [currentPage, page]);

	useEffect(() => {
		//API can give only 500 pages
		for (let i = 1; i <= 500; i++) {
			setAllPages((allPages) => [...allPages, i]);
		}
	}, []);

	const nextPage = () => {
		if (page && genre) {
			navigate(`/moviesListPage/${currentPage + 1}/${genre}`);
		} else {
			navigate(`/moviesListPage/${currentPage + 1}`);
		}

		// if (currentGenre.id) {
		// 	setQuery(value => ({page: +value.get("page") + 1, with_genres: currentGenre.name}));
		// 	dispatch(movieActions.filterByGenre({page: +query.get("page") + 1, currentGenreId: currentGenre.id}));
		//
		// 	console.log(`movie?page=${+query.get("page") + 1}&with_genres=${currentGenre.name}`, "nextPageGenre");
		// } else if (currentQuery) {
		// 	setQuery(value => ({page: +value.get("page") + 1, query: currentQuery}));
		// 	dispatch(movieActions.searchMovie({page: +query.get("page") + 1, query: currentQuery}));
		//
		// 	console.log(`movie?page=${+query.get("page") + 1}&query=${currentQuery}`, "nextPageQuery");
		// } else {
		// 	setQuery(value => ({page: +value.get("page") + 1}));
		// 	dispatch(movieActions.getAll(+query.get("page") + 1));
		//
		// 	console.log(`movie?page=${+query.get("page") + 1}`, "nextPage");
		// }
	};

	const prevPage = () => {
		if (page && genre) {
			navigate(`/moviesListPage/${currentPage - 1}/${genre}`);
		} else {
			navigate(`/moviesListPage/${currentPage - 1}`);
		}

		// if (currentGenre.id) {
		// 	setQuery(value => ({page: value.get("page") - 1, with_genres: currentGenre.name}));
		// 	dispatch(movieActions.filterByGenre({page: query.get("page") - 1, currentGenreId: currentGenre.id}));
		//
		// 	console.log(`movie?page=${query.get("page")}&with_genres=${currentGenre.name}`, "prevPageGenre");
		// } else if (currentQuery) {
		// 	setQuery(value => ({page: value.get("page") - 1, query: currentQuery}));
		// 	dispatch(movieActions.searchMovie({page: query.get("page") - 1, query: currentQuery}));
		//
		// 	console.log(`movie?page=${query.get("page") - 1}&query=${currentQuery}`, "prevPageQuery");
		// } else {
		// 	setQuery(value => ({page: value.get("page") - 1}));
		// 	dispatch(movieActions.getAll(query.get("page") - 1));
		//
		// 	console.log(`movie?page=${query.get("page") - 1}`, "prevPage");
		// }
	};


	const selectPage = (selectedPage) => {
		if (page && genre) {
			navigate(`/moviesListPage/${selectedPage}/${genre}`);
		} else {
			navigate(`/moviesListPage/${selectedPage}`);
		}

		// if (currentGenre.id) {
		// 	setQuery({page: selectedPage, with_genres: currentGenre.name});
		// 	dispatch(movieActions.filterByGenre({page: selectedPage, currentGenreId: currentGenre.id}));
		//
		// 	console.log(`movie?page=${query.get("page")}&with_genres=${currentGenre.name}`, "selectPageGenre");
		// } else if (currentQuery) {
		// 	setQuery({page: selectedPage, query: currentQuery});
		// 	dispatch(movieActions.searchMovie({page: selectedPage, query: currentQuery}));
		//
		// 	console.log(`movie?page=${selectedPage}&query=${currentQuery}`, "selectPageQuery");
		// } else {
		// 	setQuery({page: selectedPage});
		// 	dispatch(movieActions.getAll(selectedPage));
		//
		// 	console.log(`movie?page=${selectedPage}`, "selectPage");
		// }
	};

	return (
		<div className={paginationStyle.Pagination}>
			<button disabled={+currentPage === 1} onClick={() => prevPage()}>Prev</button>
			<button hidden={floorCurrentPage === 0} onClick={() => selectPage(allPages[0].toString())}>1...</button>

			{allPages.map((page, index) => page > floorCurrentPage && page <= ceilCurrentPage &&
				<button
					className={currentPage === page ? paginationStyle.Active : null}
					disabled={currentPage === page}
					onClick={() => selectPage(page.toString())}
					key={index}
				>
					{page}
				</button>
			)}

			<button hidden={floorCurrentPage === 490} onClick={() => selectPage(allPages.length.toString())}>...500
			</button>
			<button disabled={+currentPage === allPages.length} onClick={() => nextPage()}>Next</button>
		</div>
	);
}