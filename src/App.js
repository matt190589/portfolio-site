import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import CarouselItem from "./components/Carousel";
import PracticeCarousel from "./components/PracticeCarousel";

export default function App() {
  return (
    <main className="text-blue-400 body-font">
      <Navbar />
      <About />
      <Projects />
      {/* <CarouselItem /> */}
      <Skills />
      <Profile />
      <Contact />
      <PracticeCarousel />
    </main>
  );
}
