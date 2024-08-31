import React, { useState } from "react";
import TeacherMainInfo from "../TeacherMainInfo/TeacherMainInfo";
import LevelsList from "../LevelsList/LevelsList";
import Button from "../../ui/Button/Button";
import BookForm from "../BookForm/BookForm";

const TeacherCardDetails = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const openForm = () => {
    setIsOpenModal(true);
  };
  return (
    <div>
      <TeacherMainInfo />
      <p></p>
      <ul className='reviews'>
        <li>
          <div>
            <img src='' alt='' />
            <div>
              <p></p>
              <p></p>
            </div>
          </div>
          <p></p>
        </li>
        <li>
          <div>
            <img src='' alt='' />
            <div>
              <p></p>
              <p></p>
            </div>
          </div>
          <p></p>
        </li>
      </ul>
      <LevelsList />
      <Button
        className='bookLesson'
        type='button'
        text='Book trial lesson'
        cb={openForm}
      />
      {isOpenModal && <BookForm />}
    </div>
  );
};

export default TeacherCardDetails;
