import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const Hero: React.FC = () => {
  const globeRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!globeRef.current) return;

    // Clear any existing SVG content to prevent duplication in Strict Mode
    d3.select(globeRef.current).selectAll("*").remove();

    const width = 400;
    const height = 400;
    const sensitivity = 75;

    const projection = d3.geoOrthographic()
      .scale(180)
      .center([0, 0])
      .rotate([0, -30])
      .translate([width / 2, height / 2]);

    const initialScale = projection.scale();
    const path = d3.geoPath().projection(projection);

    const svg = d3.select(globeRef.current)
      .attr("width", width)
      .attr("height", height)
      .style("opacity", 0)
      .transition()
      .duration(1000)
      .style("opacity", 1);

    const globe = d3.select(globeRef.current).append("g");
    
    // Draw simplified globe grid
    const graticule = d3.geoGraticule();
    
    globe.append("path")
      .datum(graticule)
      .attr("class", "graticule")
      .attr("d", path)
      .style("fill", "none")
      .style("stroke", "#7FA3D6") // aictual-accent
      .style("stroke-width", "0.8px")
      .style("opacity", "0.6");
      
    globe.append("path")
      .datum({type: "Sphere"})
      .attr("class", "sphere")
      .attr("d", path)
      .style("fill", "none")
      .style("stroke", "#0A0A0A")
      .style("stroke-width", "1.5px");

    let timer: any;
    
    // Rotation animation
    const rotate = () => {
        timer = d3.timer((elapsed) => {
            const rotate = projection.rotate();
            const k = sensitivity / projection.scale();
            projection.rotate([
            rotate[0] + 0.2 * k, // Longitude
            rotate[1] 
            ]);
            globe.selectAll("path").attr("d", path);
        });
    };
    
    rotate();

    return () => {
      if(timer) timer.stop();
    }
  }, []);

  return (
    <section className="relative w-full pt-32 pb-20 md:pt-48 md:pb-32 px-6 flex flex-col items-center justify-center tracking-tight overflow-visible min-h-screen lg:min-h-[800px]">
        {/* Background Decorative Lines */}
        <div className="absolute inset-0 pointer-events-none flex justify-center">
            <div className="w-full max-w-7xl border-x border-aictual-black/5 h-full relative">
                <div className="absolute top-0 left-1/4 w-[1px] h-full bg-aictual-black/5"></div>
                <div className="absolute top-0 right-1/4 w-[1px] h-full bg-aictual-black/5"></div>
            </div>
        </div>

      <div className="max-w-7xl mx-auto w-full z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="order-1 flex flex-col items-start text-left">
            
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl leading-tight tracking-tight overflow-visible text-aictual-black mb-6 w-full">
            We Translate Your Videos. <span className="text-transparent bg-clip-text bg-gradient-to-r from-aictual-black to-aictual-accent italic pr-2">You Reach The World.</span>
          </h1>
          <p className="text-lg md:text-xl text-aictual-gray max-w-lg mb-10 leading-relaxed font-light">
            Aictual is not a tool—we are your localization team. We translate, dub, and lip-sync your content so you can focus on creating.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="group relative px-8 py-4 bg-aictual-black text-white text-sm font-medium overflow-hidden transition-all hover:pr-10">
              <span className="relative z-10">Work With Us</span>
              <div className="absolute inset-0 bg-aictual-gray transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
            </button>
            <button className="px-8 py-4 border border-aictual-black/20 text-aictual-black text-sm font-medium hover:border-aictual-accent hover:text-aictual-accent transition-colors">
              See How It Works
            </button>
          </div>
        </div>

        <div className="order-2 flex justify-center lg:justify-end relative mt-8 lg:mt-0">
             <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
                {/* D3 Globe Container */}
                <svg ref={globeRef} className="w-full h-full"></svg>
                
                {/* Floating Tags */}
                <div className="absolute top-[10%] left-[0%] bg-aictual-bg border border-aictual-accent px-3 py-1 shadow-sm text-xs font-medium animate-bounce delay-100">
                    EN-US
                </div>
                 <div className="absolute bottom-[20%] right-[0%] bg-aictual-bg border border-aictual-accent px-3 py-1 shadow-sm text-xs font-medium animate-bounce delay-700">
                    JP-JP
                </div>
                 <div className="absolute top-[50%] right-[-10%] bg-aictual-bg border border-aictual-accent px-3 py-1 shadow-sm text-xs font-medium animate-bounce delay-300">
                    FR-FR
                </div>
             </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;