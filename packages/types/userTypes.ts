export interface User {
  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  cartId?: string;
}

export type UserRegisterBody = {
  confirmPassword: string;
  confirmEmail: string;
} & Omit<User, "cartId" | "id">;
export type UserLoginBody = Pick<User, "email" | "password">;
