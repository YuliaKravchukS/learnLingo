import icons from "../../img/sprite.svg";
import css from "./RegisterForm.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

const schema = yup.object().shape({
  name: yup.string().required().min(3),
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

const RegisterForm = () => {
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
    <div>
      <svg className={css.icon}>
        <use href={`${icons}#icon-x`} />
      </svg>
      <h2>Registration</h2>
      <p>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: true, minLength: 3 })}
          placeholder='Name'
        />
        {errors.name && <p className={css.error}>{errors.name.message}</p>}
        <input
          {...register("email", { required: true, minLength: 8 })}
          placeholder='Email'
        />
        {errors.email && <p className={css.error}>{errors.email.message}</p>}
        <div>
          <input {...register("password", { min: 8 })} placeholder='Password' />
          <span className={css.icon} onClick={togglePasswordVisibility}>
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
        </div>
        {errors.password && (
          <p className={css.error}>{errors.password.message}</p>
        )}

        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
};

export default RegisterForm;
