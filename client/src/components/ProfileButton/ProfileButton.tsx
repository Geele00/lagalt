import { ILoginButton } from ".";

export const ProfileButton = ({ username, ...props }: ILoginButton) => {
  return (
    <button {...props} className={`${props.className} profile-button`}>
      <div className="profile-button__logo">
        <div className="profile-button__logo_top"></div>
        <div className="profile-button__logo_bottom"></div>
      </div>
    </button>
  );
};
