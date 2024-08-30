import React from "react";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink className={css.link} to='/'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={css.link} to='/teachers'>
            Teachers
          </NavLink>
        </li>
        {/* {isLogined ?
            <li> <NavLink className={css.link} to='/favorites'>
              Favorites
            </NavLink></li>} */}
      </ul>
    </nav>
  );
};

export default Navigation;
