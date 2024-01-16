import React from "react";
import styles from './Home.module.css';
import { MovieCard } from "../../components/movie card/Movie_card";
import { SearchForm } from "../../components/searchForm/SearchForm";

const Home = () => {
	return (
		<div className='container'>
			<main>
				<section className={styles["search-filters"]}>
					<SearchForm />
				</section>
				<section className={styles["section-slider"]} id={styles['section-slider']}>
					<div className={styles["fantasy"]}>
						<p className={styles["slider-genre"]}>Фантастика</p>
						<div className={styles["slider-line"]}>
							<ul className={styles["list"]}>
								<li>
									<MovieCard />
								</li>
								<li>
									<MovieCard />
								</li>
								<li>
									<MovieCard />
								</li>
								<li>
									<MovieCard />
								</li>
								<li>
									<MovieCard />
								</li>
								<li>
									<MovieCard />
								</li>
								<li>
									<MovieCard />
								</li>
								<li>
									<MovieCard />
								</li>
							</ul>
						</div>
					</div>
					<div className={styles["fantasy"]}>
						<p className={styles["slider-genre"]}>Фантастика</p>
						<div className={styles["slider-line"]}>
							<ul className={styles["list"]}>
								<li>
									<MovieCard />
								</li>
								<li>
									<MovieCard />
								</li>
								<li>
									<MovieCard />
								</li>
								<li>
									<MovieCard />
								</li>
								<li>
									<MovieCard />
								</li>
								<li>
									<MovieCard />
								</li>
								<li>
									<MovieCard />
								</li>
								<li>
									<MovieCard />
								</li>
							</ul>
						</div>
					</div>


				</section>
				<section className={styles["home-page__search&filters"]}>

				</section>
			</main>
		</div>
	);
};

export default Home;