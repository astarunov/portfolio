import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav/Nav";
import Works from "./components/Works/Works";
function App() {
  return (
    <div className="overflow-x-hidden">
      <Nav />
      <Hero />
      <About />
      <Works />
      <Footer />
    </div>
  );
}

export default App;
