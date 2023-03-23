import { lazy } from "react";
import { AuthProvider } from "src/auth/Auth.Provider";
import { Header } from "src/features/Header/Header";
import Main from "src/features/Main/Main";
import { OverlayProvider } from "src/features/Overlay/Overlay.Provider";
import { useTheme } from "src/features/Theme/Theme.Provider";

const DarkTheme = lazy(() => import("src/features/Theme/DarkTheme"));
const LightTheme = lazy(() => import("src/features/Theme/LightTheme"));

const App = () => {
  const { mode } = useTheme();

  // const blah =
  //   mode === "light-mode" ? (
  //     <LightTheme key={mode + "a"} />
  //   ) : (
  //     <DarkTheme key={mode + "b"} />
  //   );

  return (
    <OverlayProvider>
      <Header />
      <Main />
    </OverlayProvider>
  );
};

// {mode === "light-mode" && <LightTheme />}
// {mode === "dark-mode" && <DarkTheme />}

export default App;
