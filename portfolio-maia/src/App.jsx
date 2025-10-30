import Menu from "./components/Menu";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import FeaturedProject from "./pages/FeaturedProject";
import DesignProcess from "./pages/DesignProcess";
import Tools from "./pages/Tools";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Menu />
      <Home />
      <Projects />
      <FeaturedProject />
      <DesignProcess />
      <Tools />
      <About />
      <Contact />

    </>
  );
}

export default App;
