import { usePresentation } from "../Contexts/PresentationContext";
import { motion, AnimatePresence } from "motion/react";
import { timelineData } from "../data/timelineData";

export function PresentationControls() {
  const { 
    isPresentationMode, 
    isPlaying, 
    currentStepIndex, 
    togglePlay, 
    stopPresentation, 
    nextStep, 
    prevStep 
  } = usePresentation();

  if (!isPresentationMode) return null;

  const progress = ((currentStepIndex + 1) / timelineData.length) * 100;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-4 w-[90%] max-w-lg"
      >
        {/* Main Control Bar */}
        <div className="bg-black/80 backdrop-blur-md text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-6 border border-white/10">
            
            {/* Step Counter */}
            <div className="font-display text-xs w-12 text-center text-white/60">
                {currentStepIndex + 1} / {timelineData.length}
            </div>

            {/* Prev Button */}
            <button 
                onClick={prevStep}
                disabled={currentStepIndex === 0}
                className="hover:text-amber-400 disabled:opacity-30 transition-colors"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>

            {/* Play/Pause Button - Prominent */}
            <button 
                onClick={togglePlay}
                className="bg-white text-black p-3 rounded-full hover:scale-110 transition-transform"
            >
                {isPlaying ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                )}
            </button>

            {/* Next Button */}
            <button 
                onClick={nextStep}
                disabled={currentStepIndex === timelineData.length - 1}
                className="hover:text-amber-400 disabled:opacity-30 transition-colors"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>

             {/* Stop Button */}
             <button 
                onClick={stopPresentation}
                className="text-white/60 hover:text-red-400 transition-colors ml-2"
                title="Thoát chế độ thuyết trình"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="9" x2="15" y2="15"/><line x1="15" y1="9" x2="9" y2="15"/></svg>
            </button>
        </div>

        {/* Progress Bar Container */}
        <div className="w-full h-1 bg-gray-700/50 rounded-full overflow-hidden">
            <motion.div 
                className="h-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
            />
        </div>

      </motion.div>
    </AnimatePresence>
  );
}
