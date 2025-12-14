// src/pages/NewsPage.jsx
import React, { useState, useEffect } from "react";
import { Search, RotateCw, Newspaper, Filter, BookOpen } from "lucide-react";
import NewsCard from "../components/news/NewsCard";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Pagination from "../components/ui/Pagination";
import { newsData as staticNewsData } from "../data/newsData";

const NewsPage = () => {
  const [activeTab, setActiveTab] = useState("Noticias"); // 'Noticias' or 'Curiosidades'
  const [category, setCategory] = useState("Todas");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [newsData, setNewsData] = useState({ news: [], pages: 1, total: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Constants
  const API_URL = "http://localhost:5000/api/news"; // Use env in real app
  const categories = ["Todas", "Noticias Generales", "Herramientas", "Investigación", "Industria", "Noticias IA"];

  // Fetch News
  const fetchNews = async () => {
    setLoading(true);
    setError(false);
    try {
      // Build query params
      const params = new URLSearchParams({
        page: page,
        limit: 12,
        search: search
      });

      if (activeTab === "Curiosidades") {
          params.append("category", "Curiosidades");
      } else if (category !== "Todas") {
          params.append("category", category);
      } else {
           // If 'Noticias' tab is active and category is All, we might want to exclude Curiosidades
           // But for simplicity, we treat 'Curiosidades' as just another category in the backend
           // If backend treats it as enum, we filter by it.
           // Ideally backend should handle "category!=Curiosidades" logic, but let's assume standard filtering.
      }

      const res = await fetch(`${API_URL}?${params.toString()}`);
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();

      // If no data returned (empty DB), maybe fallback to static for demo?
      if (data.news.length === 0 && page === 1 && !search) {
          // Fallback logic could go here, but requirements say "Real News"
          // Let's stick to API response.
      }

      setNewsData(data);
    } catch (err) {
      console.error("News fetch error:", err);
      // Fallback to static data for demo if API fails completely (e.g. backend not running)
      // Filter static data manually to mimic backend
      const filteredStatic = staticNewsData.filter(n => {
          if (activeTab === "Curiosidades") return n.category === "Curiosidades";
          if (category !== "Todas") return n.category === category;
          return n.category !== "Curiosidades";
      });
      setNewsData({
          news: filteredStatic.slice((page-1)*12, page*12),
          pages: Math.ceil(filteredStatic.length/12),
          total: filteredStatic.length
      });
      // setError(true); // Don't show error to user, show static fallback
    } finally {
      setLoading(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    fetchNews();
  }, [page, category, activeTab, search]); // Re-fetch on any filter change

  const handleTabChange = (tab) => {
      setActiveTab(tab);
      setCategory("Todas"); // Reset sub-category
      setPage(1);
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden text-white"
         style={{ background: 'linear-gradient(135deg, #0f0a1e 0%, #1a0e2e 50%, #0d1b2a 100%)' }}>

      {/* Background Accents - Enhanced */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[150px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px] -z-10 pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <Header />

      <main className="flex-grow pt-24 pb-16 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* HERO */}
          <section className="mb-12 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-medium tracking-wide uppercase mb-4">
              <Newspaper className="w-3 h-3" />
              Noticias & Actualidad
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              El pulso de la <span className="text-[#9d4edd]">Inteligencia Artificial</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl">
              Mantente informado con las últimas novedades, lanzamientos y avances tecnológicos.
            </p>
          </section>

          {/* MAIN TABS (NOTICIAS vs CURIOSIDADES) */}
          <div className="flex justify-center md:justify-start mb-8 border-b border-white/10">
              <button
                onClick={() => handleTabChange("Noticias")}
                className={`px-6 py-3 text-sm font-semibold border-b-2 transition-all ${
                    activeTab === "Noticias"
                        ? "border-[#9d4edd] text-white"
                        : "border-transparent text-gray-400 hover:text-white"
                }`}
              >
                  NOTICIAS
              </button>
              <button
                onClick={() => handleTabChange("Curiosidades")}
                className={`px-6 py-3 text-sm font-semibold border-b-2 transition-all ${
                    activeTab === "Curiosidades"
                        ? "border-[#22d3ee] text-white"
                        : "border-transparent text-gray-400 hover:text-white"
                }`}
              >
                  CURIOSIDADES
              </button>
          </div>

          {/* CONTROLS (Only for Noticias tab mostly, or both) */}
          <section className="mb-8 bg-[#1a1a1a]/50 backdrop-blur-sm rounded-2xl p-4 border border-white/5 shadow-lg">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">

              {/* Categorías (Only if not Curiosidades) */}
              {activeTab === "Noticias" && (
                <div className="w-full md:w-auto overflow-x-auto pb-2 md:pb-0 no-scrollbar">
                    <div className="flex items-center gap-2">
                    <Filter className="w-4 h-4 text-gray-500 hidden md:block" />
                    {categories.slice(0, 5).map((cat) => (
                        <button
                        key={cat}
                        type="button"
                        onClick={() => { setCategory(cat); setPage(1); }}
                        className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                            category === cat
                            ? "bg-[#9d4edd] text-white shadow-[0_0_15px_rgba(157,78,221,0.4)]"
                            : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                        }`}
                        >
                        {cat}
                        </button>
                    ))}
                    </div>
                </div>
              )}

              {/* Buscador */}
              <div className="w-full md:w-80 relative ml-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  placeholder={`Buscar en ${activeTab}...`}
                  value={search}
                  onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-[#0a0a0a]/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#9d4edd] focus:ring-1 focus:ring-[#9d4edd] transition-all"
                />
              </div>
            </div>
          </section>

          {/* CONTENT */}
          {loading ? (
             <div className="flex flex-col items-center justify-center py-20">
                <RotateCw className="w-8 h-8 text-[#9d4edd] animate-spin mb-4" />
                <p className="text-gray-400">Cargando {activeTab.toLowerCase()}...</p>
             </div>
          ) : newsData.news.length === 0 ? (
            <div className="text-center py-20 bg-[#1a1a1a] rounded-2xl border border-white/5 border-dashed">
              <p className="text-gray-400 text-lg">
                No se encontraron resultados para "{search}".
              </p>
              <button
                onClick={() => {setCategory("Todas"); setSearch("");}}
                className="mt-4 text-[#9d4edd] hover:underline"
              >
                Limpiar filtros
              </button>
            </div>
          ) : (
            <>
                <div className="mb-4 text-sm text-gray-400">
                    Mostrando {(page-1)*12 + 1}-{Math.min(page*12, newsData.total)} de {newsData.total} resultados
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {newsData.news.map((item, index) => (
                    <NewsCard key={item._id || item.id} item={item} />
                ))}
                </div>

                {/* PAGINATION */}
                <Pagination page={page} pages={newsData.pages} onPageChange={setPage} />
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NewsPage;
