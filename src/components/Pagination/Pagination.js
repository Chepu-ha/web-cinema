import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";

import paginationStyle from "./Pagination.module.css";

export function Pagination() {
	const [query, setQuery] = useSearchParams({page: "1"});

	const [currentPage, setCurrentPage] = useState(query.get("page"));
	const [pages, setPages] = useState([]);
	const [pageNumberLimit, setPageNumberLimit] = useState(10);
	const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(10);
	const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

	const prevPage = () => {
		setQuery(value => ({page: value.get("page") - 1}));

		if ((currentPage - 1) % pageNumberLimit === 0) {
			setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
			setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
		}
	};

	const nextPage = () => {
		setQuery(value => ({page: +value.get("page") + 1}));

		if (currentPage + 1 > maxPageNumberLimit) {
			setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
			setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
		}
	};

	const selectPage = (page) => {
		setQuery({page});
	};

	useEffect(() => {
		setCurrentPage(Number(query.get("page")));
	}, [query]);

	useEffect(() => {
		for (let i = 1; i <= 499; i++) {
			pages.push(i);
		}
	}, [pages]);

	const renderPageNumbers = pages.map((page, index) => {
		if (page < maxPageNumberLimit + 1 && page > minPageNumberLimit) {
			return (
				<button disabled={currentPage === index + 1} onClick={() => selectPage(page)} key={index}>
					{page}
				</button>
			);
		} else {
			return null;
		}
	});

	return (
		<div>
			<button disabled={currentPage === 1} onClick={() => prevPage()}>Prev</button>
			{/*<button disabled={currentPage === 1} onClick={() => selectPage(1)}>Start</button>*/}
			{renderPageNumbers}
			{/*<button disabled={currentPage === 499} onClick={() => selectPage(499)}>End</button>*/}
			<button disabled={currentPage === pages.length-1} onClick={() => nextPage()}>Next</button>
		</div>
	);
}