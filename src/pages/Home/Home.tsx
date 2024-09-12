import React from "react";
import DocumentTitle from "../../components/DocumentTitle";
import { Link } from "react-router-dom";
import css from "./Home.module.css";
import redGirl1x from "../../img/redGirl.png";
import redGirl2x from "../../img/redGirl2.png";

const Home: React.FC = () => {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>
      <section className='container'>
        <div className={`flexWrap ${css.hero}`}>
          <div className={css.heroText}>
            <h1>
              Unlock your potential with the best <span>language</span> tutors
            </h1>
            <p>
              Embark on an Exciting Language Journey with Expert Language
              Tutors: Elevate your language proficiency to new heights by
              connecting with highly qualified and experienced tutors.
            </p>
            <Link className={css.link} to='/teachers'>
              Get started
            </Link>
          </div>

          <img
            className={css.img}
            src={redGirl1x}
            srcSet={`${redGirl1x} 1x, ${redGirl2x} 2x`}
            alt='Drawn red-haired girl with a laptop'
          />
        </div>
        <ul className={css.list}>
          <li className={`flexWrap ${css.item}`}>
            <p> 32,000+</p>
            <p>Experienced tutors</p>
          </li>
          <li className={`flexWrap ${css.item}`}>
            <p>300,000+</p>
            <p>5-star tutor reviews</p>
          </li>
          <li className={`flexWrap ${css.item}`}>
            <p>120 +</p>
            <p>Subjects taught</p>
          </li>
          <li className={`flexWrap ${css.item}`}>
            <p>200 +</p>
            <p>Tutor nationalities</p>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Home;
