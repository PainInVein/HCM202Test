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
      layoutId={`card-${index}`}
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
        relative flex-shrink-0 flex flex-col justify-center items-center text-center
        w-[320px] h-[480px] md:w-[420px] md:h-[560px] 
        bg-white rounded-[24px] p-8 md:p-12 
        border transition-all duration-300 snap-start overflow-hidden group
        ${isActive 
          ? "border-black/20 shadow-[0_24px_80px_rgba(0,0,0,0.2)]" 
          : "border-black/5 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] hover:border-black/10"
        }
      `}
    >
      {/* Background Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#f8f8f8] to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      
      {/* Top Line Hover Effect */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full">
        <span className="text-xs md:text-sm tracking-[0.2em] uppercase text-black/40 font-semibold mb-4 block">
          {item.year}
        </span>
        <h2 className="font-serif text-3xl md:text-[2.5rem] leading-tight text-black font-normal">
          {item.title}
        </h2>
      </div>
    </motion.button>
  );
}