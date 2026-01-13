import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.05); // Default very low volume
  const [isHovered, setIsHovered] = useState(false);
  const [showInteractionPrompt, setShowInteractionPrompt] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Use a reliable, direct MP3 link (Royalty Free - "Emotional Historic" style)
  // Restored the "Cinematic Documentary" track which is verified to work.
  // Other 'Epic' tracks had broken/expired links.
  const AUDIO_SRC = "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=cinematic-documentary-115669.mp3";  

  // Auto-play attempt on mount
  useEffect(() => {
    const attemptPlay = async () => {
      if (audioRef.current) {
        try {
          audioRef.current.volume = volume;
          await audioRef.current.play();
          setIsPlaying(true);
          setShowInteractionPrompt(false);
        } catch (err) {
          console.log("Autoplay blocked, showing prompt");
          setShowInteractionPrompt(true);
        }
      }
    };
    attemptPlay();

    const unlockAudio = () => {
        if (!hasInteracted && audioRef.current) {
            audioRef.current.play().then(() => {
                setIsPlaying(true);
                setHasInteracted(true);
                setShowInteractionPrompt(false);
            }).catch(e => console.error(e));
        }
    };
    
    // Add global click listener as fallback
    window.addEventListener('click', unlockAudio, { once: true });
    return () => window.removeEventListener('click', unlockAudio);
  }, [hasInteracted]);

  // Update volume when state changes
  useEffect(() => {
      if (audioRef.current) {
          audioRef.current.volume = volume;
      }
  }, [volume]);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio 
        ref={audioRef} 
        loop 
        src={AUDIO_SRC} 
      />
      
      {/* Interaction Prompt (if Autoplay blocked) */}
      <AnimatePresence>
        {showInteractionPrompt && !isPlaying && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 left-8 z-50 bg-vintage-red/90 text-white px-4 py-2 rounded-lg shadow-xl text-sm font-display flex items-center gap-2 cursor-pointer"
            onClick={() => {
                toggleMusic();
                setShowInteractionPrompt(false);
            }}
          >
            <span>Click để bật nhạc nền</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M5 3l14 9-14 9V3z"/></svg>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="fixed bottom-8 left-8 z-50 flex items-center gap-4"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
          {/* Toggle Button */}
          <button
            onClick={toggleMusic}
            className="p-3 rounded-full bg-vintage-black/80 backdrop-blur-md border border-vintage-gold/30 text-vintage-gold hover:bg-vintage-black transition-colors shadow-lg"
            title={isPlaying ? "Tắt nhạc" : "Bật nhạc"}
          >
            {isPlaying ? (
              <div className="flex gap-1 items-end h-4 w-4 justify-center">
                <motion.div animate={{ height: [4, 12, 4] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1 bg-vintage-gold rounded-full" />
                <motion.div animate={{ height: [8, 16, 8] }} transition={{ repeat: Infinity, duration: 1.2, delay: 0.2 }} className="w-1 bg-vintage-gold rounded-full" />
                <motion.div animate={{ height: [6, 10, 6] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.4 }} className="w-1 bg-vintage-gold rounded-full" />
              </div>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z"/><line x1="23" y1="1" x2="17" y2="7"/><line x1="17" y1="1" x2="23" y2="7"/></svg>
            )}
          </button>

          {/* Volume Slider (Reveals on Hover) */}
          <AnimatePresence>
              {isHovered && (
                  <motion.div
                    initial={{ width: 0, opacity: 0, x: -10 }}
                    animate={{ width: 100, opacity: 1, x: 0 }}
                    exit={{ width: 0, opacity: 0, x: -10 }}
                    className="overflow-hidden bg-vintage-black/80 backdrop-blur-md rounded-full h-10 flex items-center px-3 border border-vintage-gold/30"
                  >
                      <input 
                        type="range" 
                        min="0" 
                        max="1" 
                        step="0.01" 
                        value={volume}
                        onChange={(e) => setVolume(parseFloat(e.target.value))}
                        className="w-full h-1 bg-vintage-gold/30 rounded-lg appearance-none cursor-pointer accent-vintage-gold"
                      />
                  </motion.div>
              )}
          </AnimatePresence>
      </motion.div>
    </>
  );
}
