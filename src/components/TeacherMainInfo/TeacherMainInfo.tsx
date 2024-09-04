import React from "react";
import { TeacherCardProp } from "../../types/indexTypes";
import icons from "../../img/sprite.svg";
import css from "./TeacherMainInfo.module.css";

const TeacherMainInfo: React.FC<TeacherCardProp> = ({ teacher }) => {
  const {
    avatar_url,
    conditions,
    languages,
    lesson_info,
    lessons_done,
    name,
    price_per_hour,
    rating,
    surname,
  } = teacher;

  const languagesFlat = languages.join(", ");
  const conditionsFlat = conditions.join(" ");

  return (
    <div className={css.mainInfo}>
      <div className={css.avatarBorder}>
        <img className={css.avatar} src={avatar_url} alt={name} />
      </div>
      <div className={css.wrapInfo}>
        <div className={css.commonInfo}>
          <div className={css.commonInfoRight}>
            <p>Languages</p>
            <p>{`${name} ${surname}`}</p>
          </div>
          <div className={css.commonInfoLeft}>
            <ul className={css.commonInfoList}>
              <li className={css.commonInfoItem}>
                <svg className={css.icon}>
                  <use href={`${icons}#icon-book-open`} />
                </svg>
                <p className={css.text}>Lessons online</p>
              </li>
              <li className={css.commonInfoItem}>
                <p className={css.text}>{`Lessons done: ${lessons_done}`}</p>
              </li>
              <li className={css.commonInfoItem}>
                <svg className={css.icon}>
                  <use href={`${icons}#icon-star`} />
                </svg>
                <p className={css.text}>{`Rating: ${rating}`}</p>
              </li>
              <li className={css.commonInfoItem}>
                <p className={css.text}>
                  Price / 1 hour:{" "}
                  <span className={css.price}>{`${price_per_hour}$`}</span>
                </p>
              </li>
            </ul>
            <button>
              <svg className={css.icon}>
                <use href={`${icons}#icon-heart`} />
              </svg>
            </button>
          </div>
        </div>

        <p className={css.text}>
          <span>Speaks: </span>
          {languagesFlat}
        </p>
        <p className={css.text}>
          <span>Lesson Info: </span>
          {lesson_info}
        </p>
        <p className={css.text}>
          <span>Conditions: </span>
          {conditionsFlat}
        </p>
      </div>
    </div>
  );
};

export default TeacherMainInfo;
