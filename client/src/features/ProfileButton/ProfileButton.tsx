import "./style.scss";
import { useAuth } from "src/auth";

export const ProfileButton = () => {
  const { signOut, authState } = useAuth();

  const isSignedIn = authState.token && "signed-in";

  return (
    <button className="profile-button" onClick={signOut}>
      <div className={`profile-button__logo ${isSignedIn}`}>
        <div className={`profile-button__logo_top ${isSignedIn}`}></div>
        <div className={`profile-button__logo_bottom ${isSignedIn}`}></div>
      </div>
    </button>
  );
};
