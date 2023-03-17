import { useNavigate } from "@tanstack/react-router";
import { useAuth } from "src/auth/Auth.Provider";
import { OverlayOptions } from "../Header.types";
import "./ProfileButton.style.scss";

interface IProps {
  activeOverlay: OverlayOptions["overlay"];
}

export const ProfileButton = ({ activeOverlay }: IProps) => {
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
      data-visible={activeOverlay === null ? true : false}
      className="profile-button"
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
