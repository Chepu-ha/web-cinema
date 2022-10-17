import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";

import paginationStyle from "./Pagination.module.css";

export function Pagination() {
	const [query, setQuery] = useSearchParams({page: "1"});

	const [currentPage, setCurrentPage] = useState(query.get("page"));
	const [allPages, setAllPages] = useState([]);

	const [floorCurrentPage, setFloorCurrentPage] = useState(0);
	const [ceilCurrentPage, setCeilCurrentPage] = useState(10);

	useEffect(() => {
		setCurrentPage(Number(query.get("page")));
		setCeilCurrentPage(Math.ceil(currentPage / 10) * 10);

		if (currentPage % 10 === 0) {
			setFloorCurrentPage(Math.floor((currentPage - 1) / 10) * 10);
		} else {
			setFloorCurrentPage(Math.floor(currentPage / 10) * 10);
		}
	}, [currentPage, query]);

	useEffect(() => {
		//API can give only 500 pages
		for (let i = 1; i <= 500; i++) {
			allPages.push(i);
		}
	}, [allPages]);

	const prevPage = () => {
		setQuery(value => ({page: value.get("page") - 1}));
	};
	const nextPage = () => {
		setQuery(value => ({page: +value.get("page") + 1}));
	};
	const selectPage = (page) => {
		setQuery({page});
	};

	return (
		<div className={paginationStyle.Pagination}>
			<button disabled={currentPage === 1} onClick={() => prevPage()}>Prev</button>
			<button hidden={floorCurrentPage === 0} onClick={() => selectPage(1)}>1...</button>

			{allPages.map((page, index) => page > floorCurrentPage && page <= ceilCurrentPage &&
				<button
					className={currentPage === page ? paginationStyle.Active : null}
					disabled={currentPage === page}
					onClick={() => selectPage(page)}
					key={index}
				>
					{page}
				</button>
			)}

			<button hidden={floorCurrentPage === 490} onClick={() => selectPage(500)}>...500</button>
			<button disabled={currentPage === allPages.length} onClick={() => nextPage()}>Next</button>
		</div>
	);
}