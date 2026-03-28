import Nav from './components/Nav';
import Hero from './components/Hero';
import Services from './components/Services';
import Academy from './components/Academy';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen quantic-grid selection:bg-quantic-cyan selection:text-quantic-bg">
      <Nav />
      <main>
        <Hero />
        <Services />
        <Academy />
        <Portfolio />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
