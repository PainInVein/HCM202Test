import { useEffect, useState } from "react";
import { timelineData } from "../data/timelineData";

export function TimelineNavigator() {
  const [activeId, setActiveId] = useState(timelineData[0].id);
  
  // Track Active Section based on Scroll
  useEffect(() => {
    const handleScroll = () => {
        // Simple logic: find which section top is closest to 0
        let currentId = timelineData[0].id;
        let minDiff = Infinity;

        timelineData.forEach(item => {
            const el = document.getElementById(`timeline-section-${item.id}`);
            if (el) {
                const rect = el.getBoundingClientRect();
                const diff = Math.abs(rect.top); // Distance to top
                if (diff < minDiff && rect.top < window.innerHeight / 2) {
                    minDiff = diff;
                    currentId = item.id;
                }
            }
        });
        setActiveId(currentId);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: number) => {
    const el = document.getElementById(`timeline-section-${id}`);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed right-0 top-0 h-full w-24 flex items-center justify-center z-40 hidden md:flex pointer-events-none">
      <div className="relative h-[80vh] flex flex-col justify-between items-center py-12 pointer-events-auto">
        {/* Rail Line */}
        <div className="absolute right-8 top-0 bottom-0 w-[1px] bg-vintage-gold/20" />

        {timelineData.map((item, index) => {
          const isActive = activeId === item.id;
          return (
            <div key={`${item.id}-${index}`} className="relative group flex items-center justify-end w-full pr-8 py-2">
               {/* Label (Hover) */}
               <div className={`
                 absolute right-12 whitespace-nowrap px-4 py-1 
                 font-display uppercase text-xs tracking-widest
                 transition-all duration-300 origin-right scale-x-0 group-hover:scale-x-100 opacity-0 group-hover:opacity-100
                 bg-vintage-black text-vintage-gold shadow-xl
               `}>
                 {item.year}
               </div>

               {/* Dot */}
               <button
                 onClick={() => scrollTo(item.id)}
                 className={`
                    relative z-10 w-2 h-2 rounded-full transition-all duration-500
                    ${isActive ? 'bg-vintage-red scale-150 ring-4 ring-vintage-red/20' : 'bg-vintage-gold/50 hover:bg-vintage-gold hover:scale-125'}
                 `}
               />
            </div>
          );
        })}
      </div>
    </nav>
  );
}
