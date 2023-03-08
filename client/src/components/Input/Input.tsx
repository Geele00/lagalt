import { InputHTMLAttributes } from "react";
import "./style.scss";

interface InputProps {
  className?: string;
}

export const Input = ({
  className,
  ...props
}: InputHTMLAttributes<InputProps>) => {
  return <input className={`${className} main-input`} {...props} />;
};
