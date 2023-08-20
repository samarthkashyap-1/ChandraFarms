import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import {Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
<Routes>
  <Route path="/" element={<Home/>}/>


</Routes>

        <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
