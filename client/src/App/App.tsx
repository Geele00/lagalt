import "./App.style.scss";
import { Outlet } from "@tanstack/react-router";
import { Header } from "src/features/Header/Header";
import { Explore } from "src/features/Explore/Explore";

const App = () => {
  return (
    <>
      <Header />
      <Explore />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default App;
