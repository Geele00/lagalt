import "./style.scss";
import { useAuth } from "src/auth";

export const ProfileButton = () => {
  const { signOut, authState } = useAuth();

  const signedInClassname = authState.token
    ? "profile-button__logo-signed-in"
    : null;

  return (
    <button className="profile-button" onClick={signOut}>
      <div className={`profile-button__logo ${signedInClassname}`}>
        <div className="profile-button__logo_top"></div>
        <div className="profile-button__logo_bottom"></div>
      </div>
    </button>
  );
};
