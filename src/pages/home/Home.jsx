import React from "react";
import styles from './Home.module.css';
import { MovieCard } from "../../components/movie card/Movie_card";
import { SearchForm } from "../../components/searchForm/SearchForm";
// import Modal from "../../components/modal window/Modal";

const Home = () => {
	return (
		<div className='container'>
			<main>
				<section className={styles["search-filters"]}>
					<SearchForm />
					{/* <Modal /> */}
					<button className={styles["filters-button"]}>
						<img src="./assets/icon/filter.png" alt="фильтры" />
					</button>
				</section>
				<section className={styles["section-slider"]} id={styles['section-slider']}>
					<div className={styles["fantasy"]}>
						<p className={styles["slider-genre"]}>НОВИНКИ</p>
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
						<p className={styles["slider-genre"]}>СЕРИАЛЫ</p>
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
						<p className={styles["slider-genre"]}>ТОП месяца</p>
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