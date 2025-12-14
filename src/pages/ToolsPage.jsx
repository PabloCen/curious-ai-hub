import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Tools from '../components/sections/Tools';

const ToolsPage = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <Tools />
      </main>
      <Footer />
    </div>
  );
};

export default ToolsPage;
