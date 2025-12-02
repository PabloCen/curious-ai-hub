import React, { useState } from 'react';
import { Star } from 'lucide-react';

const allToolsData = [
  {
    id: 1,
    name: 'ChatGPT',
    description: 'Asistente conversacional de OpenAI para escribir, programar y más.',
    category: 'Texto & Chat',
    categoryIcon: '💬',
    rating: 5.0,
    badges: ['FREEMIUM', 'POPULAR'],
    logo: 'https://cdn-icons-png.flaticon.com/512/8943/8943377.png',
    categoryType: 'Texto',
  },
  {
    id: 2,
    name: 'Midjourney',
    description: 'Generador de imágenes artísticas con resultados increíbles y únicos.',
    category: 'Imágenes',
    categoryIcon: '🎨',
    rating: 4.9,
    badges: ['PREMIUM', 'POPULAR'],
    logo: 'https://seeklogo.com/images/M/midjourney-logo-6B95969E90-seeklogo.com.png',
    categoryType: 'Imágenes',
  },
  {
    id: 3,
    name: 'GitHub Copilot',
    description: 'Asistente de programación que sugiere código en tiempo real.',
    category: 'Programación',
    categoryIcon: '💻',
    rating: 4.7,
    badges: ['PREMIUM'],
    logo: 'https://cdn-icons-png.flaticon.com/512/733/733553.png',
    categoryType: 'Código',
  },
  {
    id: 4,
    name: 'DALL-E 3',
    description: 'Creación de imágenes realistas desde descripciones de texto.',
    category: 'Imágenes',
    categoryIcon: '🎨',
    rating: 4.6,
    badges: ['FREEMIUM'],
    logo: 'https://cdn-icons-png.flaticon.com/512/6295/6295417.png',
    categoryType: 'Imágenes',
  },
  {
    id: 5,
    name: 'ElevenLabs',
    description: 'Generador de voz con IA ultra realista en múltiples idiomas.',
    category: 'Audio & Voz',
    categoryIcon: '🎵',
    rating: 4.8,
    badges: ['FREEMIUM', 'NUEVO'],
    logo: 'https://cdn-icons-png.flaticon.com/512/9374/9374295.png',
    categoryType: 'Audio',
  },
  {
    id: 6,
    name: 'Runway',
    description: 'Generación y edición de video con IA de última generación.',
    category: 'Video',
    categoryIcon: '🎬',
    rating: 4.7,
    badges: ['FREEMIUM', 'NUEVO'],
    logo: 'https://cdn-icons-png.flaticon.com/512/2991/2991195.png',
    categoryType: 'Video',
  },
  {
    id: 7,
    name: 'Jasper AI',
    description: 'Escritura de contenido profesional optimizada para marketing.',
    category: 'Copywriting',
    categoryIcon: '✍️',
    rating: 4.5,
    badges: ['PREMIUM'],
    logo: 'https://cdn-icons-png.flaticon.com/512/3281/3281289.png',
    categoryType: 'Texto',
  },
  {
    id: 8,
    name: 'Leonardo AI',
    description: 'Creación de arte digital con control preciso sobre el resultado.',
    category: 'Arte Digital',
    categoryIcon: '🎨',
    rating: 4.6,
    badges: ['GRATIS'],
    logo: 'https://cdn-icons-png.flaticon.com/512/2620/2620681.png',
    categoryType: 'Imágenes',
  },
  {
    id: 9,
    name: 'Perplexity AI',
    description: 'Motor de búsqueda con IA que responde con fuentes verificadas.',
    category: 'Búsqueda',
    categoryIcon: '🔍',
    rating: 4.7,
    badges: ['GRATIS'],
    logo: 'https://cdn-icons-png.flaticon.com/512/2920/2920349.png',
    categoryType: 'Texto',
  },

];

const categories = [
  { id: 'all', name: 'Todas', icon: '⭐' },
  { id: 'Imágenes', name: 'Imágenes', icon: '🎨' },
  { id: 'Texto', name: 'Texto', icon: '✏️' },
  { id: 'Video', name: 'Video', icon: '🎬' },
  { id: 'Audio', name: 'Audio', icon: '🎵' },
  { id: 'Código', name: 'Código', icon: '💻' },
];

const extraFilters = [
  { id: 'gratis', name: 'Gratis', icon: '✓' },
  { id: 'nuevas', name: 'Nuevas', icon: '🔥' },
];

const AllTools = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedFilters, setSelectedFilters] = useState([]);

  const toggleFilter = (filterId) => {
    setSelectedFilters(prev =>
      prev.includes(filterId)
        ? prev.filter(f => f !== filterId)
        : [...prev, filterId]
    );
  };

  const filteredTools = allToolsData.filter(tool => {
    const categoryMatch = selectedCategory === 'all' || tool.categoryType === selectedCategory;
    
    let filterMatch = true;
    if (selectedFilters.includes('gratis')) {
      filterMatch = filterMatch && tool.badges.includes('GRATIS');
    }
    if (selectedFilters.includes('nuevas')) {
      filterMatch = filterMatch && tool.badges.includes('NUEVO');
    }
    
    return categoryMatch && filterMatch;
  });

  const getBadgeStyle = (badge) => {
    switch(badge) {
      case 'FREEMIUM':
        return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/50';
      case 'POPULAR':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/50';
      case 'PREMIUM':
        return 'bg-amber-500/20 text-amber-400 border-amber-500/50';
      case 'NUEVO':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/50';
      case 'GRATIS':
        return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/50';
    }
  };

  return (
    <section className="py-20 px-4 bg-[#0a0a0a] min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Todas las herramientas
          </h1>
          <p className="text-gray-400 text-lg">
            Descubrí las mejores IAs organizadas por categoría
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col items-center gap-4 mb-12">
          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`all-tools-filter ${
                  selectedCategory === cat.id ? 'all-tools-filter-active' : ''
                }`}
              >
                <span className="mr-2">{cat.icon}</span>
                {cat.name}
              </button>
            ))}
          </div>

          {/* Extra filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {extraFilters.map(filter => (
              <button
                key={filter.id}
                onClick={() => toggleFilter(filter.id)}
                className={`all-tools-extra-filter ${
                  selectedFilters.includes(filter.id) ? 'all-tools-extra-filter-active' : ''
                }`}
              >
                <span className="mr-2">{filter.icon}</span>
                {filter.name}
              </button>
            ))}
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool, index) => (
            <div
              key={tool.id}
              className="all-tools-card group" data-cursor-big
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Badges */}
              <div className="flex gap-2 mb-4">
                {tool.badges.map(badge => (
                  <span
                    key={badge}
                    className={`all-tools-badge ${getBadgeStyle(badge)}`}
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {/* Logo */}
              <div className="all-tools-logo-container">
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="all-tools-logo"
                />
              </div>

              {/* Name */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#9d4edd] transition-colors">
                {tool.name}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-4 flex-grow">
                {tool.description}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(tool.rating)
                        ? 'fill-amber-400 text-amber-400'
                        : i < tool.rating
                        ? 'fill-amber-400/50 text-amber-400'
                        : 'fill-gray-600 text-gray-600'
                    }`}
                  />
                ))}
                <span className="text-white font-semibold ml-1">{tool.rating}</span>
              </div>

              {/* Category tag */}
              <div className="all-tools-category-tag">
                <span className="mr-2">{tool.categoryIcon}</span>
                {tool.category}
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredTools.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-xl">
              No se encontraron herramientas con estos filtros
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default AllTools;