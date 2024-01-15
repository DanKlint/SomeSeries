import React, { memo } from "react";
import styles from './SearchForm.module.css'

const SearchFormImpl = () => {

	return (
		<div>
			<form className={styles["form"]}>
				<input className={styles["input"]} type="text" placeholder="Поиск..." />
				<button className={styles["search-button"]} type="submit">&#128269;</button>
			</form>
		</div>

	);
};

export const SearchForm = memo(SearchFormImpl);