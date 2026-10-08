import React from 'react';
import Hero from '../components/Hero';
import DeveloperStatus from '../components/DeveloperStatus';
import WorksWheel from '../components/WorksWheel';
import Skills from '../components/Skills';
import Journey from '../components/Journey';
import GitHubSection from '../components/GitHubSection';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 flex flex-col gap-16">
            <Hero />
          </div>
          <div className="lg:col-span-4 flex flex-col gap-12">
            <DeveloperStatus />
          </div>
        </div>

        {/* Full-width Skills Section */}
        <div className="mt-24">
          <Skills />
        </div>

        {/* Works Wheel - Full Width Section */}
        <div className="mt-16">
          <WorksWheel />
        </div>

        {/* Lower sections */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <Journey />
          </div>
          <div className="lg:col-span-4">
            <GitHubSection />
          </div>
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
