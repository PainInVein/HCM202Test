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
  const ref = useRef<HTMLDivElement>(null);
  const isEven = index % 2 === 0;
  
  // Parallax effect for image
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Extract cover image
  const coverImage = item.details.find(d => d.type === 'image')?.src;

  return (
    <div ref={ref} className="min-h-[80vh] flex items-center justify-center py-20 px-6 md:px-12 relative">
      
      <div className={`
        flex flex-col md:flex-row items-center gap-12 md:gap-24 max-w-7xl w-full
        ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}
      `}>
        
        {/* Content Side */}
        <motion.div 
          className="flex-1 text-center md:text-left relative z-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Year Badge */}
          <div className={`
            inline-block px-4 py-2 border border-vintage-gold/50 rounded-full mb-6
            bg-vintage-cream/80 backdrop-blur-sm
            ${!isEven ? 'md:ml-auto' : ''}
          `}>
            <span className="font-accent text-vintage-red text-xl tracking-widest font-bold">
              {item.year}
            </span>
          </div>

          <h2 className="font-display text-5xl md:text-7xl text-vintage-black mb-6 leading-[1.1]">
            {item.title}
          </h2>

          <div className="w-24 h-1 bg-vintage-gold mb-8 mx-auto md:mx-0" />

          <p className="font-body text-xl text-vintage-brown leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
            {item.description}
          </p>

          <button 
            onClick={onClick}
            className="
              group inline-flex items-center gap-3 px-8 py-3 
              bg-vintage-black text-vintage-cream 
              font-display text-lg tracking-widest uppercase
              hover:bg-vintage-red transition-colors duration-300
            "
          >
            <span>Khám phá chi tiết</span>
            <svg className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </motion.div>

        {/* Visual Side */}
        <div className="flex-1 w-full relative group cursor-pointer" onClick={onClick}>
          <motion.div 
            style={{ y, opacity }}
            className="relative aspect-[4/5] w-full max-w-lg mx-auto"
          >
            {/* Frame border */}
            <div className={`
              absolute -inset-4 border-2 border-vintage-gold/30 z-0
              transition-transform duration-700 group-hover:scale-105
              ${isEven ? 'translate-x-4 translate-y-4' : '-translate-x-4 translate-y-4'}
            `} />
            
            {/* Image container */}
            <div className="relative w-full h-full overflow-hidden shadow-2xl bg-vintage-gold/10">
               {/* Cover Image */}
               {coverImage ? (
                <img 
                  src={coverImage} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                />
               ) : (
                 <div className="w-full h-full flex items-center justify-center bg-vintage-gold/20 font-display text-6xl text-vintage-gold/40">
                   {index + 1}
                 </div>
               )}
               
               {/* View Indicator */}
               <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/50">
                    <span className="text-white text-3xl font-light">+</span>
                  </div>
               </div>
            </div>
            
            {/* Number Background - Parallax Depth */}
            <div className={`
              absolute -z-10 top-1/2 -translate-y-1/2 
              font-display text-[12rem] md:text-[20rem] leading-none 
              text-vintage-gold/10 select-none pointer-events-none
              ${isEven ? '-left-20' : '-right-20'}
            `}>
              {index + 1}
            </div>

          </motion.div>
        </div>

      </div>
    </div>
  );
}