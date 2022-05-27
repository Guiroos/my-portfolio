import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Stacks from "./components/Stacks";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Stacks />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
