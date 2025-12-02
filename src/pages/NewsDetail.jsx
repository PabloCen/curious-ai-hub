// src/pages/NewsDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { newsData } from "../data/newsData";

const formatDate = (iso) => {
  return new Date(iso).toLocaleDateString("es-AR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

const NewsDetail = () => {
  const { slug } = useParams();
  const article = newsData.find((n) => n.slug === slug);

  if (!article) {
    return (
      <main className="min-h-screen bg-[#050816] text-white pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Noticia no encontrada</h1>
          <Link
            to="/news"
            className="text-violet-400 hover:text-violet-300 underline"
          >
            Volver a noticias
          </Link>
        </div>
      </main>
    );
  }

  const related = newsData
    .filter((n) => n.id !== article.id && n.category === article.category)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#050816] via-[#050816] to-[#020617] text-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Volver */}
        <div className="mb-4">
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-violet-300"
          >
            ← Volver a noticias
          </Link>
        </div>

        {/* Cabecera */}
        <header className="mb-8">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-400 mb-2">
            {article.category}
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
            <span>{formatDate(article.publishedAt)}</span>
            <span>•</span>
            <span>{article.readingTime} min de lectura</span>
            {article.sourceName && (
              <>
                <span>•</span>
                <a
                  href={article.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-violet-400 hover:text-violet-300 underline"
                >
                  Fuente: {article.sourceName}
                </a>
              </>
            )}
          </div>
        </header>

        {/* Imagen (opcional) */}
        {article.imageUrl && (
          <div className="mb-8 overflow-hidden rounded-2xl border border-slate-800">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-64 object-cover"
            />
          </div>
        )}

        {/* Contenido */}
        <article className="prose prose-invert prose-sm md:prose-base max-w-none prose-headings:text-white prose-p:text-slate-200 prose-a:text-violet-400">
          {article.content
            .trim()
            .split("\n")
            .filter((p) => p.trim().length > 0)
            .map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
        </article>

        {/* Relacionadas */}
        {related.length > 0 && (
          <section className="mt-10 border-t border-slate-800 pt-6">
            <h2 className="text-sm font-semibold text-slate-200 mb-4">
              Noticias relacionadas
            </h2>
            <div className="grid gap-3 md:grid-cols-2">
              {related.map((item) => (
                <Link
                  key={item.id}
                  to={`/news/${item.slug}`}
                  className="block p-3 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-violet-400/70 hover:bg-slate-900 transition-all text-sm"
                >
                  <p className="font-semibold text-slate-100 mb-1">
                    {item.title}
                  </p>
                  <p className="text-slate-400 text-xs line-clamp-2">
                    {item.summary}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default NewsDetail;
