import React, { useState } from "react";
import Button from "../../ui/Button/Button";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";

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
    <div>
      <Button type='button' cb={openPopUp} text='Log in' />
      <Button type='button' cb={openPopUp} text='Registration' />
      {isOpenLogIn && <LoginForm />}
      {isOpenRegistration && <RegisterForm />}
    </div>
  );
};

export default AuthMenu;
