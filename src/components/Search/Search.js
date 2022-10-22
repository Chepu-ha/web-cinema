import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";

export function Search() {
	const navigate = useNavigate();

	const {register, handleSubmit, formState: {isValid}} = useForm({mode: "all"});

	const search = (data) => {
		const {searchInput} = data;
		navigate(`1/searchMode/${searchInput}`)
	};

	return (
		<form onSubmit={handleSubmit(search)}>
			<input type="text"
					 placeholder={"Enter title"}
					 {...register("searchInput", {required: true, minLength: {value: 1}})}
			/>
			<button disabled={!isValid}>Submit</button>
		</form>
	);
}