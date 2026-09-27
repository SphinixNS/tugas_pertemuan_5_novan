
import About from "./components/About";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero"
import Kontak from "./components/Kontak";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
    <Navbar/>
    <div className="main">
      <Hero />
      <About/>
      <Gallery/>
      <Kontak />
    </div>
    </>
  
    
  );
}

export default App;
