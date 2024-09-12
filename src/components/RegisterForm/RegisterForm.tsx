import icons from "../../img/sprite.svg";
import css from "./RegisterForm.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { FormProp } from "../../types/indexTypes";
import ReactModal from "react-modal";
import { useAuth } from "../../context/auth-context";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    padding: "0",
    border: "none",
    borderRadius: "30px",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};

ReactModal.setAppElement("#root");

const schema = yup.object().shape({
  displayName: yup.string().required().min(3),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long"),
});
type FormData = yup.InferType<typeof schema>;

const RegisterForm = ({ closeModal, state }: FormProp) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { signUp } = useAuth();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    signUp(data);
    closeModal();
  };
  return (
    <ReactModal isOpen={state} onRequestClose={closeModal} style={customStyles}>
      <div className={css.overlay}>
        <button className={css.btnClose} onClick={closeModal}>
          <svg className={css.icon}>
            <use href={`${icons}#icon-x`} />
          </svg>
        </button>
        <h2>Registration</h2>
        <p className={css.text}>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information
        </p>

        <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={css.errorWrap}>
            <input
              type='text'
              {...register("displayName", { required: true, minLength: 3 })}
              placeholder='Name'
              className={css.input}
            />
            {errors.displayName && (
              <p className={css.error}>{errors.displayName.message}</p>
            )}
          </div>
          <div className={css.errorWrap}>
            <input
              type='email'
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
              type={showPassword ? "text" : "password"}
              {...register("password", { min: 8 })}
              placeholder='Password'
              className={css.input}
            />
            <span className={css.iconEye} onClick={togglePasswordVisibility}>
              {showPassword ? (
                <svg width='20' height='20'>
                  <use href={`${icons}#icon-eye`} />
                </svg>
              ) : (
                <svg width='20' height='20'>
                  <use href={`${icons}#icon-eye-off`} />
                </svg>
              )}
            </span>

            {errors.password && (
              <p className={css.error}>{errors.password.message}</p>
            )}
          </div>

          <button className={css.btnLogIn} type='submit'>
            Sign Up
          </button>
        </form>
      </div>
    </ReactModal>
  );
};

export default RegisterForm;
