import { AnimatePresence, motion } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { timelineData } from "./data/timelineData";
import { TimelineCard } from "./Components/TimelineCard";
import { DetailView } from "./Components/DetailView";


function App() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Xử lý chuyển đổi lăn chuột dọc thành ngang
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (event: WheelEvent) => {
      const hasVerticalIntent = Math.abs(event.deltaY) > Math.abs(event.deltaX);
      if (hasVerticalIntent) {
        event.preventDefault();
        el.scrollBy({
          left: event.deltaY * 1.5, // Tăng tốc độ cuộn một chút
          behavior: "smooth",
        });
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  // Xử lý khóa scroll body khi mở detail
  useEffect(() => {
    if (activeIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [activeIndex]);

  // Đóng bằng phím Escape
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const activeItem = useMemo(
    () => (activeIndex !== null ? timelineData[activeIndex] : null),
    [activeIndex]
  );

  return (
    <main className="w-full h-screen bg-gradient-to-br from-black to-dark-accent overflow-hidden relative">
      
      {/* Background Decor (Parallax fake) */}
      <div className="absolute -left-[10%] top-[20%] w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-[10%] bottom-[20%] w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Horizontal Scroll Section */}
      <section className="w-full h-full flex items-center relative z-10">
        <motion.div
          ref={scrollRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="
            flex gap-10 px-8 md:px-16 overflow-x-auto overflow-y-hidden 
            w-full snap-x snap-mandatory scroll-smooth cursor-grab active:cursor-grabbing pb-8
            scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/20 hover:scrollbar-thumb-white/30
            [&::-webkit-scrollbar]:h-2
            [&::-webkit-scrollbar-track]:bg-transparent
            [&::-webkit-scrollbar-thumb]:rounded-full
            [&::-webkit-scrollbar-thumb]:bg-white/20
          "
        >
          {timelineData.map((item, index) => (
            <TimelineCard
              key={index}
              item={item}
              index={index}
              isActive={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            />
          ))}
          
          {/* Spacer cuối cùng để card cuối không bị dính lề */}
          <div className="w-8 shrink-0" /> 
        </motion.div>
      </section>

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