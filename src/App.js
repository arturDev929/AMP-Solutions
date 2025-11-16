import Home from "./pages/home";
import Service from "./pages/service";
import Projects from "./pages/projects";
import Sobre from "./pages/about";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<Sobre />} />
      </Routes>
    </Router>
  );
}

export default App;
