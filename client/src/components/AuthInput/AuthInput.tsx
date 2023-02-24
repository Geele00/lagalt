interface IAuthInput {
  name: string;
  placeholder: string;
  className: string;
  type: string;
}

export const AuthInput = ({ className, ...props }: IAuthInput) => {
  return (
    <input
      required
      minLength={5}
      maxLength={className.match("mail") ? 30 : 18}
      autoComplete="off"
      className={`${className} auth-input`}
      {...props}
    />
  );
};
