import { Outlet } from "@tanstack/react-router";

const Main = () => {
  return (
    <main className={`main-wrapper`}>
      <Outlet />
    </main>
  );
};

export default Main;
