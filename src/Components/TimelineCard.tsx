import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import type { TimelineItemType } from "../data/timelineData";

interface TimelineCardProps {
  item: TimelineItemType;
  index: number;
  isActive: boolean;
  onClick: () => void;
}

export function TimelineCard({ item, index, onClick }: TimelineCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isEven = index % 2 === 0;

  // 1. Scroll Progress for this specific card
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // 2. Parallax Effects (Camille Mormal style)
  // Image moves slower than scroll to create depth
  const yImage = useTransform(scrollYProgress, [0, 1], [0, -100]); 
  
  // Text moves slightly faster to separate layers
  const yText = useTransform(scrollYProgress, [0, 1], [50, -50]);

  // 3. Reveal Animation (Mask wipe)
  // Unmask from bottom to top as it enters view
  const clipPathParams = useTransform(scrollYProgress, [0, 0.4], [100, 0]);
  const clipPath = useTransform(clipPathParams, (val) => `inset(${val}% 0% 0% 0%)`);

  // Extract cover image
  const coverImage = item.details.find(d => d.type === 'image')?.src;

  return (
    <div 
      ref={containerRef} 
      className="min-h-[90vh] flex items-center justify-center py-24 px-6 md:px-12 relative overflow-hidden"
    >
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
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Decorative Chapter/Year Line */}
            <div className={`
              flex items-center gap-4 mb-8 text-vintage-gold/80 font-accent uppercase tracking-[0.2em] text-sm
              ${!isEven ? 'md:flex-row-reverse' : ''}
              justify-center md:justify-start
            `}>
               <span>Chương {index + 1}</span>
               <div className="w-12 h-[1px] bg-vintage-gold/50"></div>
               <span className="text-vintage-red font-bold">{item.year}</span>
            </div>

            <h2 className="font-display text-6xl md:text-8xl text-vintage-black mb-8 leading-snug tracking-normal">
              {item.title}
            </h2>

            <p className="font-body text-xl md:text-2xl text-vintage-brown leading-relaxed mb-10 max-w-lg mx-auto md:mx-0 opacity-90">
              {item.description}
            </p>

            <button 
              onClick={onClick}
              className="
                group relative inline-flex items-center gap-4 px-0 py-2
                font-display text-xl tracking-widest uppercase text-vintage-black
                overflow-hidden
              "
            >
              <span className="relative z-10">Khám phá</span>
              <span className="w-8 h-[1px] bg-vintage-black group-hover:w-16 transition-[width] duration-300"></span>
              {/* Hover effect underline */}
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-vintage-black origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
            </button>
          </motion.div>
        </motion.div>

        {/* VISUAL COLUMN */}
        <div className="flex-1 w-full relative h-[60vh] md:h-[70vh] cursor-pointer group" onClick={onClick}>
          {/* Reveal Mask Container */}
          <motion.div 
            style={{ clipPath }} // The specific "wipe" reveal effect
            className="relative w-full h-full overflow-hidden"
          >
             {/* Inner container for Parallax */}
             <motion.div 
               style={{ y: yImage, scale: 1.1 }} // Start slightly scaled up and move Y
               className="relative w-full h-full bg-vintage-gold/5"
             >
                {coverImage ? (
                  <>
                    {/* Blurred Background Layer */}
                    <img 
                      src={coverImage} 
                      alt="background" 
                      className="absolute inset-0 w-full h-full object-cover blur-xl scale-110 opacity-60"
                    />
                    {/* Sharp Foreground Layer */}
                    <img 
                      src={coverImage} 
                      alt={item.title} 
                      className="relative z-10 w-full h-full object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-105"
                    />
                  </>
                ) : (
                   <div className="w-full h-full flex items-center justify-center font-display text-9xl text-vintage-gold/20 bg-[#F5F2EB]">
                     {index + 1}
                   </div>
                )}
                
                {/* Modern Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>

                {/* Hover Reveal Text */}
                <div className="absolute bottom-8 left-8 z-10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                   <span className="text-white font-accent text-lg italic tracking-wider">Xem chi tiết &rarr;</span>
                </div>
             </motion.div>
          </motion.div>

          {/* Decorative Number Behind (Parallaxed separately) */}
          <motion.div 
             style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
             className={`
               absolute -z-10 top-1/2 -translate-y-1/2 
               font-display text-[15rem] opacity-[0.03] text-black select-none
               ${isEven ? '-left-24' : '-right-24'}
             `}
          >
            {index + 1}
          </motion.div>
        </div>

      </div>
    </div>
  );
}