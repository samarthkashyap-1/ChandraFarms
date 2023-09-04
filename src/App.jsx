import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import {Routes, Route } from "react-router-dom";
import image from "./assets/back-1.jpg"
import logo from "./assets/logo.png"
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import About from "./pages/About";

function App() {
  const backgroundImageUrl = image;
  return (
    <div className="h-screen w-screen overflow-x-hidden">
      <Home/>
      <Services/>
      <Gallery/>
      <About/>
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
