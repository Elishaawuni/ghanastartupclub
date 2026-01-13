import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import CoreValues from './components/CoreValues';
import TheoryOfChange from './components/TheoryOfChange';
import Programs from './components/Programs';
import OngoingProjects from './components/OngoingProjects';
import GetInvolved from './components/GetInvolved';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-white">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <section id="home">
          <Hero setActiveSection={setActiveSection} />
        </section>
        <section id="about">
          <About />
          <CoreValues />
          <TheoryOfChange />
        </section>
        <section id="programs">
          <Programs />
        </section>
        <section id="ongoing-projects">
          <OngoingProjects />
        </section>
        <section id="get-involved">
          <GetInvolved />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer setActiveSection={setActiveSection} />
    </div>
  );
}

export default App;
