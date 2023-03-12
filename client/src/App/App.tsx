import "./App.style.scss";
import { Outlet } from "@tanstack/react-router";
import { useEffect, useReducer } from "react";
import { Header } from "src/features/Header/Header";
import { overlayReducer } from "./App.helpers";
import { IApp } from "./App.types";

const App = ({ routeChanged }: IApp) => {
  const [activeOverlay, toggleOverlay] = useReducer(overlayReducer, null);

  useEffect(() => {
    toggleOverlay({ type: "close", overlay: null });
  }, [routeChanged]);

  return (
    <>
      <Header activeOverlay={activeOverlay} toggleOverlay={toggleOverlay} />
      <main>
        <div id="overlay"></div>
        <Outlet />
      </main>
    </>
  );
};

export default App;
