// src/components/news/NewsCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const formatDate = (iso) => {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("es-AR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const NewsCard = ({ item }) => {
  // Use a reliable fallback if image is missing
  const imageUrl = item.imageUrl || `https://placehold.co/600x400/1a1a1a/FFF?text=${encodeURIComponent(item.category || 'AI News')}`;

  return (
    <Link to={`/news/${item.slug}`} className="block group h-full">
      <article className="relative h-full flex flex-col overflow-hidden rounded-2xl bg-[#131313] border border-white/5 hover:border-[#9d4edd]/50 transition-all duration-300 shadow-lg group-hover:shadow-[0_0_30px_rgba(157,78,221,0.2)]">

        {/* Image Section */}
        <div className="h-48 overflow-hidden relative bg-[#1a1a1a]">
           {imageUrl ? (
             <img
               src={imageUrl}
               alt={item.title}
               className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
               onError={(e) => {
                 e.target.style.display = 'none'; // Hide broken image
                 e.target.nextSibling.style.display = 'flex'; // Show fallback
               }}
             />
           ) : null}

           {/* Fallback container (hidden by default if image loads) */}
           <div
             className={`absolute inset-0 flex items-center justify-center bg-[#1a1a1a] ${imageUrl ? 'hidden' : 'flex'}`}
           >
              <div className="flex flex-col items-center gap-2 opacity-30">
                 <div className="w-8 h-8 rounded-full border-2 border-white/20" />
                 <span className="text-[10px] uppercase tracking-wider font-bold">Curioso AI</span>
              </div>
           </div>

           <div className="absolute inset-0 bg-gradient-to-t from-[#131313] to-transparent opacity-60 pointer-events-none" />

           {/* Category Badge over Image */}
           <div className="absolute top-3 left-3">
             <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-bold uppercase tracking-wider text-[#22d3ee]">
                {item.category || 'General'}
             </span>
           </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-grow gap-3">
          {/* Meta info */}
          <div className="flex items-center justify-between text-xs text-gray-500">
             <span>{item.sourceName || 'Fuente externa'}</span>
             <span>{formatDate(item.publishedAt)}</span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-white leading-tight group-hover:text-[#9d4edd] transition-colors line-clamp-2">
            {item.title}
          </h3>

          {/* Summary */}
          <p className="text-sm text-gray-400 line-clamp-3 flex-grow">
            {item.summary}
          </p>

          {/* Footer */}
          <div className="pt-4 mt-auto border-t border-white/5 flex items-center justify-between">
            <div className="flex gap-2">
               {item.tags?.slice(0, 2).map(tag => (
                   <span key={tag} className="text-[10px] text-gray-500">#{tag}</span>
               ))}
            </div>

            <span className="flex items-center gap-1 text-xs font-semibold text-white group-hover:text-[#22d3ee] transition-colors">
                Leer más <ExternalLink className="w-3 h-3" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default NewsCard;
