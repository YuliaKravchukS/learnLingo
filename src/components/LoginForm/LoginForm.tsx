import icons from "../../img/sprite.svg";
import css from "./LoginForm.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

const schema = yup.object().shape({
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

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

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

  const onSubmit = (data: FormData) => console.log(data);
  return (
    <div className={css.modalOverlay}>
      <div className={css.overlay}>
        <svg className={css.icon}>
          <use href={`${icons}#icon-x`} />
        </svg>
        <h2>Log In</h2>
        <p className={css.text}>
          Welcome back! Please enter your credentials to access your account and
          continue your search for an teacher.
        </p>

        <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
         <div>
            <input
              {...register("email", { required: true, minLength: 8 })}
              placeholder='Email'
              className={css.input}
            />
            {errors.email && <p className={css.error}>{errors.email.message}</p>}
         </div>
          <div className={css.passwordInput}>
            <input
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
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
