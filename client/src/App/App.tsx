import { Header } from "src/features/Header/Header";
import { ThemeProvider } from "src/features/Theme/Theme.Provider";
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
