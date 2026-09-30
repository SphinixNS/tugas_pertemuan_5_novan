import About from "./components/About";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Kontak from "./components/Kontak";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="main">
          
          {/* Routes */}
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Kontak />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
