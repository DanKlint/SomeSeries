import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import styles from "./ActorCard.module.css";

const ActorCardImpl = () => {
  return (
    <NavLink to="#">
      <div className={styles["actor"]}>
        <div className={styles["image__wrap"]}>
          <img src="./assets/actors/anya.jpg" alt="Актер" />
        </div>
        <div className={styles["info"]}>
          <p className={styles["info__name"]}>Аня Тейлор-Джой</p>
          <p className={styles["info__description"]}>
            Американо-британская актриса, Модель, США
          </p>
          <p className={styles["info__age"]}>27 лет</p>
        </div>
      </div>
    </NavLink>
  );
};

export const ActorCard = memo(ActorCardImpl);
