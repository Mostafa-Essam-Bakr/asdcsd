import "./App.css";
import { Routes, Route, BrowserRouter, HashRouter } from "react-router-dom";
import Start from "./Start";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Start />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
