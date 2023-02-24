interface IAuthInput {
  name: string;
  placeholder: string;
  className: string;
}
export const AuthInput = ({ className, ...props }: IAuthInput) => {
  return (
    <input
      required
      type="text"
      minLength={5}
      maxLength={30}
      autoComplete="off"
      className={`${className} auth-input`}
      {...props}
    />
  );
};
