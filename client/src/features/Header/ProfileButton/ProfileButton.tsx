import { useNavigate } from "@tanstack/react-router";
import { useAuth } from "src/auth/Auth.Provider";
import "./ProfileButton.style.scss";

export const ProfileButton = () => {
  const { signOut, authState } = useAuth();

  const nav = useNavigate();

  const signedInUsername = authState.username;

  const isSignedIn =
    !!signedInUsername && signedInUsername !== "anon" && "signed-in";

  const paramsUsername =
    !!signedInUsername && signedInUsername !== "anon"
      ? signedInUsername
      : "logg-inn";

  return (
    <button
      className="main-header__profile-button profile-button"
      onPointerUp={() =>
        nav({ to: "/$username", params: { username: paramsUsername } })
      }
    >
      <div className={`profile-button__logo ${isSignedIn}`}>
        <div className={`profile-button__logo_top ${isSignedIn}`}></div>
        <div className={`profile-button__logo_bottom ${isSignedIn}`}></div>
      </div>
    </button>
  );
};
