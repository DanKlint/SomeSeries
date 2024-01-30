import React from "react";
import { NavLink } from "react-router-dom";
import { SearchForm } from "../../components/searchForm/SearchForm";
import { ActorCard } from "../../components/actor card/ActorCard";
import styles from "./Actors.module.css";

const Actors = () => {
  return (
    <div className="container">
      <main>
        <section className={styles["search-filters"]}>
          <SearchForm />
          {/* <Modal /> */}
          <button className={styles["filters-button"]}>
            <img src="./assets/icon/filter.png" alt="фильтры" />
          </button>
        </section>
        <section className={styles["actors-section"]}>
          <ul className={styles["actors-list"]}>
            <li className={styles["actors-list__item"]}>
              <ActorCard />
            </li>
            <li className={styles["actors-list__item"]}>
              <ActorCard />
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Actors;
