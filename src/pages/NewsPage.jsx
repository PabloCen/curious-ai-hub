// src/pages/NewsPage.jsx
import React, { useMemo, useState } from "react";
import { newsData } from "../data/newsData";
import NewsCard from "../components/news/NewsCard";

const NewsPage = () => {
  const [category, setCategory] = useState("Todas");
  const [search, setSearch] = useState("");

  const categories = ["Todas", "Noticias IA", "Herramientas", "Creatividad", "Audio", "Curiosidades", "Seguridad y ética"];

  const filtered = useMemo(() => {
    return newsData
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
  }, [category, search]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#050816] via-[#050816] to-[#020617] text-white pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* HERO */}
        <section className="mb-10">
          <p className="text-xs tracking-[0.25em] text-slate-400 uppercase mb-2">
            Noticias de Inteligencia Artificial
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
            Mantente al día con el{" "}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              mundo de la IA
            </span>
          </h1>
          <p className="text-slate-300 text-sm md:text-base max-w-2xl">
            Novedades, lanzamientos, herramientas y curiosidades sobre
            inteligencia artificial, explicadas en lenguaje sencillo.
          </p>
        </section>

        {/* FILTROS */}
        <section className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Categorías */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs border transition-all ${
                  category === cat
                    ? "bg-violet-500 text-white border-violet-400 shadow-[0_0_16px_rgba(139,92,246,0.6)]"
                    : "bg-slate-900/60 text-slate-300 border-slate-700 hover:border-violet-400 hover:text-violet-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Buscador */}
          <div className="w-full md:w-72">
            <input
              type="text"
              placeholder="Buscar noticias o herramientas..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-900/80 border border-slate-700 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-500/60"
            />
          </div>
        </section>

        {/* LISTA */}
        {filtered.length === 0 ? (
          <p className="text-slate-400 text-sm">
            No se encontraron noticias con esos filtros.
          </p>
        ) : (
          <section className="grid gap-4 md:grid-cols-2">
            {filtered.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </section>
        )}
      </div>
    </main>
  );
};

export default NewsPage;
