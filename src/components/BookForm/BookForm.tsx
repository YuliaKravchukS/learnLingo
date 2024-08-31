import React from "react";
import icons from "../../img/sprite.svg";
import css from "./BookForm.module.css";

const BookForm = () => {
  return (
    <div>
      <svg className={css.icon}>
        <use href={`${icons}#icon-x`} />
      </svg>
      <h2>Book trial lesson</h2>
      <p>
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </p>
      <div>
        <img src='' alt='' />
        <div>
          <p>Your teacher</p>
          <p>name</p>
        </div>
      </div>
      <p>What is your main reason for learning English?</p>
      <form action=''>
        <input type='radio' name='' id='' />
        <input type='radio' name='' id='' />
        <input type='radio' name='' id='' />
        <input type='radio' name='' id='' />
        <input type='radio' name='' id='' />
        <input type='text' name='name' placeholder='Full Name' />
        <input type='email' name='email' placeholder='Email' />
        <input type='phone' name='phone' placeholder='Phone number' />
        <button>Book</button>
      </form>
    </div>
  );
};

export default BookForm;
