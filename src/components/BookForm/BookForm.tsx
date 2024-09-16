import React from "react";
import icons from "../../img/sprite.svg";
import css from "./BookForm.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ReactModal, { Props as ModalProps } from "react-modal";
import { FormProp } from "../../types/indexTypes";

const customStyles: ModalProps["style"] = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    padding: "0",
    maxWidth: "90%",
    border: "none",
    borderRadius: "30px",
    transform: "translate(-50%, -50%)",
    overflowY: "auto",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};

ReactModal.setAppElement("#root");

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

const BookForm = ({ teacher, closeModal, state }: FormProp) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    closeModal();
  };

  return (
    <ReactModal isOpen={state} onRequestClose={closeModal} style={customStyles}>
      <div className={css.overlayForm}>
        <button className={css.btnClose} onClick={closeModal}>
          <svg className={css.icon}>
            <use href={`${icons}#icon-x`} />
          </svg>
        </button>
        <h2>Book trial lesson</h2>
        <p className={css.text}>
          Our experienced tutor will assess your current language level, discuss
          your learning goals, and tailor the lesson to your specific needs.
        </p>
        <div className={css.teacher}>
          <img
            className={css.imgAvatar}
            src={teacher?.avatar_url}
            alt={teacher?.name}
          />
          <div>
            <p className={css.teacherText}>Your teacher</p>
            <p
              className={css.teacherName}
            >{`${teacher?.name} ${teacher?.surname}`}</p>
          </div>
        </div>

        <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
          <fieldset className={css.fieldset}>
            <legend>What is your main reason for learning English?</legend>
            <label className={css.labelRadio} htmlFor='field-career'>
              <input
                {...register("reason")}
                type='radio'
                value='career'
                id='field-career'
                className={css.inputRadio}
              />
              <span className={css.customRadioBox}></span>
              Career and business
            </label>
            <label className={css.labelRadio} htmlFor='field-forKids'>
              <input
                {...register("reason")}
                type='radio'
                value='forKids'
                id='field-forKids'
                className={css.inputRadio}
              />
              <span className={css.customRadioBox}></span>
              Lesson for kids
            </label>
            <label className={css.labelRadio} htmlFor='field-abroad'>
              <input
                {...register("reason")}
                type='radio'
                value='abroad'
                id='field-abroad'
                className={css.inputRadio}
              />
              <span className={css.customRadioBox}></span>
              Living abroad
            </label>
            <label className={css.labelRadio} htmlFor='field-exams'>
              <input
                {...register("reason")}
                type='radio'
                value='exams'
                id='field-exams'
                className={css.inputRadio}
              />
              <span className={css.customRadioBox}></span>
              Exams and coursework
            </label>
            <label className={css.labelRadio} htmlFor='field-hobby'>
              <input
                {...register("reason")}
                type='radio'
                value='hobby'
                id='field-hobby'
                className={css.inputRadio}
              />
              <span className={css.customRadioBox}></span>
              Culture, travel or hobby
            </label>
          </fieldset>

          <div className={css.errorWrap}>
            <input
              {...register("name", { required: true, minLength: 3 })}
              placeholder='Full name'
              className={css.input}
            />
            {errors.name && <p className={css.error}>{errors.name.message}</p>}
          </div>
          <div className={css.errorWrap}>
            <input
              {...register("email", { required: true, minLength: 8 })}
              placeholder='Email'
              className={css.input}
            />
            {errors.email && (
              <p className={css.error}>{errors.email.message}</p>
            )}
          </div>
          <div className={css.errorWrap}>
            <input
              {...register("tel", { min: 10, max: 13 })}
              placeholder='Phone number'
              className={css.input}
            />
            {errors.tel && <p className={css.error}>{errors.tel.message}</p>}
          </div>
          <button className={css.btnLogIn} type='submit'>
            Book
          </button>
        </form>
      </div>
    </ReactModal>
  );
};

export default BookForm;
