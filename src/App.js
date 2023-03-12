import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import PracticeCarousel from "./components/PracticeCarousel";

export default function App() {
  return (
    <main className="text-blue-400 body-font">
      <Navbar />
      <About />
      <PracticeCarousel />
      <Skills />
      <Profile />
      <Contact />
    </main>
  );
}
