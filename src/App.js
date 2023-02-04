import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Profile from "./components/Profile";

export default function App() {
  return (
    <main className="text-blue-400 bg-white body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Profile />
      <Contact />
    </main>
  );
}
