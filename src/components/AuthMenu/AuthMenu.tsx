import React, { useState } from "react";
import Button from "../../ui/Button/Button";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";
import css from "./AuthMenu.module.css";
import icons from "../../img/sprite.svg";

const AuthMenu = () => {
  const [isOpenLogIn, setIsOpenLogIn] = useState<boolean>(false);
  const [isOpenRegistration, setIsOpenRegistration] = useState<boolean>(false);

  const openPopUp = (text: string) => {
    if (text === "Log in") {
      setIsOpenLogIn(true);
    } else if (text === "Registration") {
      setIsOpenRegistration(true);
    }
  };
  const closePopUpLogIn = () => {
    setIsOpenLogIn(false);
  };
  const closePopUpRegistr = () => {
    setIsOpenRegistration(false);
  };
  return (
    <div className={`flexWrap ${css.authMenu}`}>
      <div className={`flexWrap ${css.logInWrap}`}>
        <svg className={css.icon}>
          <use href={`${icons}#icon-log-in`} />
        </svg>
        <Button className='logIn' type='button' cb={openPopUp} text='Log in' />
      </div>
      <Button
        className='register'
        type='button'
        cb={openPopUp}
        text='Registration'
      />
      {isOpenLogIn && (
        <LoginForm state={isOpenLogIn} closeModal={closePopUpLogIn} />
      )}
      {isOpenRegistration && (
        <RegisterForm
          state={isOpenRegistration}
          closeModal={closePopUpRegistr}
        />
      )}
    </div>
  );
};

export default AuthMenu;
