import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Wrench } from 'lucide-react';
import { toolsData } from '../../data/toolsData';
import ToolCard from '../ui/ToolCard';

const ToolsPreview = () => {
  const navigate = useNavigate();
  // Take top 3-4 interesting tools
  // Let's filter by "Destacado" or just take first few
  const previewTools = toolsData.slice(0, 3);

  return (
    <section className="py-20 px-4 md:px-8 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium tracking-wide uppercase mb-4">
                    <Wrench className="w-3 h-3" />
                    Toolbox
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Herramientas Recomendadas
                </h2>
                <p className="text-gray-400 max-w-xl">
                Descubre las IAs más potentes para optimizar tu flujo de trabajo, desde generación de texto hasta creación de video.
                </p>
            </div>

            <button
                onClick={() => navigate("/tools")}
                className="hidden md:flex items-center gap-2 text-[#22d3ee] font-semibold hover:text-white transition-colors group"
            >
                Explorar directorio completo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {previewTools.map((tool, index) => (
                <ToolCard key={tool.id} tool={tool} index={index} />
            ))}
        </div>

        {/* Mobile Button */}
        <div className="mt-10 text-center md:hidden">
          <button
            onClick={() => navigate("/tools")}
            className="px-6 py-3 rounded-2xl bg-[#22d3ee] hover:bg-[#22d3ee]/80 font-semibold text-black shadow-[0_0_18px_rgba(34,211,238,0.4)] w-full"
          >
            Explorar todas
          </button>
        </div>

      </div>
    </section>
  );
};

export default ToolsPreview;
