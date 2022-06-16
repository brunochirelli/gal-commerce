import React from "react";
import { useForm } from "react-hook-form";
import { UserRegisterBody } from "types/userTypes";
import { Button } from "ui";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<UserRegisterBody>({
    shouldFocusError: true,
  });

  const onSubmit = (data: UserRegisterBody) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="firstName">
          First Name:
          <input type="text" {...register("firstName", { required: true })} />
        </label>

        <label htmlFor="lastName">
          Last Name:
          <input type="text" {...register("lastName", { required: true })} />
        </label>

        <label htmlFor="email">
          Email:
          <input type="email" {...register("email", { required: true })} />
        </label>

        <label htmlFor="confirmEmail">
          Confirm Email:
          <input
            type="email"
            {...register("confirmEmail", { required: true })}
          />
        </label>

        <label htmlFor="password">
          Password:
          <input
            type="password"
            {...register("password", { required: true })}
          />
        </label>

        <label htmlFor="confirmPassword">
          Confirm Password:
          <input
            type="password"
            {...register("confirmPassword", { required: true })}
          />
        </label>

        <Button disabled={isSubmitting} type="submit">
          Registrar
        </Button>
      </form>
    </div>
  );
};

export default RegisterForm;
