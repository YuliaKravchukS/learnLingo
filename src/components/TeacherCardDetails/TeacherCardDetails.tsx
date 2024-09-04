import React, { useState } from "react";
// import TeacherMainInfo from "../TeacherMainInfo/TeacherMainInfo";
import icons from "../../img/sprite.svg";
import LevelsList from "../LevelsList/LevelsList";
import Button from "../../ui/Button/Button";
import BookForm from "../BookForm/BookForm";
import { TeacherCardProp } from "../../types/indexTypes";
import css from "./TeacherCardDetails.module.css";

const TeacherCardDetails: React.FC<TeacherCardProp> = ({ teacher }) => {
  const {
    experience,
    reviews,
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
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const languagesFlat = languages.join(", ");
  const conditionsFlat = conditions.join(" ");

  const openForm = () => {
    setIsOpenModal(true);
  };
  const closeForm = () => {
    setIsOpenModal(false);
  };

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

        <div className={css.hidden}>
          <p>{experience}</p>
          <ul className={css.reviewsList}>
            {reviews &&
              reviews.map((review, idx) => (
                <li className={css.review} key={idx}>
                  <div className={css.reviewer}>
                    <img
                      className={css.avatarReviewer}
                      src=''
                      alt={`Photo ${review.reviewer_name}`}
                    />
                    <div>
                      <p className={css.name}>{review.reviewer_name}</p>
                      <p className={css.reviewer_rating}>
                        {review.reviewer_rating}
                      </p>
                    </div>
                  </div>
                  <p className={css.text}>{review.comment}</p>
                </li>
              ))}
          </ul>
        </div>
        <LevelsList teacher={teacher} />
        <Button
          className='bookLesson'
          type='button'
          text='Book trial lesson'
          cb={openForm}
        />
        {isOpenModal && <BookForm state={isOpenModal} closeModal={closeForm} />}
      </div>
    </div>
  );
};

export default TeacherCardDetails;
