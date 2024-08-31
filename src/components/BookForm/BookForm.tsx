import React from "react";
import icons from "../../img/sprite.svg";
import css from "./BookForm.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required().min(3),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  tel: yup.number().positive().integer().required(),
  reason: yup.string().required("Required"),
});
type FormData = yup.InferType<typeof schema>;

const BookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => console.log(data);
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
      <p></p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <legend>What is your main reason for learning English?</legend>
          <input
            {...register("reason")}
            type='radio'
            value='career'
            id='field-career'
          />
          <label htmlFor='field-career'>Career and business</label>
          <input
            {...register("reason")}
            type='radio'
            value='forKids'
            id='field-forKids'
          />
          <label htmlFor='field-forKids'>Lesson for kids</label>
          <input
            {...register("reason")}
            type='radio'
            value='abroad'
            id='field-abroad'
          />
          <label htmlFor='field-abroad'>Living abroad</label>
          <input
            {...register("reason")}
            type='radio'
            value='exams'
            id='field-exams'
          />
          <label htmlFor='field-exams'>Exams and coursework</label>
          <input
            {...register("reason")}
            type='radio'
            value='hobby'
            id='field-hobby'
          />
          <label htmlFor='field-hobby'>Culture, travel or hobby</label>
        </fieldset>

        <input
          {...register("name", { required: true, minLength: 3 })}
          placeholder='Full name'
        />
        {errors.name && <p className={css.error}>{errors.name.message}</p>}
        <input
          {...register("email", { required: true, minLength: 8 })}
          placeholder='Email'
        />
        {errors.email && <p className={css.error}>{errors.email.message}</p>}
        <input
          {...register("tel", { min: 10, max: 13 })}
          placeholder='Phone number'
        />
        {errors.tel && <p className={css.error}>{errors.tel.message}</p>}

        <button type='submit'>Book</button>
      </form>
    </div>
  );
};

export default BookForm;
