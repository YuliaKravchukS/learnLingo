import React, { useState } from "react";
import Button from "../../ui/Button/Button";
import TeacherCardDetails from "../TeacherCardDetails/TeacherCardDetails";
import TeacherMainInfo from "../TeacherMainInfo/TeacherMainInfo";
import { TeacherCardProp } from "../../types/indexTypes";
import LevelsList from "../LevelsList/LevelsList";

const TeacherCard: React.FC<TeacherCardProp> = ({ teacher }) => {
  console.log("teacher: ", teacher);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  return (
    <div>
      <TeacherMainInfo teacher={teacher} />
      <Button
        className='readMore'
        type='button'
        text='Read more'
        cb={openModal}
      />
      {isOpenModal && <TeacherCardDetails teacher={teacher} />}
      <LevelsList teacher={teacher} />
    </div>
  );
};

export default TeacherCard;
