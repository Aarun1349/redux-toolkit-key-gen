import "./App.css";
import Navabar from "./components/Navabar";
import { Routes, Route } from "react-router-dom";
import Generate from "./components/Generate";
import SavedKeys from "./components/SavedKeys";
function App() {
  return (
    <div>
      <Navabar />
      <Routes>
        <Route exact path="/" element={<Generate />}></Route>
        <Route exact path="/savedkeys" element={<SavedKeys />}></Route>
      </Routes>
    </div>
  );
}

export default App;
