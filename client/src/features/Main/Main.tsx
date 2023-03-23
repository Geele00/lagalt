import { Outlet } from "@tanstack/react-router";
import { useOverlay } from "../Overlay/Overlay.Provider";
import "./Main.style.scss";

const Main = () => {
  const { activeOverlay } = useOverlay();

  return (
    <>
      <div id="overlay-container" />

      <main className={`main-wrapper`} aria-hidden={activeOverlay === "search"}>
        <Outlet />
      </main>
    </>
  );
};

export default Main;
