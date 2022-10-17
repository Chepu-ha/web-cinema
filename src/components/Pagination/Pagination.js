import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";

import paginationStyle from "./Pagination.module.css";

export function Pagination() {
	const [query, setQuery] = useSearchParams({page: "1"});
	const [currentPage, setCurrentPage] = useState(1);
	const [pages, setPages] = useState([]);

	const prevPage = () => {
		setQuery(value => ({page: value.get("page") - 1}));
	};
	const nextPage = () => {
		setQuery(value => ({page: +value.get("page") + 1}));
	};
	const selectPage = (page) => {
		setQuery({page});
	};

	useEffect(() => {
		setCurrentPage(Number(query.get("page")));
	}, [query]);

	useEffect(() => {
		for (let i = 1; i <= 500; i++) {
			pages.push(i);
		}
	}, [pages]);

	return (
		<div>
			<button disabled={currentPage === 1} onClick={() => prevPage()}>Prev</button>

			{pages.map((showPage, index) =>
				<button disabled={currentPage === index + 1} onClick={() => selectPage(index + 1)} key={index}>
					{showPage}
				</button>)}

			<button disabled={currentPage === 499} onClick={() => nextPage()}>Next</button>
		</div>
	);
}