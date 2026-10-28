import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import CustomCursor from './components/ui/CustomCursor';
import ConstellationBackground from './components/ui/ConstellationBackground';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import HomelabSection from './sections/HomelabSection';
import Education from './sections/Education';
import Contact from './sections/Contact';

function App() {
  return (
    <BrowserRouter>
      <CustomCursor />
      <ConstellationBackground />
      <div className="min-h-screen flex flex-col font-sans selection:bg-accent selection:text-white cursor-default md:cursor-none text-primary bg-background">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Skills />
                <HomelabSection />
                <Education />
                <Contact />
              </>
            } />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
