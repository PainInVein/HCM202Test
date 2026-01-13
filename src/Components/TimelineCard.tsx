import { motion, useScroll, useTransform, useSpring, MotionValue } from "motion/react";
import { useRef } from "react";
import type { TimelineItemType } from "../data/timelineData";

interface TimelineCardProps {
  item: TimelineItemType;
  index: number;
  isActive: boolean;
  onClick: () => void;
}

// Particle Component for Atmosphere
const FloatingParticle = ({ scrollYProgress, index, speed, size }: { scrollYProgress: MotionValue<number>, index: number, speed: number, size: number }) => {
    const yInfo = useTransform(scrollYProgress, [0, 1], [0, speed * 200]);
    const opacityInfo = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 0.5, 0.5, 0]);
    
    // Random initial positions based on index
    const left = (index * 137) % 100; // pseudo-random
    const top = (index * 53) % 100;

    return (
        <motion.div 
            style={{ 
                y: yInfo, 
                opacity: opacityInfo,
                left: `${left}%`,
                top: `${top}%`,
                width: size,
                height: size
            }}
            className="absolute rounded-full bg-vintage-gold/20 blur-sm pointer-events-none z-0"
        />
    );
};

export function TimelineCard({ item, index, onClick }: TimelineCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isEven = index % 2 === 0;

  // 1. Scroll Progress for this specific card
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // 2. Enhanced Parallax Effects
  // Image moves significantly slower than scroll to create depth
  const yImage = useTransform(smoothProgress, [0, 1], [-100, 100]); 
  
  // Text moves slightly faster/slower to separate layers
  const yText = useTransform(smoothProgress, [0, 1], [100, -100]);
  
  // 3. Artistic Reveal Animation (Ink Spread style mask)
  // Instead of a simple wipe, we use a complex clip path that expands
  const revealProgress = useTransform(smoothProgress, [0.1, 0.5], [0, 100]);
  const clipPath = useTransform(revealProgress, (val) => {
      // Circle expansion for a "spotlight" or "ink drop" effect
      return `circle(${val * 1.5}% at 50% 50%)`;
  });
  
  const opacityImage = useTransform(smoothProgress, [0, 0.2], [0, 1]);

  // Extract cover image
  const coverImage = item.details.find(d => d.type === 'image')?.src;

  return (
    <div 
      ref={containerRef} 
      className="min-h-[120vh] flex items-center justify-center py-24 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Atmospherics */}
      {/* Generate some particles */}
      {[...Array(5)].map((_, i) => (
          <FloatingParticle key={i} scrollYProgress={smoothProgress} index={i} speed={i % 2 === 0 ? -1 : 1} size={10 + i * 5} />
      ))}


      <div className={`
        flex flex-col md:flex-row items-center gap-16 md:gap-32 max-w-7xl w-full
        ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}
      `}>
        
        {/* TEXT COLUMN */}
        <motion.div 
          style={{ y: yText }} // Parallax on text block
          className="flex-1 text-center md:text-left relative z-20"
        >
          {/* Staggered Entry for Typography */}
          <motion.div
            initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} // Cinematic easing
          >
            {/* Decorative Chapter/Year Line */}
            <div className={`
              flex items-center gap-4 mb-8 text-vintage-gold/80 font-accent uppercase tracking-[0.2em] text-sm
              ${!isEven ? 'md:flex-row-reverse' : ''}
              justify-center md:justify-start
            `}>
               <span className="opacity-70">Chương {index + 1}</span>
               <div className="w-16 h-[1px] bg-vintage-gold/50"></div>
               <span className="text-vintage-red font-bold text-lg">{item.year}</span>
            </div>

            <h2 className="font-display text-7xl md:text-9xl text-vintage-black mb-10 leading-[0.9] tracking-tight mix-blend-darken">
              {item.title}
            </h2>

            <div className={`w-24 h-1 bg-vintage-red mb-10 ${!isEven ? 'ml-auto mr-0' : 'mr-auto ml-0'} hidden md:block opacity-60`}></div>

            <p className="font-body text-xl md:text-2xl text-vintage-brown leading-relaxed mb-12 max-w-lg mx-auto md:mx-0 opacity-90">
              {item.description}
            </p>

            <button 
              onClick={onClick}
              className="
                group relative inline-flex items-center gap-6 px-8 py-4
                border border-vintage-black/20 hover:border-vintage-black
                transition-colors duration-500
              "
            >
              <span className="font-display text-xl tracking-widest uppercase text-vintage-black relative z-10">Khám phá</span>
              <span className="text-2xl group-hover:translate-x-2 transition-transform duration-500">→</span>
              
              {/* Fill effect */}
              <div className="absolute inset-0 bg-vintage-black origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out -z-0 opacity-5"></div>
            </button>
          </motion.div>
        </motion.div>

        {/* VISUAL COLUMN */}
        <div className="flex-1 w-full relative h-[70vh] md:h-[80vh] cursor-pointer group pers-3d" onClick={onClick}>
          
          {/* Main Visual Container - The "Frame" */}
          <motion.div 
             className="relative w-full h-full shadow-2xl overflow-hidden bg-[#EAE6D9]"
             style={{ 
                 clipPath, // Circle reveal
                 opacity: opacityImage
             }} 
          >
             {/* Inner container for Parallax Image */}
             <motion.div 
               style={{ y: yImage, scale: 1.15 }} // Enhanced scale for better parallax
               className="relative w-full h-full"
             >
                {coverImage ? (
                  <>
                    <img 
                      src={coverImage} 
                      alt={item.title} 
                      className="absolute inset-0 w-full h-full object-cover sepia-[0.3] contrast-[1.1] transition-all duration-1000 group-hover:sepia-0 group-hover:scale-105"
                    />
                    {/* Grain Texture Overlay */}
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-overlay pointer-events-none"></div>
                    
                    {/* Vignette */}
                    <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/40 opacity-60"></div>
                  </>
                ) : (
                   <div className="w-full h-full flex items-center justify-center font-display text-9xl text-vintage-gold/20 bg-[#F5F2EB]">
                     {index + 1}
                   </div>
                )}
                
                {/* Floating Label */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="absolute bottom-12 left-12 bg-white/90 backdrop-blur-sm p-6 max-w-xs shadow-lg hidden md:block"
                >
                    <span className="font-accent text-xs tracking-widest uppercase text-gray-500 block mb-2">Hình ảnh tư liệu</span>
                    <p className="font-display text-xl text-vintage-black leading-none">{item.details.find(d => d.type === 'image')?.caption || item.year}</p>
                </motion.div>
             </motion.div>
          </motion.div>

          {/* Decorative Number Behind (Parallaxed separately) */}
          <motion.div 
             style={{ y: useTransform(smoothProgress, [0, 1], [-150, 150]) }}
             className={`
               absolute -z-10 top-1/2 -translate-y-1/2 
               font-display text-[20rem] opacity-[0.04] text-vintage-red select-none mix-blend-multiply
               ${isEven ? '-left-48' : '-right-48'}
             `}
          >
            {index + 1}
          </motion.div>
        </div>

      </div>
    </div>
  );
}