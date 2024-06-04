import { Route, Routes, Outlet } from "react-router-dom";
import "./App.css";
import img from "./assets/PPC.jpg";
import Footer from "./components/footer/Footer";
import Nav from "./components/navbar/Nav";
import Home from "./components/screens/Home";
import SignIn from "./components/screens/SignIn";
import SeedsHero from "./components/screens/SeedsComponents/SeedsHero";

function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <header>
        <Nav />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/seeds" element={<SeedsHero />} />
          <Route path="/signin" element={<SignIn/>} />
        </Routes>

       
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
