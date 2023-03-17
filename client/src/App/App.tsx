import "./App.style.scss";
import { Outlet } from "@tanstack/react-router";
import { Header } from "src/features/Header/Header";
import SubHeader from "src/features/SubHeader/SubHeader";

const App = () => {
  return (
    <>
      <Header />
      <SubHeader />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default App;
