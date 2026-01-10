import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { TimelineCard } from "../Components/TimelineCard";
import { timelineData } from "../data/timelineData";
import { useNavigate } from "react-router-dom";

export function TimelinePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  
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
        </motion.div>

        {/* Floating/Fixed Navigation (Minimal) */}
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
            <h1 className="font-display text-[5rem] md:text-[8rem] lg:text-[10rem] leading-[0.85] text-vintage-black mb-8 mix-blend-multiply">
              HỒ CHÍ MINH
            </h1>
            <div className="w-32 h-[2px] bg-vintage-gold mx-auto mb-8"></div>
            <p className="font-body text-xl md:text-2xl text-vintage-brown/80 italic max-w-2xl mx-auto">
              "Chính lòng yêu nước, chứ không phải lý tưởng cộng sản,<br/>là nguồn cảm hứng cho tôi."
            </p>
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
