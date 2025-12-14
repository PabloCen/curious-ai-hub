// src/pages/NewsPage.jsx
import React, { useMemo, useState, useEffect } from "react";
import { Search, RotateCw, Newspaper, Filter } from "lucide-react";
import NewsCard from "../components/news/NewsCard";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { newsData as staticNewsData } from "../data/newsData";

const NewsPage = () => {
  const [category, setCategory] = useState("Todas");
  const [search, setSearch] = useState("");
  const [news, setNews] = useState([]); // Start empty, fetch on mount
  const [loading, setLoading] = useState(true);
  const [usingFallback, setUsingFallback] = useState(false);

  const categories = ["Todas", "Noticias Generales", "Herramientas", "Investigación", "Industria", "Noticias IA", "Creatividad", "Curiosidades"];

  // Fetch news on mount
  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await fetch('/data/news.json');
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        setNews(data);
        setUsingFallback(false);
      } catch (error) {
        console.warn("Could not fetch dynamic news, falling back to static data", error);
        setNews(staticNewsData);
        setUsingFallback(true);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const filtered = useMemo(() => {
    return news
      .filter((n) =>
        category === "Todas" ? true : n.category === category
      )
      .filter((n) => {
        if (!search.trim()) return true;
        const text = (n.title + n.summary + n.tags?.join(" ")).toLowerCase();
        return text.includes(search.toLowerCase());
      })
      .sort(
        (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
      );
  }, [category, search, news]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col">
      <Header />

      <main className="flex-grow pt-24 pb-16 px-4">
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
              Actualizado diariamente.
            </p>
            {usingFallback && (
               <p className="text-xs text-orange-400 mt-2 flex items-center gap-1">
                 ⚠️ Mostrando contenido archivado (modo offline)
               </p>
            )}
          </section>

          {/* CONTROLS */}
          <section className="mb-8 bg-[#1a1a1a] rounded-2xl p-4 border border-white/5 shadow-lg">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">

              {/* Categorías */}
              <div className="w-full md:w-auto overflow-x-auto pb-2 md:pb-0 no-scrollbar">
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-gray-500 hidden md:block" />
                  {categories.slice(0, 5).map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setCategory(cat)}
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

              {/* Buscador */}
              <div className="w-full md:w-80 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  placeholder="Buscar noticias..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-[#0a0a0a] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#9d4edd] focus:ring-1 focus:ring-[#9d4edd] transition-all"
                />
              </div>
            </div>
          </section>

          {/* CONTENT */}
          {loading ? (
             <div className="flex flex-col items-center justify-center py-20">
                <RotateCw className="w-8 h-8 text-[#9d4edd] animate-spin mb-4" />
                <p className="text-gray-400">Cargando noticias...</p>
             </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-20 bg-[#1a1a1a] rounded-2xl border border-white/5 border-dashed">
              <p className="text-gray-400 text-lg">
                No se encontraron noticias para "{search}" en {category}.
              </p>
              <button
                onClick={() => {setCategory("Todas"); setSearch("");}}
                className="mt-4 text-[#9d4edd] hover:underline"
              >
                Limpiar filtros
              </button>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((item, index) => (
                <NewsCard key={item.id} item={item} style={{ animationDelay: `${index * 0.05}s` }} />
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NewsPage;
