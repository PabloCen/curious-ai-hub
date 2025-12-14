import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Tools from '../components/sections/Tools';

const ToolsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#110c1f] to-[#0a0a0a] flex flex-col relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <Header />
      <main className="flex-grow pt-16 relative z-10">
        <Tools />
      </main>
      <Footer />
    </div>
  );
};

export default ToolsPage;
