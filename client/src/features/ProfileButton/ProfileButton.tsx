import "./style.scss";
import { useAuth } from "src/auth/AuthProvider";

export const ProfileButton = () => {
  const { signOut, authState } = useAuth();

  console.log(authState);
  const signedInClassname = authState.signedIn
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
