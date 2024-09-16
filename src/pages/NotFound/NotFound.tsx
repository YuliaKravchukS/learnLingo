import { Link } from "react-router-dom";
import css from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={css.notFoundPage}>
      <h2>
        Such a page does not exist. <br /> Go to the main page
      </h2>
      <Link to='/'>Go Home</Link>
    </div>
  );
};

export default NotFound;
