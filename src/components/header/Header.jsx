import React from "react";
import styles from './Header.module.css';
import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<header>
			<div className={styles["wrapper"]}>
				<div className={styles["logo"]}>
					<NavLink to="/" className={styles['site-name']}>SomeSeries</NavLink>
					<p className={styles['slogan']}>СМОТРИТЕ С НАМИ</p>
				</div>
				<nav className={styles["menu"]}>
					<ul className={styles['menu__list']}>
						<li className={styles['menu__item']}>
							<NavLink className={styles['menu__link']} to="/">Каталог</NavLink>
						</li>
						<li className={styles['menu__item']}>
							<NavLink className={styles['menu__link']} to="News.html">Новости</NavLink>
						</li>
						<li className={styles['menu__item']}>
							<NavLink className={styles['menu__link']} to="Actors.html">Актеры</NavLink>
						</li>
						<li className={styles['menu__item']}>
							<NavLink className={styles['menu__link']} to="Contacts.html">Контакты</NavLink>
						</li>
						<li className={styles['menu__item']}>
							<NavLink className={styles['menu__link']} to="Profile.html">Профиль</NavLink>
						</li>
					</ul>
				</nav>
				<div className="line"></div>
			</div>
		</header>
	);
};

export default Header;

