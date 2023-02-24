interface IAuthInput {
  name: string;
  placeholder: string;
  className: string;
  type: string;
  maxLength: number;
}

export const AuthInput = ({ className, ...props }: IAuthInput) => {
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
