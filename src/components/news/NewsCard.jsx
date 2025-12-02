// src/components/news/NewsCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const formatDate = (iso) => {
  return new Date(iso).toLocaleDateString("es-AR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const NewsCard = ({ item }) => {
  return (
    <Link to={`/news/${item.slug}`} className="block group">
      <article className="relative overflow-hidden rounded-2xl bg-slate-900/80 border border-slate-700/60 hover:border-violet-400/80 transition-all duration-300 shadow-lg hover:shadow-[0_0_40px_rgba(139,92,246,0.4)]">
        {/* Contenido */}
        <div className="p-5 flex flex-col gap-3">
          {/* Categoría + fecha */}
          <div className="flex items-center justify-between gap-2 text-[11px] uppercase tracking-wide">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/30">
              {item.category}
            </span>
            <span className="text-slate-400">{formatDate(item.publishedAt)}</span>
          </div>

          {/* Título */}
          <h3 className="text-lg font-semibold text-white leading-snug group-hover:text-violet-200 transition-colors">
            {item.title}
          </h3>

          {/* Resumen */}
          <p className="text-sm text-slate-300 line-clamp-3">
            {item.summary}
          </p>

          {/* Tags + tiempo lectura */}
          <div className="mt-2 flex items-center justify-between gap-2">
            <div className="flex flex-wrap gap-1">
              {item.tags?.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-[2px] rounded-full bg-slate-800 text-[11px] text-slate-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <span className="text-[11px] text-slate-400">
              {item.readingTime} min
            </span>
          </div>
        </div>

        {/* Línea de brillo abajo */}
        <div className="h-1 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-violet-500 opacity-60 group-hover:opacity-100 transition-opacity" />
      </article>
    </Link>
  );
};

export default NewsCard;
