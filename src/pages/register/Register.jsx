import React, { useCallback, useState } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVk,
  faYoutube,
  faTelegram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

// import { Button } from "../../components/button/Button";
import { InputForm } from "../../components/inputForm/InputForm";
import { NavLink } from "react-router-dom";
// import { registerUser } from "../../redux/reducers/registrationSlice";

import styles from "./Register.module.css";

const Register = () => {
  return (
    <main className={styles["wrapper"]}>
      <form action="" className={styles["form"]} autocomplete="off">
        <h1 className={styles["title"]}>SomeSeries</h1>
        <div className={styles["inp"]}>
          <InputForm name="" id="" inputPlaceholder="Логин" />
          <i className={styles["fa-solid fa-user"]}></i>
        </div>
        <div className={styles["inp"]}>
          <InputForm
            type="password"
            name=""
            id=""
            inputPlaceholder="Пароль"
            autoComplete="new-password"
          />
          <i className={styles["fa-solid fa-lock"]}></i>
        </div>
        <div className={styles["inp"]}>
          <InputForm
            type="password"
            name=""
            id=""
            inputPlaceholder="Подтвердите пароль"
            autoComplete="new-password"
          />
          <i className={styles["fa-solid fa-lock"]}></i>
        </div>
        <button className={styles["submit"]}>Зарегистрироваться</button>
        <p className={styles["footer"]}>
          Есть аккаунт?
          <NavLink to="/" className={styles["link"]}>
            {" "}
            Войти
          </NavLink>
        </p>
      </form>

      <div className={styles["banner"]}>
        <div className={styles["container"]}>
          <p className={styles["para"]} id={styles["head1"]}>
            Добро пожаловать!
          </p>
          <p className={styles["para"]} id={styles["head2"]}>
            SomeSeries - ваш проводник
          </p>
          <p className={styles["para"]} id={styles["head3"]}>
            По миру кино и сериалов
          </p>
          <p className={styles["para"]} id={styles["head4"]}>
            Начнём!
          </p>
          <div className={styles["icons"]} id={styles["head5"]}>
            <FontAwesomeIcon icon={faVk} className={styles["icon"]} />
            <FontAwesomeIcon icon={faYoutube} className={styles["icon"]} />
            <FontAwesomeIcon icon={faTelegram} className={styles["icon"]} />
            <FontAwesomeIcon icon={faGithub} className={styles["icon"]} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;
