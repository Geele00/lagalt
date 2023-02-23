import { ReactNode } from "react";

interface IButton {
  children?: ReactNode;
  className: string;
}
export const Button = ({ children, className, ...props }: IButton) => {
  return (
    <button {...props} className={`${className}-button primary-button`}>
      {children}
    </button>
  );
};

export default Button;
