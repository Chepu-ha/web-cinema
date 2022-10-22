import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import paginationStyle from "./Pagination.module.css";

export function Pagination() {
	const params = useParams();
	const {page, genre, search} = params;
	const navigate = useNavigate();

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
		if (page && genre && genre !== "searchMode") {
			navigate(`/moviesListPage/${currentPage + 1}/${genre}`);
		} else if (page && genre && genre === "searchMode" && search) {
			navigate(`/moviesListPage/${currentPage + 1}/${genre}/${search}`);
		} else {
			navigate(`/moviesListPage/${currentPage + 1}`);
		}
	};

	const prevPage = () => {
		if (page && genre && genre !== "searchMode") {
			navigate(`/moviesListPage/${currentPage - 1}/${genre}`);
		} else if (page && genre && genre === "searchMode" && search) {
			navigate(`/moviesListPage/${currentPage - 1}/${genre}/${search}`);
		} else {
			navigate(`/moviesListPage/${currentPage - 1}`);
		}
	};


	const selectPage = (selectedPage) => {
		if (page && genre && genre !== "searchMode") {
			navigate(`/moviesListPage/${selectedPage}/${genre}`);
		} else if (page && genre && genre === "searchMode" && search) {
			navigate(`/moviesListPage/${selectedPage}/${genre}/${search}`);
		} else {
			navigate(`/moviesListPage/${selectedPage}`);
		}
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