import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// COMPONENTS
import HomePage from "./Pages/HomePage/HomePage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import Footers from "./Components/Footers/Footers";
function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/About" element={<AboutPage />} />
          </Routes>
          <Footers />
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
