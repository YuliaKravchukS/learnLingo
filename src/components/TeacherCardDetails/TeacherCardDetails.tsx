import React, { useEffect, useState } from "react";

import icons from "../../img/sprite.svg";
import LevelsList from "../LevelsList/LevelsList";
import Button from "../../ui/Button/Button";
import BookForm from "../BookForm/BookForm";
import { TeacherCardProp } from "../../types/indexTypes";
import css from "./TeacherCardDetails.module.css";
import avatarReviewer from "../../img/avatar.png";
import { onValue, ref, remove, set } from "firebase/database";
import { db } from "../../firebase/firebase-config";
import { useAuth } from "../../context/auth-context";
import { Toaster } from "react-hot-toast";

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
    id,
  } = teacher;
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isFavorites, setIsFavorites] = useState<boolean>(false);
  const languagesFlat = languages.join(", ");
  const conditionsFlat = conditions.join(" ");
  const { user } = useAuth();
  const userId = user?.uid;

  useEffect(() => {
    const favoritesRef = ref(db, `/users/${userId}/favorites/${id}`);
    onValue(favoritesRef, (snapshot) => {
      setIsFavorites(snapshot.exists());
    });
  }, [userId, id]);

  const toggleFavorite = async () => {
    if (user === null) {
      return <Toaster position='top-right' reverseOrder={false} />;
    } else {
      const favoritesRef = ref(db, `/users/${userId}/favorites/${id}`);
      if (isFavorites) {
        await remove(favoritesRef);
      } else {
        await set(favoritesRef, { ...teacher });
      }
      setIsFavorites(!isFavorites);
    }
  };

  const openForm = () => {
    setIsOpenModal(true);
  };
  const closeForm = () => {
    setIsOpenModal(false);
  };
  const openCard = () => {
    setShowDetails(true);
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
                <p className={css.InfoText}>Lessons online</p>
              </li>
              <li className={css.commonInfoItem}>
                <p
                  className={css.InfoText}
                >{`Lessons done: ${lessons_done}`}</p>
              </li>
              <li className={css.commonInfoItem}>
                <svg className={css.icon}>
                  <use href={`${icons}#icon-star`} />
                </svg>
                <p className={css.InfoText}>{`Rating: ${rating}`}</p>
              </li>
              <li className={css.commonInfoItem}>
                <p className={css.InfoText}>
                  Price / 1 hour:{" "}
                  <span className={css.price}>{`${price_per_hour}$`}</span>
                </p>
              </li>
            </ul>
            <button className={css.btnHeart} onClick={toggleFavorite}>
              <svg className={isFavorites ? css.iconClicked : css.icon}>
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

        <Button
          className={!showDetails ? "readMore" : "hidden"}
          type='button'
          text='Read more'
          cb={openCard}
        />

        <div className={showDetails ? css.showMore : css.hidden}>
          <p className={css.experience}>{experience}</p>
          <ul className={css.reviewsList}>
            {reviews &&
              reviews.map((review, idx) => (
                <li className={css.review} key={idx}>
                  <div className={css.reviewer}>
                    <img
                      className={css.avatarReviewer}
                      src={avatarReviewer}
                      alt={`Photo ${review.reviewer_name}`}
                    />
                    <div>
                      <p className={css.name}>{review.reviewer_name}</p>
                      <div className={css.reviewer_ratingStar}>
                        <svg className={css.icon}>
                          <use href={`${icons}#icon-star`} />
                        </svg>
                        <p className={css.reviewer_rating}>
                          {review.reviewer_rating.toFixed(1)}
                        </p>
                      </div>
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
        {isOpenModal && (
          <BookForm
            teacher={teacher}
            state={isOpenModal}
            closeModal={closeForm}
          />
        )}
      </div>
    </div>
  );
};

export default TeacherCardDetails;
