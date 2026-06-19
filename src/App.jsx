import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Problem from './sections/Problem';
import Solution from './sections/Solution';
import Features from './sections/Features';
import HowItWorks from './sections/HowItWorks';
import Benefits from './sections/Benefits';
import PlatformSupport from './sections/PlatformSupport';
import Screenshots from './sections/Screenshots';
// import Testimonials from './sections/Testimonials';
import Faq from './sections/Faq';
import FinalCta from './sections/FinalCta';
import Footer from './sections/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  const [page, setPage] = useState('home');

  const navigateTo = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (page === 'privacy') {
    return <PrivacyPolicy onBack={() => navigateTo('home')} />;
  }

  return (
    <div className="relative min-h-screen text-slate-100 bg-[#030712] overflow-x-hidden font-sans">
      {/* Background radial effects */}
      <div className="absolute top-0 bottom-0 left-0 right-0 pointer-events-none z-0">
        <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-brand-indigo/5 blur-[120px] rounded-full" />
        <div className="absolute top-[35%] right-[5%] w-[450px] h-[450px] bg-brand-cyan/5 blur-[130px] rounded-full" />
        <div className="absolute top-[65%] left-[8%] w-[380px] h-[380px] bg-brand-fuchsia/5 blur-[120px] rounded-full" />
        <div className="absolute top-[85%] right-[10%] w-[500px] h-[500px] bg-brand-purple/5 blur-[150px] rounded-full" />
      </div>

      {/* Page Header */}
      <Navbar />

      {/* Page Sections */}
      <main className="relative z-10">
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <HowItWorks />
        <Benefits />
        <PlatformSupport />
        <Screenshots />
        {/* <Testimonials /> */}
        <Faq />
        <FinalCta />
      </main>

      {/* Page Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}

export default App;
