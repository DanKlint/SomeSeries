import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Movie_card.module.css";

const MovieCardImpl = () => {
  return (
    <NavLink to="/movie">
      <div className={styles["card-wrap"]}>
        <div className={styles["card-wrap__img"]}>
          <img src="./assets/img/ender-s_game.jpg" alt="постер" />
        </div>
        <p className={styles["movie-name"]}>Игра Эндера</p>
      </div>
    </NavLink>
  );
};

export const MovieCard = memo(MovieCardImpl);
