import { Header } from "src/features/Header/Header";
import { ThemeProvider, useTheme } from "src/features/Theme/Theme.Provider";

import "src/App/App.style.scss";
import Main from "src/features/Main/Main";

const App = () => {
  return (
    <ThemeProvider>
      <Header />
      <Main />
    </ThemeProvider>
  );
};

export default App;
