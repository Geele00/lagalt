import "./App.scss";
import { Header } from "./Components/Header";
import { Feed } from "./Features/Feed";

function App() {
  return (
    <div className="app">
      <Header />
      <Feed />
    </div>
  );
}

export default App;
