import React from "react";
import { useForm } from "react-hook-form";

import { UserLoginBody } from "types/userTypes";
import { Button } from "ui";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<UserLoginBody>({
    shouldFocusError: true,
  });

  const onSubmit = (data: UserLoginBody) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">
          Email:
          <input type="email" {...register("email")} />
        </label>

        <label htmlFor="password">
          Password:
          <input type="password" {...register("password")} />
        </label>

        <Button disabled={isSubmitting} type="submit">
          Logar
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
