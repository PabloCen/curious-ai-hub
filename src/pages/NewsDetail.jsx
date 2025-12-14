// src/pages/NewsDetail.jsx
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { newsData as staticNews } from "../data/newsData";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { ArrowLeft, Clock, ExternalLink } from "lucide-react";

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
  const [error, setError] = useState(false);

  // Constants
  const API_URL = "http://localhost:5000/api/news";

  useEffect(() => {
    const fetchArticle = async () => {
      setLoading(true);
      setError(false);

      try {
        // 1. Try Backend API first
        const res = await fetch(`${API_URL}/${slug}`);
        if (res.ok) {
            const data = await res.json();
            setArticle(data);

            // Fetch related (optional, simple logic: fetch recent with same category)
            // Ideally backend provides this, but let's mock related or fetch list
            // For speed, skipping extra fetch for related, or using static for related.
        } else {
            // 2. Fallback to static data
            const staticFound = staticNews.find(n => n.slug === slug);
            if (staticFound) {
                setArticle(staticFound);
            } else {
                throw new Error("Not found");
            }
        }
      } catch (err) {
        console.error("Error loading article:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [slug]);

  if (loading) {
      return (
        <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <div className="w-10 h-10 border-4 border-[#9d4edd] border-t-transparent rounded-full animate-spin" />
                <p className="text-gray-400">Cargando artículo...</p>
            </div>
        </div>
      );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
            <div className="text-center p-8">
            <h1 className="text-3xl font-bold mb-4 text-gray-200">Noticia no encontrada</h1>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
                Es posible que el artículo haya sido eliminado o el enlace sea incorrecto.
            </p>
            <Link
                to="/news"
                className="px-6 py-3 rounded-xl bg-[#9d4edd] text-white font-semibold hover:bg-[#7B2CBF] transition-colors inline-flex items-center gap-2"
            >
                <ArrowLeft className="w-4 h-4" />
                Volver a noticias
            </Link>
            </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col">
      <Header />

      <main className="flex-grow pt-24 pb-16">
        {/* Banner Image */}
        <div className="w-full h-[400px] relative overflow-hidden">
            <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-full object-cover"
                onError={(e) => e.target.style.display = 'none'}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-90" />

            <div className="absolute bottom-0 left-0 w-full p-4 md:p-8 max-w-4xl mx-auto">
                <Link to="/news" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors text-sm">
                    <ArrowLeft className="w-4 h-4" /> Volver a noticias
                </Link>

                <span className="block text-[#9d4edd] font-bold tracking-wider uppercase text-sm mb-3">
                    {article.category}
                </span>

                <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 text-white">
                    {article.title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                    <span>{formatDate(article.publishedAt)}</span>
                    <span className="w-1 h-1 bg-gray-600 rounded-full" />
                    <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" /> {article.readTime || 5} min lectura
                    </span>
                    {article.sourceName && (
                        <>
                            <span className="w-1 h-1 bg-gray-600 rounded-full" />
                            <span>Fuente: {article.sourceName}</span>
                        </>
                    )}
                </div>
            </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 mt-8">
            <article className="prose prose-invert prose-lg max-w-none">
                {/* Description / Summary */}
                <p className="text-xl text-gray-300 leading-relaxed font-light mb-8 border-l-4 border-[#9d4edd] pl-6">
                    {article.description}
                </p>

                {/* Main Content (HTML safely or Text paragraphs) */}
                <div dangerouslySetInnerHTML={{ __html: article.content }} className="text-gray-300 leading-8" />

                {(!article.content || article.content.length < 50) && (
                    <div className="mt-8 p-6 bg-white/5 rounded-xl border border-white/10 text-center">
                        <p className="text-gray-400 mb-4">
                            Este es un resumen. Puedes leer el artículo completo en la fuente original.
                        </p>
                        <a
                            href={article.sourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors"
                        >
                            Leer artículo completo <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>
                )}
            </article>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-white/10">
                <h3 className="text-sm font-semibold text-gray-500 uppercase mb-4">Etiquetas</h3>
                <div className="flex flex-wrap gap-2">
                    {article.tags?.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NewsDetail;
