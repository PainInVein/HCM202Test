import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { timelineData } from "../data/timelineData";

interface PresentationContextType {
  isPresentationMode: boolean;
  currentStepIndex: number;
  currentDetailIndex: number;
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
  const [currentDetailIndex, setCurrentDetailIndex] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);
  const navigate = useNavigate();

  // Helper to get narrative
  const getItemNarrative = (stepIdx: number, detailIdx: number) => {
    const item = timelineData[stepIdx];
    if (!item) return "";

    if (detailIdx === -1) {
      return item.narrative;
    }

    const detail = item.details[detailIdx];
    return detail?.narrative || "";
  };

  // Auto-advance effect (when playing, auto-advance every few seconds)
  useEffect(() => {
    if (!isPresentationMode || !isPlaying) return;

    const textLength = getItemNarrative(currentStepIndex, currentDetailIndex).length;
    // Skip empty narratives quickly
    if (textLength === 0) {
      const timer = setTimeout(() => nextStep(), 500);
      return () => clearTimeout(timer);
    }

    // Auto-advance based on text length (rough reading speed)
    const delay = Math.max(3000, Math.min(textLength * 80, 12000));
    const timer = setTimeout(() => nextStep(), delay);
    return () => clearTimeout(timer);
  }, [currentStepIndex, currentDetailIndex, isPresentationMode, isPlaying]);

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
    setCurrentDetailIndex(-1);
    setIsPlaying(true);
    navigate(`/detail/${timelineData[0].id}`);
  };

  const stopPresentation = () => {
    setIsPresentationMode(false);
    setIsPlaying(false);
    navigate('/');
  };

  const togglePlay = () => {
    setIsPlaying(prev => !prev);
  };

  const nextStep = () => {
    const currentItem = timelineData[currentStepIndex];

    if (currentDetailIndex < currentItem.details.length - 1) {
      setCurrentDetailIndex(prev => prev + 1);
    } else if (currentStepIndex < timelineData.length - 1) {
      const nextIdx = currentStepIndex + 1;
      setCurrentStepIndex(nextIdx);
      setCurrentDetailIndex(-1);
      navigate(`/detail/${timelineData[nextIdx].id}`);
    } else {
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
      setCurrentDetailIndex(prevItem.details.length - 1);
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
