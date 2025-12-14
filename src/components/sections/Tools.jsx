import React, { useState } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { toolsData, categories, difficultyFilters } from '../../data/toolsData';
import ToolCard from '../ui/ToolCard';
import { cn } from '../../lib/utils'; // Assuming this utility exists, otherwise standard className is fine

const Tools = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const filteredTools = toolsData.filter(tool => {
    // Search filter
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Category filter
    const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;

    // Difficulty filter
    const matchesDifficulty = selectedDifficulty === 'all' || tool.difficulty === selectedDifficulty;

    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedDifficulty('all');
  };

  return (
    <section className="py-20 px-4 min-h-screen bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            Directorio de Herramientas IA
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explora nuestra colección curada de las mejores herramientas de Inteligencia Artificial para potenciar tu creatividad y productividad.
          </p>
        </div>

        {/* Filters & Search Bar */}
        <div className="flex flex-col gap-6 mb-12 bg-[#1a1a1a] p-6 rounded-2xl border border-white/5">
          {/* Top Row: Search + Mobile Filter Toggle (future improvement) */}
          <div className="w-full relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar herramientas (ej: ChatGPT, imágenes, video...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0a0a0a] text-white pl-12 pr-4 py-3 rounded-xl border border-white/10 focus:border-[#22d3ee] focus:outline-none focus:ring-1 focus:ring-[#22d3ee] transition-all"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-gray-500 uppercase font-semibold tracking-wider flex items-center gap-2 w-full md:w-auto mb-2 md:mb-0">
                <Filter className="w-4 h-4" /> Categoría:
              </span>
              {categories.slice(0, 5).map(cat => ( // Show first 5 categories + 'All' to avoid clutter
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-[#22d3ee]/20 text-[#22d3ee] border border-[#22d3ee]/50'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-transparent'
                  }`}
                >
                  {cat.id !== 'all' && <span className="mr-1">{cat.icon}</span>}
                  {cat.name}
                </button>
              ))}
              {/* Dropdown for more categories could go here */}
            </div>

            {/* Difficulty Filters */}
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-sm text-gray-500 uppercase font-semibold tracking-wider mr-2">
                Nivel:
              </span>
              {difficultyFilters.map(diff => (
                <button
                  key={diff.id}
                  onClick={() => setSelectedDifficulty(diff.id)}
                  className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
                    selectedDifficulty === diff.id
                      ? 'bg-[#9d4edd]/20 text-[#9d4edd] border border-[#9d4edd]/50'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-transparent'
                  }`}
                >
                  {diff.name}
                </button>
              ))}
            </div>
          </div>

          {/* Active Filters Summary */}
          {(selectedCategory !== 'all' || selectedDifficulty !== 'all' || searchQuery) && (
             <div className="flex items-center gap-2 pt-4 border-t border-white/5">
                <span className="text-sm text-gray-500">Filtros activos:</span>
                {selectedCategory !== 'all' && (
                  <span className="text-xs bg-[#22d3ee]/10 text-[#22d3ee] px-2 py-1 rounded flex items-center gap-1">
                    {categories.find(c => c.id === selectedCategory)?.name}
                    <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedCategory('all')} />
                  </span>
                )}
                {selectedDifficulty !== 'all' && (
                  <span className="text-xs bg-[#9d4edd]/10 text-[#9d4edd] px-2 py-1 rounded flex items-center gap-1">
                    {selectedDifficulty}
                    <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedDifficulty('all')} />
                  </span>
                )}
                 <button
                  onClick={clearFilters}
                  className="text-xs text-gray-400 hover:text-white underline ml-auto"
                >
                  Limpiar todo
                </button>
             </div>
          )}
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.length > 0 ? (
            filteredTools.map((tool, index) => (
              <ToolCard key={tool.id} tool={tool} index={index} />
            ))
          ) : (
            <div className="col-span-full py-20 text-center bg-[#1a1a1a] rounded-2xl border border-white/5 border-dashed">
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">No se encontraron resultados</h3>
              <p className="text-gray-400">
                Intenta ajustar los filtros o buscar con otro término.
              </p>
              <button
                onClick={clearFilters}
                className="mt-6 px-6 py-2 bg-[#22d3ee] text-black font-semibold rounded-lg hover:bg-[#22d3ee]/90 transition-colors"
              >
                Limpiar filtros
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Tools;
