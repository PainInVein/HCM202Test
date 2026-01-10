import { AnimatePresence, motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";

import { timelineData } from "./data/timelineData";
import { TimelineCard } from "./Components/TimelineCard";
import { DetailView } from "./Components/DetailView";


function App() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Remove horizontal scroll logic since we are going vertical
  useEffect(() => {
    // Reset body overflow when activeIndex changes
    if (activeIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [activeIndex]);

  const activeItem = useMemo(
    () => (activeIndex !== null ? timelineData[activeIndex] : null),
    [activeIndex]
  );

  return (
    <main className="w-full min-h-screen relative bg-vintage-cream selection:bg-vintage-gold/30">
      {/* Global Background Textures */}
      <div className="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-80 pointer-events-none z-0 mix-blend-multiply" />
      <div className="fixed inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />

      {/* Hero Section / Header */}
      <header className="relative w-full h-screen flex flex-col items-center justify-center text-center z-10 p-8">
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="font-accent text-vintage-red tracking-[0.3em] uppercase text-xl md:text-2xl mb-6">
            Không gian văn hóa & Lịch sử
          </p>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-vintage-black leading-none mb-8">
            HỒ CHÍ MINH
          </h1>
          <div className="w-24 h-1 bg-vintage-gold mx-auto mb-8" />
          <p className="font-body text-vintage-brown/80 text-lg md:text-xl max-w-2xl mx-auto italic">
            "Dân ta phải biết sử ta<br/>Cho tường gốc tích nước nhà Việt Nam"
          </p>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-vintage-black">Cuộn để khám phá</span>
          <div className="w-[1px] h-16 bg-vintage-black" />
        </motion.div>
      </header>

      {/* Timeline Sections */}
      <div className="relative z-10 w-full max-w-[1920px] mx-auto pb-32">
        {/* Vertical Line Connector */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-vintage-gold/30 -translate-x-1/2 hidden md:block" />

        {timelineData.map((item, index) => (
          <TimelineCard
            key={index}
            item={item}
            index={index}
            isActive={activeIndex === index}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>

      {/* Detail Overlay */}
      <AnimatePresence mode="wait">
        {activeItem && activeIndex !== null && (
          <DetailView 
            item={activeItem} 
            index={activeIndex} 
            onClose={() => setActiveIndex(null)} 
          />
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;