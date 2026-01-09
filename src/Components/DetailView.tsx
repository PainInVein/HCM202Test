import { motion } from "motion/react";
import type { TimelineItemType } from "../data/timelineData";

interface DetailViewProps {
  item: TimelineItemType;
  index: number;
  onClose: () => void;
}

export function DetailView({ item, index, onClose }: DetailViewProps) {
  return (
    <motion.div
      key={`detail-${index}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md perspective-[2000px]"
    >
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.5 }}
        onClick={(e) => e.stopPropagation()}
        className="fixed inset-0 w-full h-screen bg-white overflow-y-auto overflow-x-hidden z-[1001]"
      >
        <div className="relative min-h-screen flex flex-col max-w-7xl mx-auto p-8 md:p-16">
          
          {/* Header (Close Button) */}
          <div className="flex justify-end pt-4 mb-8">
            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.1, rotate: 90, backgroundColor: "#000", color: "#fff" }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="w-11 h-11 rounded-full border border-black/10 flex items-center justify-center text-2xl leading-none transition-colors duration-300"
            >
              ×
            </motion.button>
          </div>

          {/* Body Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex-1"
          >
            <span className="block text-sm tracking-[0.2em] uppercase text-black/50 font-semibold mb-4">
              {item.year}
            </span>
            <h3 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-8 text-black leading-tight">
              {item.title}
            </h3>
            <p className="text-lg md:text-xl leading-relaxed text-black/75 font-light max-w-3xl">
              {item.fullContent || item.description}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}