import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import { useState, useEffect } from "react";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import fb from "./assets/fb.png";
import insta from "./assets/insta.png";
import arrow from "./assets/arrow.png";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";




function App() {
  scrollSpy.update();
 

  return (
    <div className="h-screen w-screen">
      <div className="absolute right-10 top-10 z-10 md:hidden">
        <div className="flex">
          <a
            href="https://www.facebook.com/profile.php?id=61550657502094"
            target="_blank"
          >
            <img src={fb} className="scale-75" alt="" />
          </a>
          <a href="https://www.instagram.com/farmschandraa/" target="_blank">
            <img src={insta} className="scale-75" alt="" />
          </a>
        </div>
      </div>

      <div name="home">
        <Home />
      </div>
      <div name="services">
        <Services />
      </div>
      <div name="gallery">
        <Gallery />
      </div>
      <div name="about">
        <About />
      </div>
      <div name="contact">
        <ContactUs />
      </div>

      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
