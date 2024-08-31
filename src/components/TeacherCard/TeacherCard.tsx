import React, { useState } from "react";
import Button from "../../ui/Button/Button";
import TeacherCardDetails from "../TeacherCardDetails/TeacherCardDetails";
import TeacherMainInfo from "../TeacherMainInfo/TeacherMainInfo";

const TeacherCard = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  return (
    <div>
      <TeacherMainInfo />
      <Button
        className='readMore'
        type='button'
        text='Read more'
        cb={openModal}
      />
      {isOpenModal && <TeacherCardDetails />}
      <ul>
        <li>
          <p>#A1 Beginner</p>
        </li>
        <li>
          <p>#A2 Elementary</p>
        </li>
        <li>
          <p>#B1 Intermediate</p>
        </li>
        <li>
          <p>#B2 Upper-Intermediate</p>
        </li>
      </ul>
    </div>
  );
};

export default TeacherCard;
