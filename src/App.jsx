import { HomeView } from "./components/views/HomeView.jsx";
import { Navbar } from "./components/UI/Navbar.jsx";
import "./App.css";

function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <HomeView />
    </div>
  );
}

export default App;
