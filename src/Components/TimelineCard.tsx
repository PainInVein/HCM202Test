import { motion } from "motion/react";
import type { TimelineItemType } from "../data/timelineData";

interface TimelineCardProps {
  item: TimelineItemType;
  index: number;
  isActive: boolean;
  onClick: () => void;
}

export function TimelineCard({ item, index, isActive, onClick }: TimelineCardProps) {
  return (
    <motion.button
      onClick={onClick}
      layoutId={`card-${item.id}`} // Dùng ID thay vì index để ổn định hơn
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        opacity: { duration: 0.6, delay: index * 0.1 },
        x: { duration: 0.6, delay: index * 0.1 },
      }}
      whileHover={{ scale: 1.05, y: -10 }}
      whileTap={{ scale: 0.98 }}
      className={`
        relative shrink-0 flex flex-col justify-between text-left
        w-75 h-112.5 md:w-95 md:h-130 
        bg-white rounded-3xl p-8 
        border transition-all duration-300 snap-start overflow-hidden group
        ${isActive 
          ? "border-black/20 shadow-[0_24px_80px_rgba(0,0,0,0.2)]" 
          : "border-black/5 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] hover:border-black/10"
        }
      `}
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 p-6 opacity-10 font-serif text-9xl leading-none select-none pointer-events-none">
        {index + 1}
      </div>

      {/* Top Content */}
      <div className="relative z-10 mt-4">
        <span className="text-xs font-bold tracking-widest uppercase text-blue-800 mb-2 block">
          {item.year}
        </span>
        <h2 className="font-serif text-3xl md:text-4xl leading-tight text-black font-normal">
          {item.title}
        </h2>
      </div>

      {/* Bottom Content: Description Preview */}
      <div className="relative z-10 mt-auto">
        <p className="text-sm text-gray-500 line-clamp-3 mb-4">
          {item.description}
        </p>
        <div className="flex items-center text-sm font-semibold underline decoration-1 underline-offset-4 group-hover:text-blue-800 transition-colors">
          Xem bảo tàng
          <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </motion.button>
  );
}