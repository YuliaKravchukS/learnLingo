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
    } else {
      setIsOpenRegistration(true);
    }
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
      {isOpenLogIn && <LoginForm />}
      {isOpenRegistration && <RegisterForm />}
    </div>
  );
};

export default AuthMenu;
