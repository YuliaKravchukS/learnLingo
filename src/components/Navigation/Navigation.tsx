import React from "react";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { useAuth } from "../../context/auth-context";

const Navigation = () => {
  const { user } = useAuth();
  return (
    <nav>
      <ul className={css.list}>
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
        {user && (
          <li>
            <NavLink className={css.link} to='/favorites'>
              Favorites
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
