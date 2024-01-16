import React, { memo } from "react";
import styles from './Movie_card.module.css';

const MovieCardImpl = () => {
	return (
		<div className={styles["card-wrap"]}>
			<div className={styles["card-wrap__img"]}>
				<img src='./assets/img/ender-s_game.jpg' alt='постер' />
			</div>
			<p className={styles['movie-name']}>Игра Эндера</p>
		</div>
	);
};

export const MovieCard = memo(MovieCardImpl);