import React from "react";
import Button from "../../ui/Button/Button";

const UserMenu = () => {
  const handleClick = () => {};
  return (
    <div>
      <p>Welcome, </p>
      <Button type='button' cb={handleClick} text='Log out' />
    </div>
  );
};

export default UserMenu;
