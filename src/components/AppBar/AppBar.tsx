import React from "react";
import icons from "../../assets/sprite.svg";
import css from "./AppBar.module.css";
import Navigation from "../Navigation/Navigation";

const AppBar = () => {
  return (
    <section>
      <a href='/'>
        <svg className={css.icon}>
          <use href={`${icons}#icon-ukraine`} />
        </svg>
      </a>
      <Navigation />
      {{isLogined ?<}
    </section>
  );
};

export default AppBar;
