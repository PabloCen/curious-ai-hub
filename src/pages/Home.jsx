import React from "react";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Hero from "../components/sections/Hero";
import WordCarousel from "../components/sections/WordCarousel";
import TopIAs from "../components/sections/TopIAs";
import Tools from "../components/sections/Tools";
import Courses from "../components/sections/Courses";
import Quiz from "../components/sections/Quiz";
import NewsSection from "../components/sections/NewsSection";
import CustomCursor from "../components/ui/CustomCursor";

function Home() {
  return (
    <>
      <CustomCursor />

      <div className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] font-sans">
        <Header />

        <main className="mt-16 space-y-24">
          <Hero />
          <WordCarousel />
          <TopIAs />
          <Tools />
          <Quiz />
          <Courses />
          <NewsSection />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default Home;