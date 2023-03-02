import "./style.scss";

interface ILoginInput {
  name: string;
  placeholder: string;
  className: string;
  type: string;
  maxLength: number;
}

export const LoginInput = ({ className, ...props }: ILoginInput) => {
  return (
    <input
      required
      minLength={5}
      autoComplete="off"
      className={`${className} auth-input`}
      {...props}
    />
  );
};
