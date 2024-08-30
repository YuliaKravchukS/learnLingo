import React from "react";
import icons from "../../assets/sprite.svg";
import css from "./AppBar.module.css";
import Navigation from "../Navigation/Navigation";
// import UserMenu from '../UserMenu/UserMenu'
// import AuthMenu from "../AuthMenu/AuthMenu";

const AppBar = () => {
  return (
    <section className='container'>
      <div className={css.AppBar}>
        <div className={css.leftAppBar}>
          <div className={css.wrapLogo}>
            <a className={css.logo} href='/'>
              <svg className={css.icon}>
                <use href={`${icons}#icon-ukraine`} />
              </svg>
            </a>
            <p>LearnLingo</p>
          </div>
          <Navigation />
        </div>
        {/* {isLogined ?<UserMenu />:<AuthMenu/>} */}
      </div>
    </section>
  );
};

export default AppBar;
