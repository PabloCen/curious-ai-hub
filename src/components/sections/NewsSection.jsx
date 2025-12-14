import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Newspaper } from "lucide-react";

// Fallback data in case fetch fails
import { newsData as staticNews } from "../../data/newsData";

const NewsSection = () => {
  const navigate = useNavigate();
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Try to fetch from generated JSON
    fetch('/data/news.json')
      .then(res => {
        if (!res.ok) throw new Error("Failed to load news");
        return res.json();
      })
      .then(data => {
        setNews(data.slice(0, 4)); // Get first 4
      })
      .catch(err => {
        console.warn("News fetch failed, using static data", err);
        setNews(staticNews.slice(0, 4));
      });
  }, []);

  return (
    <section className="py-20 px-4 md:px-8 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0a0a0a] to-[#0f0f1a] -z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-medium tracking-wide uppercase mb-4">
                    <Newspaper className="w-3 h-3" />
                    Actualidad
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Últimas noticias de IA
                </h2>
                <p className="text-gray-400 max-w-xl">
                Una mirada rápida a lo que está pasando en el mundo de la
                inteligencia artificial: avances, usos reales y curiosidades.
                </p>
            </div>

            <button
                onClick={() => navigate("/news")}
                className="hidden md:flex items-center gap-2 text-[#9d4edd] font-semibold hover:text-white transition-colors group"
            >
                Ver todas las noticias
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {news.map((item, index) => (
            <article
              key={item.id || index}
              className="card-glow-border bg-[#131313] rounded-2xl overflow-hidden flex flex-col group border border-white/5 hover:border-purple-500/30 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="h-40 bg-gradient-to-br from-[#1a0b2e] to-[#2d1b4e] relative overflow-hidden">
                   {/* Placeholder logic or actual image if available */}
                   <div className="absolute inset-0 flex items-center justify-center text-purple-300/20 text-4xl font-bold">
                        AI
                   </div>
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              </div>

              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-gray-400 border border-white/5">
                        {item.category || "General"}
                    </span>
                    <span className="text-xs text-purple-400">
                        {item.publishedAt ? new Date(item.publishedAt).toLocaleDateString() : "Reciente"}
                    </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 flex-1 line-clamp-3 mb-4">{item.summary}</p>

                <button
                  type="button"
                  onClick={() => navigate(`/news`)} // Could go to detail if implemented
                  className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors"
                >
                  Leer más
                  <span className="text-base text-purple-400">↗</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile Button */}
        <div className="mt-10 text-center md:hidden">
          <button
            onClick={() => navigate("/news")}
            className="px-6 py-3 rounded-2xl bg-[#9d4edd] hover:bg-[#7B2CBF] font-semibold text-white shadow-[0_0_18px_rgba(157,78,221,0.7)] w-full"
          >
            Ver todas las noticias
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
