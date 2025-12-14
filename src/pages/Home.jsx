import React from "react";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Hero from "../components/sections/Hero";
import WordCarousel from "../components/sections/WordCarousel";
import TopIAs from "../components/sections/TopIAs";
import ToolsPreview from "../components/sections/ToolsPreview";
import Courses from "../components/sections/Courses";
import NewsSection from "../components/sections/NewsSection";

function Home() {
  return (
    <>
      <div className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] font-sans">
        <Header />

        <main className="mt-16 space-y-24">
          <Hero />
          <WordCarousel />
          <TopIAs />
          <ToolsPreview />
          <Courses />
          <NewsSection />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default Home;