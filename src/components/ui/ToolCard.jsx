import React, { useState } from 'react';
import { Star, ExternalLink, Activity } from 'lucide-react';

const ToolCard = ({ tool, index }) => {
  const [imgError, setImgError] = useState(false);

  // Generate a random gradient based on the tool name for consistency
  const getGradient = (name) => {
    const colors = [
      'from-blue-500 to-cyan-500',
      'from-purple-500 to-pink-500',
      'from-orange-500 to-red-500',
      'from-green-500 to-emerald-500',
      'from-indigo-500 to-violet-500'
    ];
    const charCode = name.charCodeAt(0);
    return colors[charCode % colors.length];
  };

  const getBadgeStyle = (badge) => {
    switch(badge) {
      case 'Premium':
      case 'PREMIUM':
        return 'bg-amber-500/20 text-amber-400 border-amber-500/50';
      case 'Popular':
      case 'POPULAR':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/50';
      case 'Nuevo':
      case 'NUEVO':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/50';
      case 'Gratis':
      case 'GRATIS':
        return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50';
      default:
        return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/50';
    }
  };

  const getDifficultyColor = (level) => {
    switch(level) {
      case 'Básico': return 'text-emerald-400';
      case 'Intermedio': return 'text-amber-400';
      case 'Avanzado': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div
      className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5 hover:border-[#9d4edd]/50 transition-all duration-300 hover:transform hover:-translate-y-1 group flex flex-col h-full"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Badges */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tool.badges?.map(badge => (
          <span
            key={badge}
            className={`text-xs px-2 py-1 rounded-full border ${getBadgeStyle(badge)}`}
          >
            {badge}
          </span>
        ))}
      </div>

      {/* Header: Logo + Name */}
      <div className="flex items-start gap-4 mb-4">
        <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-[#0a0a0a] border border-white/10">
          {!imgError ? (
            <img
              src={tool.logo}
              alt={tool.name}
              className="w-full h-full object-cover"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className={`w-full h-full bg-gradient-to-br ${getGradient(tool.name)} flex items-center justify-center text-white text-2xl font-bold`}>
              {tool.name.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-[#9d4edd] transition-colors">
            {tool.name}
          </h3>
          <div className="flex items-center gap-1 text-sm mt-1">
            <span className="text-gray-400">{tool.category}</span>
            <span className="text-gray-600">•</span>
            <span className="text-gray-400">{tool.pricing}</span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-400 text-sm mb-6 flex-grow line-clamp-3">
        {tool.description}
      </p>

      {/* Footer: Rating & Difficulty */}
      <div className="flex items-center justify-between pt-4 border-t border-white/5 mb-4">
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
          <span className="text-white font-medium">{tool.rating}</span>
        </div>
        <div className="flex items-center gap-1 text-sm font-medium">
          <Activity className={`w-4 h-4 ${getDifficultyColor(tool.difficulty)}`} />
          <span className={getDifficultyColor(tool.difficulty)}>{tool.difficulty}</span>
        </div>
      </div>

      {/* Action Button */}
      <a
        href={tool.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-center py-2 rounded-lg bg-white/5 hover:bg-[#9d4edd] text-white transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(157,78,221,0.3)]"
      >
        <span>Visitar sitio</span>
        <ExternalLink className="w-4 h-4" />
      </a>
    </div>
  );
};

export default ToolCard;
