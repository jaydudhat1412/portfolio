import React from 'react';
import Hero from '../components/Hero';
import WorksWheel from '../components/WorksWheel';
import DeveloperStatus from '../components/DeveloperStatus';
import Skills from '../components/Skills';
import Journey from '../components/Journey';
import Contact from '../components/Contact';
import TerminalSection from '../components/TerminalSection';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-16">
        {/* Hero Section: Full Width, spacious, uncompressed */}
        <Hero />

        {/* Featured Projects & Engineering Showcase */}
        <div className="mt-24">
          <WorksWheel />
        </div>

        {/* Full-width Technical Arsenal Section */}
        <div className="mt-24">
          <Skills />
        </div>

        {/* Academic Journey & Live Developer Telemetry */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <Journey />
          </div>
          <div className="lg:col-span-5">
            <DeveloperStatus />
          </div>
        </div>

        {/* Interactive Developer Shell / CLI */}
        <div className="mt-24">
          <TerminalSection />
        </div>

        <div className="mt-24">
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
