import "./App.css";
import img from "./assets/PPC.jpg";
import Footer from "./components/footer/Footer";
import Nav from "./components/navbar/Nav";
import Home from "./components/screens/Home";
function App() {
  return (
    <>

      <header>
        <Nav />
      </header>
      <main className="">
        {/* <h2 className="">asdasd</h2> */}
        <Home />
      </main>

      <footer>
        <Footer />
      </footer>

    <header>
      <Nav/>
    </header>
    <main>
   
      <Home/>
    </main>
     <footer>
      <Footer/>
     </footer>
        

    </>
  );
}

export default App;
