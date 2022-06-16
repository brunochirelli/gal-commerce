import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, ...buttonProps }: ButtonProps) => {
  return <button {...buttonProps}>{children}</button>;
};
