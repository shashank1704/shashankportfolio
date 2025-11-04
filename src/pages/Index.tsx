
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Activities from '@/components/Activities';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Experience />
      <Activities />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
