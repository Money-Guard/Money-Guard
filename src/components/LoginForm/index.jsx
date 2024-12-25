import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../validations/LoginFormVal/LoginFormVal";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

const LoginForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const onSubmit = async (loginData) => {
    const response = await dispatch(login(loginData));
    if (response.type.includes("rejected")) {
      alert("Kullanıcı adı veya şifre yanlış");
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email")} placeholder="Lütfen email giriniz" />
      {errors.email && <p>{errors.email.message}</p>}

      <input
        {...register("password")}
        type="password"
        placeholder="Lütfen şifre giriniz"
      />
      {errors.password && <p>{errors.password.message}</p>}

      <input type="submit" />
    </form>
  );
};

export default LoginForm;
