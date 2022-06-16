import { Request } from "express";

export interface User {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  cartId?: string;
}

export type UserRegisterBody = Omit<User, "cartId">;
export type UserLoginBody = Pick<User, "email" | "password">;
