import React from 'react';

const ProductPreview: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-12 w-full bg-aictual-black text-white relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center mb-16 max-w-2xl z-10">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">The workspace for global teams.</h2>
            <p className="text-gray-400 font-light text-lg">Manage translations, edit dubs, and collaborate on adaptation projects in a single, intuitive interface.</p>
        </div>

        {/* Mock Interface */}
        <div className="w-full max-w-5xl bg-[#111] rounded-lg border border-white/10 shadow-2xl overflow-hidden relative z-10">
            {/* Window Controls */}
            <div className="h-10 border-b border-white/10 flex items-center px-4 gap-2 bg-[#0A0A0A]">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                <div className="ml-auto text-[10px] font-mono text-gray-500">aictual_studio_v2.0</div>
            </div>

            <div className="flex flex-col md:flex-row h-[500px]">
                {/* Sidebar */}
                <div className="w-full md:w-64 border-r border-white/10 bg-[#0A0A0A] p-4 flex flex-col gap-4">
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Projects</div>
                    {['Q4 Marketing Campaign', 'Product Launch Video', 'Legal Docs - EU', 'Blog Localization'].map((item, i) => (
                         <div key={i} className={`p-2 rounded text-sm cursor-pointer flex items-center gap-2 ${i === 0 ? 'bg-aictual-accent/10 text-aictual-accent border border-aictual-accent/20' : 'text-gray-400 hover:bg-white/5'}`}>
                            <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-aictual-accent' : 'bg-gray-600'}`}></div>
                            {item}
                        </div>
                    ))}
                    
                    <div className="mt-auto p-3 rounded bg-white/5 border border-white/10">
                        <div className="text-[10px] text-gray-400 mb-1">Processing Usage</div>
                        <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                            <div className="w-[75%] h-full bg-aictual-accent"></div>
                        </div>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 p-6 md:p-8 bg-[#111] overflow-y-auto">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h3 className="font-display text-xl font-medium">Q4 Marketing Campaign</h3>
                            <span className="text-xs text-gray-500">Last updated 2 mins ago</span>
                        </div>
                        <button className="px-4 py-1.5 border border-aictual-accent text-aictual-accent text-xs rounded hover:bg-aictual-accent hover:text-white transition-colors">
                            Export Assets
                        </button>
                    </div>

                    {/* Timeline / Content Mock */}
                    <div className="space-y-4">
                        <div className="p-4 rounded border border-white/5 bg-[#161616]">
                            <div className="flex justify-between mb-2">
                                <span className="text-xs text-gray-400 font-mono">SOURCE (EN-US)</span>
                            </div>
                            <p className="text-sm text-gray-300 font-light">"Experience the future of connectivity with our new platform."</p>
                        </div>

                        <div className="flex justify-center">
                            <svg className="w-6 h-6 text-gray-600 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                             <div className="p-4 rounded border border-aictual-accent/30 bg-aictual-accent/5 relative">
                                <div className="absolute top-2 right-2 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-xs text-aictual-accent font-mono">TARGET (ES-ES)</span>
                                </div>
                                <p className="text-sm text-gray-200 font-light">"Experimenta el futuro de la conectividad con nuestra nueva plataforma."</p>
                            </div>
                            <div className="p-4 rounded border border-white/5 bg-[#161616] opacity-60">
                                <div className="flex justify-between mb-2">
                                    <span className="text-xs text-gray-400 font-mono">TARGET (JP-JP)</span>
                                </div>
                                <div className="h-2 w-3/4 bg-gray-800 rounded mb-2"></div>
                                <div className="h-2 w-1/2 bg-gray-800 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPreview;