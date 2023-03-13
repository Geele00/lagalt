import { Link } from "@tanstack/react-router";
import { useAuth } from "src/auth/Auth.Provider";
import "./ProfileButton.style.scss";

export const ProfileButton = () => {
  const { signOut, authState } = useAuth();

  const isSignedIn =
    !!authState.username && authState.username !== "anon" && "signed-in";

  return (
    <Link
      to="/$username"
      params={{ username: authState.username ?? "logg-inn" }}
      className="main-header__profile-button profile-button"
    >
      <div className={`profile-button__logo ${isSignedIn}`}>
        <div className={`profile-button__logo_top ${isSignedIn}`}></div>
        <div className={`profile-button__logo_bottom ${isSignedIn}`}></div>
      </div>
    </Link>
  );
};
