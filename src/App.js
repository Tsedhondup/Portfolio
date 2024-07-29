import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// COMPONENTS
import Header from "./Components/Header/Header";
import HomePage from "./Pages/HomePage/HomePage";
import AboutPage from "./Pages/AboutPage/AboutPage";
function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/About" element={<AboutPage />} />
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
