import { Link } from "@tanstack/react-router";
import { useAuth } from "src/auth/AuthProvider";
import "./style.scss";

export const ProfileButton = () => {
  const { signOut, authState } = useAuth();

  const isSignedIn = authState.token && "signed-in";

  return (
    <Link
      to="/$username"
      params={{ username: authState.username ?? "ny-bruker" }}
      className="main-header__profile-button profile-button"
    >
      <div className={`profile-button__logo ${isSignedIn}`}>
        <div className={`profile-button__logo_top ${isSignedIn}`}></div>
        <div className={`profile-button__logo_bottom ${isSignedIn}`}></div>
      </div>
    </Link>
  );
};
