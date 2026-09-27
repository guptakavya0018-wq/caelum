import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';
import Stats from './components/Stats';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-dark-950 selection:bg-primary-900 selection:text-primary-50">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        <Stats />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
