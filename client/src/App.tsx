import "./App.scss";
import { Header } from "src/Components/Header";
import { Feed } from "src/Features/Feed";

function App() {
  return (
    <div className="app">
      <Header />
      <Feed />
    </div>
  );
}

export default App;
