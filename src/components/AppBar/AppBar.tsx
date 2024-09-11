import icons from "../../img/sprite.svg";
import css from "./AppBar.module.css";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthMenu from "../AuthMenu/AuthMenu";
import { useAuth } from "../../context/auth-context";

const AppBar = () => {
  const { user } = useAuth();

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

        {user ? <UserMenu /> : <AuthMenu />}
      </div>
    </section>
  );
};

export default AppBar;
