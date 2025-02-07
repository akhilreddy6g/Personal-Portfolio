import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutTags from './components/AboutTags';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Achievements from "./components/Achievements";
import Contact from './components/Contact';
import { setupScrollAnimations } from './utils/animations';

function App() {
  useEffect(() => {
    setupScrollAnimations();
    async function fetchInstituitionData(){
      await fetch(import.meta.env.VITE_API_URL, {method: "POST"})
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .catch(error => {
      console.info(error)
    })}
    fetchInstituitionData();
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-black/60 via-blue-950 to-black/60 text-gray-100">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Achievements />
        <Experience />
        <Education />
        <AboutTags />
        <Contact />
      </main>
      <footer className="py-6 text-center text-gray-400">
        <p>© {new Date().getFullYear()} Akhil Reddy Gaddam. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;