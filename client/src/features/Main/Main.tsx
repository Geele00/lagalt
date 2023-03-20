import { Outlet } from "@tanstack/react-router";
import { useTheme } from "../Theme/Theme.Provider";

const Main = () => {
  const { mode } = useTheme();

  return (
    <main className={`main-wrapper ${mode}`}>
      <Outlet />
    </main>
  );
};

export default Main;
