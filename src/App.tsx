import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './hooks/use-theme';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import CustomCursor from './components/ui/CustomCursor';
import ConstellationBackground from './components/ui/ConstellationBackground';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import HomelabSection from './sections/HomelabSection';
import JourneySection from './sections/JourneySection';
import Education from './sections/Education';
import Contact from './sections/Contact';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <CustomCursor />
        <ConstellationBackground />
        <div className="min-h-screen flex flex-col font-sans selection:bg-accent selection:text-white cursor-default md:cursor-none text-primary bg-background transition-colors duration-300">
          <Header />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <About />
                  <Skills />
                  <Projects />
                  <HomelabSection />
                  <JourneySection />
                  <Education />
                  <Contact />
                </>
              } />
            </Routes>
          </main>
          
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
