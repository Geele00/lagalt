import "./App.style.scss";
import { Outlet } from "@tanstack/react-router";
import { Header } from "src/features/Header/Header";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <div id="overlay"></div>
        <Outlet />
      </main>
    </>
  );
};

export default App;
