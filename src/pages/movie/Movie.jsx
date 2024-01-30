import React from "react";
import styles from "./Movie.module.css";

const Movie = () => {
  return (
    <div className="container">
      <main>
        <section className={styles["info-movie-section"]}>
          <div className={styles["movie-short-info"]}>
            <img src="./assets/img/endersgame.jpg" alt="Постер фильма" />
            <div className={styles["movie-short-info-details"]}>
              <ul className={styles["details-list"]}>
                <li className={styles["details-list__item"]}>
                  <p>
                    <strong>Год:</strong> 2009
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Жанр:</strong> Боевик, Драма, Приключения,
                    Фантастика
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Актеры:</strong> Сэм Уортингтон, Зои Салдана,
                    Сигурни Уивер, Стивен Лэнг, Мишель Родригес, Джованни
                    Рибизи, Джоэль Мур, Си Си Эйч Паундер, Уэс Стьюди, Лас
                    Алонсо
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Время продолжительности:</strong> 2 часа 58 минут
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles["movie-info"]}>
            <h1 className={styles["movie-title"]}>Аватар</h1>
            <div className={styles["movie-description"]}>
              <p>
                Действие происходит в далеком будущем, когда Земля исчерпала
                свои природные ресурсы, и человечество отправляется на планету
                "Пандорa" в поисках ценных минералов. Главный герой, Джейк
                Салли, является выжившим морским пехотинцем, который оказывается
                в Пандоре в качестве оперативника, управляющего созданным
                генетическими инженерами телом аватара — смесью человека и
                народа пандориан. Вступив в контакт с живущими на планете
                инопланетными существами, называемыми народом Нави, Джейк
                начинает пересматривать свои ценности и убеждения. Он становится
                частью Нави, участвует в их обрядах и принимает их образ жизни и
                культуру. Однако, когда корпорация начинает уничтожать их родную
                землю, Джейк оказывается перед тяжёлым выбором между верностью
                своему народу или сохранением красоты и жизни Пандоры. Картина
                поражает зрителей своей визуальной проработкой и спецэффектами,
                которые на тот момент считались новаторскими. Фильм также
                уделяет внимание экологической теме, необходимости бережного
                отношения к природе и живым существам.
              </p>
              <p>
                Кэмерон создал уникальный фантастический мир, который полностью
                погружает зрителей в новый опыт и вызывает множество эмоций.
                "Аватар" стал культовым кинофильмом, получив множество наград и
                высокие оценки критиков. Он также стал одним из самых кассово
                успешных фильмов всех времён, открыв новую эпоху в
                кинематографии и оставив неизгладимый след в сердцах зрителей.
              </p>
            </div>
          </div>
        </section>
        <section className={styles["video-player"]}></section>
        <section className={styles["comments"]}>
          <div className={styles["comments_tittle"]}>
            <h2>Комментарии</h2>
          </div>
          <div className="line"></div>
          <ul>
            <li>
              <div className={styles["comment"]}>
                <span className={styles["comment__user-name"]}>User</span>
                <p className={styles["comment__text"]}>
                  комментарий комментарий комментарий комментарий комментарий
                </p>
              </div>
            </li>
            <li>
              <div className={styles["comment"]}>
                <span className={styles["comment__user-name"]}>User</span>
                <p className={styles["comment__text"]}>
                  комментарий комментарий комментарий комментарий комментарий
                </p>
              </div>
            </li>
            <li>
              <div className={styles["comment"]}>
                <span className={styles["comment__user-name"]}>User</span>
                <p className={styles["comment__text"]}>
                  комментарий комментарий комментарий комментарий комментарий
                </p>
              </div>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Movie;
