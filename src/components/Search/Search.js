import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";

export function Search() {
	const navigate = useNavigate();

	const {register, handleSubmit, reset, formState: {isValid}} = useForm({mode: "all"});

	const search = ({searchInput}) => {
		localStorage.setItem("genreId", "");
		localStorage.setItem("genreName", "");
		navigate(`1/searchMode/${searchInput}`);
		reset();
	};

	return (
		<form className="search-form" onSubmit={handleSubmit(search)}>
			<input className="search-input" type="text"
					 placeholder={"Enter title"}
					 {...register("searchInput", {required: true, minLength: {value: 1}})}
			/>
			<button className="search-button" disabled={!isValid}>Submit</button>
		</form>
	);
}