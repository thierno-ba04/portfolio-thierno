import "./App.css";
import Portfolio from "./Portfolio";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <div className="App">
        <Portfolio />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
