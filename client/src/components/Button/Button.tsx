import { ButtonHTMLAttributes } from "react";

interface IButton {
  children?: any;
  className?: string;
}
export const Button = ({
  children,
  className,
  ...props
}: ButtonHTMLAttributes<IButton>) => {
  return (
    <button {...props} className={`${className} primary-button`}>
      {children}
    </button>
  );
};

export default Button;
