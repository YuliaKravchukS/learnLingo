import React from "react";
import DocumentTitle from "../../components/DocumentTitle";
import { Link } from "react-router-dom";
import css from "./Home.module.css";

const Home: React.FC = () => {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>
      <section>
        <div>
          <div>
            <h1>
              Unlock your potential with the best <span>language</span> tutors
            </h1>
            <p>
              Embark on an Exciting Language Journey with Expert Language
              Tutors: Elevate your language proficiency to new heights by
              connecting with highly qualified and experienced tutors.
            </p>
            <Link className={css.link} to='/teachers' />
          </div>

          <img
            className='css.img'
            src='../../img/redGirl.png'
            // srcSet='./assets/redGirl.png 1x, ./assets/redGirl2.png 2x'
            alt='Drawn red-haired girl with a laptop'
          />
        </div>
        <ul>
          <li>
            <p> 32,000 +</p>
            <p>Experienced tutors</p>
          </li>
          <li>
            <p>300,000 +</p>
            <p>5-star tutor reviews</p>
          </li>
          <li>
            <p>120 +</p>
            <p>Subjects taught</p>
          </li>
          <li>
            <p>200 +</p>
            <p>Tutor nationalities</p>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Home;
