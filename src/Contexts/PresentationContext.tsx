import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { timelineData } from "../data/timelineData";

interface PresentationContextType {
  isPresentationMode: boolean;
  currentStepIndex: number; // Timeline Item Index
  currentDetailIndex: number; // Detail Item Index (-1 = Intro)
  isPlaying: boolean;
  startPresentation: () => void;
  stopPresentation: () => void;
  togglePlay: () => void;
  nextStep: () => void;
  prevStep: () => void;
  currentNarrative: string;
}

const PresentationContext = createContext<PresentationContextType | undefined>(undefined);

export function PresentationProvider({ children }: { children: React.ReactNode }) {
  const [isPresentationMode, setIsPresentationMode] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [currentDetailIndex, setCurrentDetailIndex] = useState(-1); // -1 means playing the Page Intro
  const [isPlaying, setIsPlaying] = useState(false);
  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);
  const navigate = useNavigate();

  // Helper to get narrative
  const getItemNarrative = (stepIdx: number, detailIdx: number) => {
    const item = timelineData[stepIdx];
    if (!item) return "";
    
    if (detailIdx === -1) {
        return item.narrative; // Page Intro
    }
    
    // Find next detail with a narrative
    const detail = item.details[detailIdx];
    return detail?.narrative || ""; 
  };

  // Main Speech Effect
  useEffect(() => {
    if (!isPresentationMode || !isPlaying) return;

    const textToSpeak = getItemNarrative(currentStepIndex, currentDetailIndex);
    
    // If text is empty (some details might not have specific narrative), auto-skip to next
    if (!textToSpeak) {
        // Use a small timeout to prevent stack overflow if many empties
        const timer = setTimeout(() => nextStep(), 500);
        return () => clearTimeout(timer);
    }

    speak(textToSpeak);

  }, [currentStepIndex, currentDetailIndex, isPresentationMode, isPlaying]);


  const speak = (text: string) => {
    window.speechSynthesis.cancel(); 

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'vi-VN'; 
    utterance.rate = 1.1; // Slightly faster to avoid "sleepy" feel
    utterance.pitch = 1.0;

    // Use best voice - Prioritize Google or Microsoft Online voices
    const voices = window.speechSynthesis.getVoices();
    const vnVoice = voices.find(v => 
        (v.name.includes('Google') && v.lang.includes('vi')) || 
        (v.name.includes('Microsoft') && v.name.includes('Online') && v.lang.includes('vi')) ||
        v.lang.includes('vi') || 
        v.lang.includes('VI')
    );
    
    if (vnVoice) {
        console.log("Selected Voice:", vnVoice.name);
        utterance.voice = vnVoice;
    }

    utterance.onend = () => {
       if (isPlaying) {
         // Immediate transition for smooth flow
         nextStep(); 
       }
    };

    speechRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  };


  // Scroll to element effect
  useEffect(() => {
      if (!isPresentationMode) return;

      if (currentDetailIndex === -1) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
          const elementId = `detail-${currentDetailIndex}`;
          const el = document.getElementById(elementId);
          if (el) {
              el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
      }
  }, [currentDetailIndex, currentStepIndex, isPresentationMode]);


  const startPresentation = () => {
    setIsPresentationMode(true);
    setCurrentStepIndex(0);
    setCurrentDetailIndex(-1); // Start with intro
    setIsPlaying(true);
    navigate(`/detail/${timelineData[0].id}`);
  };

  const stopPresentation = () => {
    setIsPresentationMode(false);
    setIsPlaying(false);
    window.speechSynthesis.cancel();
    navigate('/'); 
  };

  const togglePlay = () => {
    if (isPlaying) {
        window.speechSynthesis.pause();
        setIsPlaying(false);
    } else {
        window.speechSynthesis.resume();
        setIsPlaying(true);
    }
  };

  const nextStep = () => {
    const currentItem = timelineData[currentStepIndex];
    
    // Check if we can move to next detail in current item
    if (currentDetailIndex < currentItem.details.length - 1) {
        setCurrentDetailIndex(prev => prev + 1);
    } 
    // If no more details, move to next Page
    else if (currentStepIndex < timelineData.length - 1) {
        const nextIdx = currentStepIndex + 1;
        setCurrentStepIndex(nextIdx);
        setCurrentDetailIndex(-1); // Reset to Intro of next page
        navigate(`/detail/${timelineData[nextIdx].id}`);
    } 
    // End of presentation
    else {
        stopPresentation();
    }
  };

  const prevStep = () => {
    if (currentDetailIndex > -1) {
        setCurrentDetailIndex(prev => prev - 1);
    } else if (currentStepIndex > 0) {
        const prevIdx = currentStepIndex - 1;
        const prevItem = timelineData[prevIdx];
        setCurrentStepIndex(prevIdx);
        setCurrentDetailIndex(prevItem.details.length - 1); // Go to last item of prev page
        navigate(`/detail/${timelineData[prevIdx].id}`);
    }
  };

  return (
    <PresentationContext.Provider value={{
      isPresentationMode,
      currentStepIndex,
      currentDetailIndex,
      isPlaying,
      startPresentation,
      stopPresentation,
      togglePlay,
      nextStep,
      prevStep,
      currentNarrative: getItemNarrative(currentStepIndex, currentDetailIndex)
    }}>
      {children}
    </PresentationContext.Provider>
  );
}

export function usePresentation() {
  const context = useContext(PresentationContext);
  if (context === undefined) {
    throw new Error("usePresentation must be used within a PresentationProvider");
  }
  return context;
}
