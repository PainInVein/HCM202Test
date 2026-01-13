import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { TimelineCard } from "../Components/TimelineCard";
import { timelineData } from "../data/timelineData";
import { useNavigate } from "react-router-dom";
import { usePresentation } from "../Contexts/PresentationContext";
import { TimelineNavigator } from "../Components/TimelineNavigator";


export function TimelinePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { startPresentation } = usePresentation();

  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
      <div ref={containerRef} className="relative min-h-screen bg-vintage-cream overflow-hidden">
        
        {/* Fixed Background Texture */}
        <motion.div 
          style={{ y: backgroundY }}
          className="fixed inset-0 z-0 opacity-40 pointer-events-none"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-vintage-cream via-transparent to-vintage-cream" />
          
          {/* Atmospheric Dust Particles */}
           <div className="absolute inset-0 overflow-hidden">
              {[...Array(20)].map((_, i) => (
                  <motion.div
                      key={i}
                      className="absolute rounded-full bg-vintage-gold/30 blur-[1px]"
                      style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          width: Math.random() * 4 + 1 + 'px',
                          height: Math.random() * 4 + 1 + 'px',
                      }}
                      animate={{
                          y: [0, -100, 0],
                          x: [0, Math.random() * 50 - 25, 0],
                          opacity: [0, 0.8, 0]
                      }}
                      transition={{
                          duration: Math.random() * 10 + 10,
                          repeat: Infinity,
                          ease: "linear"
                      }}
                  />
              ))}
           </div>
        </motion.div>

        {/* Floating/Fixed Navigation (Minimal) */}
        <TimelineNavigator />
        <header className="fixed top-0 left-0 w-full z-50 py-8 px-12 mix-blend-difference text-vintage-gold flex justify-between items-center pointer-events-none">
           <span className="font-display text-sm uppercase tracking-widest opacity-80">1890 — 1969</span>
           <div className="font-accent text-xs tracking-[0.3em] opacity-80 uppercase">
             Vietnam History
           </div>
        </header>

        {/* HERO SECTION */}
        <section className="relative h-screen flex flex-col items-center justify-center p-8 z-10">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1.2, ease: "easeOut" }}
             className="text-center"
          >
            <p className="font-accent text-vintage-red tracking-[0.4em] uppercase text-sm md:text-base mb-6">
              Không gian văn hóa & Lịch sử
            </p>
            <h1 className="font-display text-[5rem] md:text-[8rem] lg:text-[10rem] leading-[1.15] text-vintage-black mb-8 mix-blend-multiply">
              HỒ CHÍ MINH
            </h1>
            <div className="w-32 h-[2px] bg-vintage-gold mx-auto mb-8"></div>
            <p className="font-body text-xl md:text-2xl text-vintage-brown/80 italic max-w-2xl mx-auto mb-12">
              "Chính lòng yêu nước, chứ không phải lý tưởng cộng sản,<br/>là nguồn cảm hứng cho tôi."
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={startPresentation}
              className="
                group relative inline-flex items-center gap-3 px-8 py-4 
                bg-vintage-red text-white font-display uppercase tracking-widest text-sm shadow-xl hover:shadow-2xl hover:bg-red-800 transition-all
              "
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="opacity-80"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              <span>Xem Thuyết Trình</span>
            </motion.button>
          </motion.div>
          
          {/* Scroll Indicator */}
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-12 flex flex-col items-center gap-2 opacity-60 mix-blend-multiply"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-vintage-black">Cuộn để khám phá</span>
            <div className="w-[1px] h-12 bg-vintage-black" />
          </motion.div>
        </section>

        {/* Main Content Stream */}
        <main className="relative z-10 pb-32">
          {timelineData.map((item, index) => (
             <TimelineCard 
               key={item.id} 
               item={item} 
               index={index} 
               isActive={false}
               onClick={() => navigate(`/detail/${item.id}`)}
             />
          ))}
        </main>

        {/* Footer */}
        <footer className="relative z-10 py-24 text-center border-t border-vintage-gold/20">
           <p className="font-display text-vintage-brown/60 text-lg">
             © 2025 - Hành trình cứu nước
           </p>
        </footer>

      </div>
  );
}
