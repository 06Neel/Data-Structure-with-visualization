import { useState, useCallback, useRef, useEffect } from 'react';
import type { LLStep } from '../utils/algorithms/linkedList';

// Reuse the same global handlers from useAlgorithm
let activeHandler: (() => void) | null = null;
let activeNextHandler: (() => void) | null = null;
let activePrevHandler: (() => void) | null = null;

const handleGlobalKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    activeHandler?.();
  } else if (e.key === 'ArrowRight') {
    e.preventDefault();
    activeNextHandler?.();
  } else if (e.key === 'ArrowLeft') {
    e.preventDefault();
    activePrevHandler?.();
  }
};

if (typeof window !== 'undefined' && !window.__llKeyListenerAdded) {
  window.addEventListener('keydown', handleGlobalKeyDown);
  window.__llKeyListenerAdded = true;
}

declare global {
  interface Window {
    __llKeyListenerAdded?: boolean;
  }
}

export function useLinkedList(steps: LLStep[]) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const intervalRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isActiveRef = useRef(false);

  const step = useCallback(() => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  }, [steps.length]);

  const prevStep = useCallback(() => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  }, []);

  const reset = useCallback(() => {
    setCurrentStep(0);
    setIsPlaying(false);
  }, []);

  const togglePlay = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  // IntersectionObserver to detect when this visualization is visible
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isActiveRef.current = true;
          activeHandler = togglePlay;
          activeNextHandler = step;
          activePrevHandler = prevStep;
        } else {
          if (isActiveRef.current) {
            isActiveRef.current = false;
            if (activeHandler === togglePlay) {
              activeHandler = null;
              activeNextHandler = null;
              activePrevHandler = null;
            }
          }
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (isActiveRef.current && activeHandler === togglePlay) {
        activeHandler = null;
        activeNextHandler = null;
        activePrevHandler = null;
      }
    };
  }, [togglePlay, step, prevStep]);

  useEffect(() => {
    if (isPlaying && currentStep < steps.length - 1) {
      intervalRef.current = window.setInterval(() => {
        setCurrentStep((prev) => {
          if (prev >= steps.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 1000 / speed);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [isPlaying, speed, steps.length, currentStep]);

  const setSpeedFn = useCallback((s: number) => setSpeed(s), []);

  return {
    currentStep,
    currentStepData: steps[currentStep],
    isPlaying,
    speed,
    setSpeed: setSpeedFn,
    step,
    prev: prevStep,
    reset,
    togglePlay,
    totalSteps: steps.length,
    isFirst: currentStep === 0,
    isLast: currentStep === steps.length - 1,
    containerRef,
  };
}
