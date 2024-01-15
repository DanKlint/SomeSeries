import React from "react";
import styles from './Home.module.css';
import { SearchForm } from "../../components/searchForm/SearchForm";

const Home = () => {
	return (
		<div className='container'>
			<main>
				<section className={styles["search&filters"]}>
					<SearchForm />
				</section>
				<section className={styles["section-slider"]} id={styles['section-slider']}>
					<div id={styles["slider-line"]}>

					</div>
				</section>
				<section className={styles["home-page__search&filters"]}>

				</section>
			</main>
		</div>

	);
};

export default Home;