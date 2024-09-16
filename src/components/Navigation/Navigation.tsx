import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { useAuth } from "../../context/auth-context";
import icons from "../../img/sprite.svg";
import clsx from "clsx";

const getNavLinkClassName = ({ isActive }: { isActive: boolean }) =>
  clsx(css.link, { [css.active]: isActive });

const Navigation = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const { user } = useAuth();

  return (
    <div>
      <nav className={css.deskNavigation}>
        <ul className={css.list}>
          <li>
            <NavLink className={getNavLinkClassName} to='/'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={getNavLinkClassName} to='/teachers'>
              Teachers
            </NavLink>
          </li>
          {user && (
            <li>
              <NavLink className={getNavLinkClassName} to='/favorites'>
                Favorites
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
      <button
        className={openMenu ? css.hidden : css.btnOpen}
        onClick={() => {
          setOpenMenu(true);
        }}
      >
        Menu
      </button>

      {openMenu && (
        <div className={css.overlayMenu}>
          <div className={css.mobMenu}>
            <button
              className={css.btnClose}
              onClick={() => {
                setOpenMenu(false);
              }}
            >
              <svg className={css.icon}>
                <use href={`${icons}#icon-x`} />
              </svg>
            </button>
            <nav>
              <ul className={css.listMenu}>
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
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;
