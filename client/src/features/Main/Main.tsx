import { Outlet } from "@tanstack/react-router";
import "./Main.style.scss";

const Main = () => {
  return (
    <main className={`main-wrapper`}>
      <Outlet />
    </main>
  );
};

export default Main;
