import { Header } from "src/features/Header/Header";
import Main from "src/features/Main/Main";
import ThemeWrapper from "src/features/Theme/ThemeWrapper";

const App = () => {
  return (
    <ThemeWrapper>
      <Header />
      <Main />
    </ThemeWrapper>
  );
};

export default App;
