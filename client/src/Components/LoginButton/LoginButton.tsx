import "./LoginButton.scss";

interface ILoginButton {
  username: string;
  className?: string;
}

export const LoginButton = ({ username, ...props }: ILoginButton) => {
  return (
    <button {...props} className={`${props.className} login-button`}>
      <div className="login-button__logo">
        <div className="login-button__logo_top"></div>
        <div className="login-button__logo_bottom"></div>
      </div>
    </button>
  );
};
