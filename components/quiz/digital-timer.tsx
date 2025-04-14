"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"

interface DigitalTimerProps {
  active?: boolean;
  paused?: boolean;
  initialHours?: number;
  initialMinutes?: number;
  initialSeconds?: number;
  onTimeUp?: () => void;
  className?: string;
  showHours?: boolean;
}

// Safe timer update function outside the component - only for percentage updates
const safeEmitTimerUpdate = (
  seconds: number, 
  initialTotalSeconds: number
) => {
  requestAnimationFrame(() => {
    if (typeof window !== 'undefined') {
      // Calculate percentage of time elapsed (0-100)
      const elapsed = initialTotalSeconds - seconds;
      const percentage = Math.min(100, Math.max(0, (elapsed / initialTotalSeconds) * 100));
      
      const event = new CustomEvent('timer-update', {
        detail: {
          timeRemaining: seconds,
          initialTime: initialTotalSeconds,
          timeElapsed: elapsed,
          percentage: percentage
        }
      });
      window.dispatchEvent(event);
    }
  });
};

export default function DigitalTimer({
  active = false,
  paused = false,
  initialHours = 0,
  initialMinutes = 20,
  initialSeconds = 0,
  onTimeUp,
  className,
  showHours = false,
}: DigitalTimerProps) {
  const [totalSecondsDecimal, setTotalSecondsDecimal] = useState(
    initialHours * 3600 + initialMinutes * 60 + initialSeconds
  );
  const [isRunning, setIsRunning] = useState(false);
  const [isWarning, setIsWarning] = useState(false);
  const [isDanger, setIsDanger] = useState(false);
  const [isPulsating, setIsPulsating] = useState(false);
  // Track the current color mode
  const [colorMode, setColorMode] = useState<'normal' | 'warning' | 'danger' | 'critical'>('normal');
  
  const initialTotalSeconds = useRef(initialHours * 3600 + initialMinutes * 60 + initialSeconds);
  const animationFrameId = useRef<number | null>(null);
  const lastUpdateTime = useRef<number | null>(null);
  const hasCalledTimeUp = useRef(false);
  const resetKeyRef = useRef<number>(0);
  const { resolvedTheme } = useTheme();
  const isDarkTheme = resolvedTheme === "dark";
  
  // Track if timer is frozen (completed quiz)
  const [isFrozen, setIsFrozen] = useState(false);
  const frozenTimeRef = useRef<number | null>(null);

  // Initialize timer when props change
  useEffect(() => {
    // Reset timer to initial values when initialHours/initialMinutes/initialSeconds change
    const newTotalSeconds = initialHours * 3600 + initialMinutes * 60 + initialSeconds;
    setTotalSecondsDecimal(newTotalSeconds);
    initialTotalSeconds.current = newTotalSeconds;
    
    // Reset state
    setIsRunning(false);
    lastUpdateTime.current = null;
    hasCalledTimeUp.current = false;
    
    // Reset color
    setColorMode('normal');
    setIsWarning(false);
    setIsDanger(false);
    setIsPulsating(false);
    
    // Emit initial state
    safeEmitTimerUpdate(newTotalSeconds, initialTotalSeconds.current);
    
    // Emit color reset
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('timer-color-change', {
        detail: {
          colorMode: 'normal',
          bgColor: 'bg-blue-500'
        }
      }));
    }
  }, [initialHours, initialMinutes, initialSeconds]);

  // Check for reset key changes
  useEffect(() => {
    const resetCount = Number(localStorage.getItem("quiz-reset-count") || "0");
    
    if (resetCount !== resetKeyRef.current) {
      // Reset detected
      resetKeyRef.current = resetCount;
      
      // Clear frozen state
      setIsFrozen(false);
      frozenTimeRef.current = null;
      
      // Reset timer to initial value
      const newTotalSeconds = initialHours * 3600 + initialMinutes * 60 + initialSeconds;
      setTotalSecondsDecimal(newTotalSeconds);
      initialTotalSeconds.current = newTotalSeconds;
      
      // Reset state
      setIsRunning(false);
      lastUpdateTime.current = null;
      hasCalledTimeUp.current = false;
      
      // Reset color
      setColorMode('normal');
      setIsWarning(false);
      setIsDanger(false);
      setIsPulsating(false);
      
      // Emit initial state
      safeEmitTimerUpdate(newTotalSeconds, initialTotalSeconds.current);
      
      // Emit color reset
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('timer-color-change', {
          detail: {
            colorMode: 'normal',
            bgColor: 'bg-blue-500'
          }
        }));
      }
    }
  }, [initialHours, initialMinutes, initialSeconds]);

  // Check for frozen state
  useEffect(() => {
    const checkFrozenState = () => {
      const shouldFreeze = localStorage.getItem("quiz-freeze-time") === "true";
      
      if (shouldFreeze && !isFrozen) {
        // Freeze the timer
        frozenTimeRef.current = totalSecondsDecimal;
        setIsFrozen(true);
        setIsRunning(false);
        
        // Cancel any animation frame
        if (animationFrameId.current !== null) {
          cancelAnimationFrame(animationFrameId.current);
          animationFrameId.current = null;
        }
      } else if (!shouldFreeze && isFrozen) {
        // Unfreeze
        setIsFrozen(false);
        frozenTimeRef.current = null;
      }
    };
    
    checkFrozenState();
    
    const handleStateChange = () => {
      checkFrozenState();
    };
    
    window.addEventListener("quiz-state-changed", handleStateChange);
    return () => {
      window.removeEventListener("quiz-state-changed", handleStateChange);
    };
  }, [isFrozen, totalSecondsDecimal]);

  // Handle active and paused state changes
  useEffect(() => {
    // Don't change state if frozen
    if (isFrozen) return;
    
    if (active && !paused) {
      // Only start running if not already running
      if (!isRunning) {
        setIsRunning(true);
        lastUpdateTime.current = null;
      }
    } else {
      setIsRunning(false);
      
      // Emit update
      safeEmitTimerUpdate(Math.floor(totalSecondsDecimal), initialTotalSeconds.current);
      
      // Cancel animation frame
      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current);
        animationFrameId.current = null;
      }
    }
  }, [active, paused, isFrozen, totalSecondsDecimal, isRunning]);

  // Set warning and danger states based on percentage of time remaining
  useEffect(() => {
    if (initialTotalSeconds.current === 0) return;
    
    // Use frozen time if available
    const timeToUse = isFrozen && frozenTimeRef.current !== null 
      ? frozenTimeRef.current 
      : totalSecondsDecimal;
    
    const percentRemaining = (timeToUse / initialTotalSeconds.current) * 100;
    
    // Determine the new color mode
    let newColorMode: 'normal' | 'warning' | 'danger' | 'critical';
    if (percentRemaining <= 5) {
      newColorMode = 'critical';
    } else if (percentRemaining <= 25) {
      newColorMode = 'danger';
    } else if (percentRemaining <= 50) {
      newColorMode = 'warning';
    } else {
      newColorMode = 'normal';
    }
    
    // Only update if changed
    if (newColorMode !== colorMode) {
      setColorMode(newColorMode);
      
      // Update states
      setIsWarning(newColorMode === 'warning');
      setIsDanger(newColorMode === 'danger' || newColorMode === 'critical');
      setIsPulsating(newColorMode === 'critical');
      
      // Emit color change
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('timer-color-change', {
          detail: {
            colorMode: newColorMode,
            bgColor: newColorMode === 'critical' || newColorMode === 'danger' 
              ? 'bg-red-500' 
              : newColorMode === 'warning' 
                ? 'bg-yellow-500' 
                : 'bg-blue-500'
          }
        }));
      }
    }
  }, [totalSecondsDecimal, colorMode, isFrozen]);

  // Handle the countdown
  useEffect(() => {
    // Don't run if not running or frozen
    if (!isRunning || isFrozen) return;

    const updateTimer = (timestamp: number) => {
      if (!lastUpdateTime.current) {
        lastUpdateTime.current = timestamp;
      }
      
      const elapsed = timestamp - lastUpdateTime.current;
      
      // Update every frame but only emit events at reasonable intervals
      if (elapsed > 16) { // ~60fps
        lastUpdateTime.current = timestamp;
        
        setTotalSecondsDecimal(prev => {
          const decrement = elapsed / 1000; // Convert ms to seconds
          const newValue = Math.max(0, prev - decrement);
          
          // Emit timer update for UI elements - use integer for display
          const intSeconds = Math.floor(newValue);
          safeEmitTimerUpdate(intSeconds, initialTotalSeconds.current);
          
          if (newValue <= 0) {
            // Stop the animation when timer reaches zero
            cancelAnimationFrame(animationFrameId.current!);
            animationFrameId.current = null;
            
            setIsRunning(false);
            
            // Emit timer complete event using requestAnimationFrame to avoid updating during render
            requestAnimationFrame(() => {
              if (typeof window !== 'undefined') {
                window.dispatchEvent(new Event('timer-complete'));
              }
            });
            
            return 0;
          }
          
          return newValue;
        });
      }
      
      // Continue the animation loop
      animationFrameId.current = requestAnimationFrame(updateTimer);
    };
    
    // Start the animation loop
    animationFrameId.current = requestAnimationFrame(updateTimer);
    
    // Cleanup
    return () => {
      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isRunning, onTimeUp, isFrozen]);

  // Convert decimal seconds to display values
  // Use frozen time if available
  const displaySeconds = isFrozen && frozenTimeRef.current !== null 
    ? Math.floor(frozenTimeRef.current)
    : Math.floor(totalSecondsDecimal);
    
  const hours = Math.floor(displaySeconds / 3600);
  const minutes = Math.floor((displaySeconds % 3600) / 60);
  const seconds = displaySeconds % 60;
  const formatDigit = (digit: number) => digit.toString().padStart(2, '0');

  // Define segments for 7-segment display
  const digitSegments: Record<string, string[]> = {
    '0': ['a', 'b', 'c', 'd', 'e', 'f'],
    '1': ['b', 'c'],
    '2': ['a', 'b', 'd', 'e', 'g'],
    '3': ['a', 'b', 'c', 'd', 'g'],
    '4': ['b', 'c', 'f', 'g'],
    '5': ['a', 'c', 'd', 'f', 'g'],
    '6': ['a', 'c', 'd', 'e', 'f', 'g'],
    '7': ['a', 'b', 'c'],
    '8': ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
    '9': ['a', 'b', 'c', 'd', 'f', 'g']
  };

  // Get the active color and glow based on timer state
  const getActiveColorAndGlow = () => {
    if (isDanger) {
      return {
        bgColor: 'bg-red-500',
        glowColor: 'shadow-[0_0_5px_#ef4444,0_0_10px_rgba(239,68,68,0.8)]',
        textShadow: 'text-shadow-red'
      };
    }
    if (isWarning) {
      return {
        bgColor: 'bg-yellow-500',
        glowColor: 'shadow-[0_0_5px_#eab308,0_0_10px_rgba(234,179,8,0.8)]',
        textShadow: 'text-shadow-yellow'
      };
    }
    return {
      bgColor: 'bg-blue-500',
      glowColor: 'shadow-[0_0_5px_#3b82f6,0_0_10px_rgba(59,130,246,0.8)]',
      textShadow: 'text-shadow-blue'
    };
  };

  // Get the inactive segment color based on theme
  const getInactiveSegmentColor = () => {
    return isDarkTheme ? 'bg-gray-50/5' : 'bg-gray-400/20';
  };

  // Render a single digit
  const SegmentedDigit = ({ digit }: { digit: string }) => {
    const activeSegments = digitSegments[digit] || [];
    const { bgColor, glowColor } = getActiveColorAndGlow();
    
    const getSegmentColor = (segment: string) => {
      const isActive = activeSegments.includes(segment);
      
      // Active segments get the color based on timer state with glow
      if (isActive) {
        return `${bgColor} ${glowColor}`;
      }
      
      // Inactive segments get a theme-appropriate color
      return getInactiveSegmentColor();
    };
    
    return (
      <div className="relative w-5 h-8 mx-0.5">
        <div className={cn("absolute top-0 left-[20%] right-[20%] h-[3px] rounded-full", getSegmentColor('a'))} />
        <div className={cn("absolute top-[1px] right-0 w-[3px] h-[45%] rounded-full", getSegmentColor('b'))} />
        <div className={cn("absolute bottom-[1px] right-0 w-[3px] h-[45%] rounded-full", getSegmentColor('c'))} />
        <div className={cn("absolute bottom-0 left-[20%] right-[20%] h-[3px] rounded-full", getSegmentColor('d'))} />
        <div className={cn("absolute bottom-[1px] left-0 w-[3px] h-[45%] rounded-full", getSegmentColor('e'))} />
        <div className={cn("absolute top-[1px] left-0 w-[3px] h-[45%] rounded-full", getSegmentColor('f'))} />
        <div className={cn("absolute top-[50%] left-[20%] right-[20%] h-[3px] rounded-full transform -translate-y-1/2", getSegmentColor('g'))} />
      </div>
    );
  };

  // Render the separator (blinking colon)
  const Separator = () => {
    const [visible, setVisible] = useState(true);
    const { bgColor, glowColor } = getActiveColorAndGlow();
    
    useEffect(() => {
      const blinkInterval = setInterval(() => {
        // Only blink if timer is running
        if (isRunning) {
          setVisible(prev => !prev);
        } else if (!visible) {
          // Make sure it's visible when paused
          setVisible(true);
        }
      }, 1000);
      return () => clearInterval(blinkInterval);
    }, [visible]);
    
    return (
      <div className="flex flex-col justify-center h-8 mx-0.5 space-y-2">
        <div className={`w-2 h-2 rounded-full transition-opacity ${bgColor} ${glowColor} ${visible ? "opacity-100" : "opacity-30"}`} />
        <div className={`w-2 h-2 rounded-full transition-opacity ${bgColor} ${glowColor} ${visible ? "opacity-100" : "opacity-30"}`} />
      </div>
    );
  };

  const hoursStr = formatDigit(hours);
  const minutesStr = formatDigit(minutes);
  const secondsStr = formatDigit(seconds);

  // Get the background and border colors based on timer state
  const getBackgroundAndBorder = () => {
    if (isDanger) {
      return {
        bg: "bg-red-500/10",
        border: "border-red-500/40",
        shadow: "shadow-red-500/10"
      };
    }
    if (isWarning) {
      return {
        bg: "bg-yellow-500/10",
        border: "border-yellow-500/40",
        shadow: "shadow-yellow-500/10"
      };
    }
    return {
      bg: "bg-blue-500/10",
      border: "border-blue-500/40",
      shadow: "shadow-blue-500/10"
    };
  };

  const { bg, border, shadow } = getBackgroundAndBorder();

  return (
    <div className={cn(
      "flex items-center justify-center rounded-lg shadow-md transition-all h-10",
      "border-2",
      bg, border, shadow,
      isPulsating && !paused && !isFrozen && "animate-pulse",
      (paused || isFrozen) && "opacity-80", // Slightly dim the timer when paused or frozen
      className
    )}>
      <div className="flex items-center justify-center rounded-md w-full h-full bg-black/20 dark:bg-white/5 p-1">
        <div className="flex items-center">
          {showHours && (
            <>
              <SegmentedDigit digit={hoursStr[0]} />
              <SegmentedDigit digit={hoursStr[1]} />
              <Separator />
            </>
          )}
          <SegmentedDigit digit={minutesStr[0]} />
          <SegmentedDigit digit={minutesStr[1]} />
          <Separator />
          <SegmentedDigit digit={secondsStr[0]} />
          <SegmentedDigit digit={secondsStr[1]} />
        </div>
      </div>
    </div>
  );
}
