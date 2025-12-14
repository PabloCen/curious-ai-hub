// src/pages/NewsDetail.jsx
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { newsData } from "../data/newsData";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const formatDate = (iso) => {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("es-AR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

const NewsDetail = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const findArticle = async () => {
      setLoading(true);

      // 1. Try static data first
      let found = newsData.find((n) => n.slug === slug);
      let allNews = newsData;

      // 2. If not found, try dynamic data
      if (!found) {
        try {
            const res = await fetch('/data/news.json');
            if (res.ok) {
                const dynamicNews = await res.json();
                found = dynamicNews.find(n => n.slug === slug);
                allNews = dynamicNews; // Use dynamic news for related items if article is dynamic
            }
        } catch (e) {
            console.error("Error fetching dynamic news details", e);
        }
      }

      setArticle(found || null);

      if (found) {
          const relatedItems = allNews
            .filter((n) => n.id !== found.id && n.category === found.category)
            .slice(0, 3);
          setRelated(relatedItems);
      }

      setLoading(false);
    };

    findArticle();
  }, [slug]);

  if (loading) {
      return (
        <div className="min-h-screen bg-[#050816] text-white flex items-center justify-center">
            <div className="animate-pulse">Cargando noticia...</div>
        </div>
      );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-[#050816] text-white flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
            <div className="text-center">
            <h1 className="text-2xl font-bold mb-2">Noticia no encontrada</h1>
            <p className="text-gray-400 mb-4">La noticia que buscas no existe o ha sido movida.</p>
            <Link
                to="/news"
                className="text-violet-400 hover:text-violet-300 underline"
            >
                Volver a noticias
            </Link>
            </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#050816] via-[#050816] to-[#020617] text-white flex flex-col">
      <Header />

      <main className="flex-grow pt-24 pb-16">
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
                onError={(e) => {
                    e.target.style.display = 'none'; // Hide if fails
                }}
                />
            </div>
            )}

            {/* Contenido */}
            <article className="prose prose-invert prose-sm md:prose-base max-w-none prose-headings:text-white prose-p:text-slate-200 prose-a:text-violet-400"
                dangerouslySetInnerHTML={{ __html: article.content }} // Using HTML for flexibility with mock data
            >
            {/* Fallback if content is just text */}
            {!article.content.includes('<') && article.content.split("\n").map((paragraph, idx) => (
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

      <Footer />
    </div>
  );
};

export default NewsDetail;
