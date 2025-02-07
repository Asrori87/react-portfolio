import { useState } from "react";
// import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

const App = () => {
  // const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />} */}

      <main className="min-h-screen">
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
};

export default App;
