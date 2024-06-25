import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbars from "./components/navbar/Navbars";
import Home from "./components/home/Home";
import Etude from "./components/etude/Etude";
import Temoignage from "./components/temoignage/Temoignage";
import Contact from "./components/contact/Contact";
import Travaux from "./components/travaux/Travaux";

function App() {
  return (
    <div>
      <div className="App">
        <Navbars/>
        <Home />
        <Etude />
        <Temoignage />
        <Travaux />
        <Contact />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
