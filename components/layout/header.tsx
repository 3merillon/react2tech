"use client";

import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useMemo, useRef } from "react";
import { cn } from "@/lib/utils";
import { useQuizProgress } from "@/contexts/quiz-progress-context";
import { useTheme } from "next-themes";
import { usePathname, useRouter } from "next/navigation";
import DigitalTimer from "@/components/quiz/digital-timer";

function SafeLink({
  href,
  children,
  className,
  style,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}) {
  const router = useRouter();
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (onClick) onClick();
    router.push(href);
  };
  return (
    <a href={href} className={className} style={style} onClick={handleClick}>
      {children}
    </a>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isMenuClosing, setIsMenuClosing] = useState<boolean>(false);
  const [, setForceUpdate] = useState<number>(0);
  const [quizActive, setQuizActive] = useState<boolean>(false);
  const [quizPaused, setQuizPaused] = useState<boolean>(false);
  const [resetKey, setResetKey] = useState<number>(0);
  const [timePercentage, setTimePercentage] = useState<number>(0);
  const [timerBarColor, setTimerBarColor] = useState<string>("bg-blue-500");
  const [showProgressBar, setShowProgressBar] = useState<boolean>(false);
  const { progress, updateProgress } = useQuizProgress();
  const { resolvedTheme } = useTheme();
  const isDarkTheme = resolvedTheme === "dark";
  const pathname = usePathname();
  const prevPathRef = useRef<string | null>(null);

  // Check if we're on a quiz page
  const isQuizPage = pathname?.includes("/quiz/");

  // Function to get timer values based on quiz level
  const getTimerValues = (level: string | null) => {
    // Check if there's a custom duration set
    const customDuration = localStorage.getItem("quiz-duration");
    if (customDuration) {
      // Handle both HH:MM:SS and MM:SS formats
      const parts = customDuration.split(":").map(Number);
      if (parts.length === 3) {
        return { 
          hours: isNaN(parts[0]) ? 0 : parts[0], 
          minutes: isNaN(parts[1]) ? 0 : parts[1], 
          seconds: isNaN(parts[2]) ? 0 : parts[2], 
          showHours: true 
        };
      } else if (parts.length === 2) {
        return { 
          hours: 0, 
          minutes: isNaN(parts[0]) ? 25 : parts[0], 
          seconds: isNaN(parts[1]) ? 0 : parts[1], 
          showHours: false 
        };
      }
    }
  
    // Default durations by level
    if (!level) return { hours: 0, minutes: 25, seconds: 0, showHours: false };
    switch (level) {
      case "1":
        return { hours: 0, minutes: 12, seconds: 30, showHours: false };
      case "2":
        return { hours: 0, minutes: 20, seconds: 0, showHours: false };
      case "3":
        return { hours: 0, minutes: 25, seconds: 0, showHours: false };
      default:
        return { hours: 0, minutes: 25, seconds: 0, showHours: false };
    }
  };

  // Clean up quiz state when navigating away from quiz pages
  useEffect(() => {
    if (prevPathRef.current?.includes("/quiz/") && !isQuizPage) {
      setQuizActive(false);
      setQuizPaused(false);
      setTimePercentage(0);
      setShowProgressBar(false);
      localStorage.removeItem("quiz-active");
      localStorage.removeItem("quiz-paused");
      localStorage.removeItem("quiz-reset-count");
      updateProgress(null);
      // Clear any leftover intervals (if any)
    }
    prevPathRef.current = pathname;
  }, [pathname, isQuizPage, updateProgress]);

  // Listen for quiz state changes and reset timer values accordingly
  useEffect(() => {
    if (!isQuizPage) {
      setQuizActive(false);
      setQuizPaused(false);
      setTimePercentage(0);
      setShowProgressBar(false);
      return;
    }
  
    const checkQuizState = () => {
      const isActive = localStorage.getItem("quiz-active") === "true";
      const isPaused = localStorage.getItem("quiz-paused") === "true";
      const isFrozen = localStorage.getItem("quiz-freeze-time") === "true";
      const resetCount = Number(localStorage.getItem("quiz-reset-count") || "0");
      const shouldShowProgress = isActive && progress !== null;
      
      setShowProgressBar(shouldShowProgress);
      
      // Only reset percentage if not frozen
      if (isActive && (!quizActive || resetCount !== resetKey) && !isFrozen) {
        setTimePercentage(0);
      }
      
      setQuizActive(isActive);
      setQuizPaused(isPaused || isFrozen); // Consider frozen as paused for the header
      
      if (resetCount !== resetKey) {
        setResetKey(resetCount);
      }
    };
  
    checkQuizState();
  
    const handleQuizStateChange = () => setTimeout(checkQuizState, 0);
    const handleStorageChange = (e: StorageEvent) => {
      if (["quiz-active", "quiz-paused", "quiz-reset-count"].includes(e.key || "")) {
        checkQuizState();
      }
    };
  
    window.addEventListener("quiz-state-changed", handleQuizStateChange);
    window.addEventListener("storage", handleStorageChange);
    const intervalId = setInterval(checkQuizState, 500);
    return () => {
      window.removeEventListener("quiz-state-changed", handleQuizStateChange);
      window.removeEventListener("storage", handleStorageChange);
      clearInterval(intervalId);
    };
  }, [quizActive, resetKey, pathname, isQuizPage, progress]);

  // Update progress bar visibility when progress changes
  useEffect(() => {
    if (isQuizPage && quizActive && progress !== null) {
      setShowProgressBar(true);
    } else {
      setShowProgressBar(false);
    }
  }, [progress, quizActive, isQuizPage]);

  // Timer bar update using custom "timer-update" event from DigitalTimer
  useEffect(() => {
    if (!isQuizPage) return;
  
    const handleTimerUpdate = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail && typeof customEvent.detail.percentage === "number") {
        requestAnimationFrame(() => {
          setTimePercentage(customEvent.detail.percentage);
        });
      }
    };
  
    window.addEventListener("timer-update", handleTimerUpdate as EventListener);
    return () => {
      window.removeEventListener("timer-update", handleTimerUpdate as EventListener);
    };
  }, [isQuizPage]);

  // Listen for timer color changes
  useEffect(() => {
    if (!isQuizPage) return;

    const handleColorChange = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail && customEvent.detail.bgColor) {
        setTimerBarColor(customEvent.detail.bgColor);
      }
    };

    window.addEventListener("timer-color-change", handleColorChange as EventListener);
    return () => {
      window.removeEventListener("timer-color-change", handleColorChange as EventListener);
    };
  }, [isQuizPage]);

  const progressPercentage = useMemo(() => {
    if (!progress) return 0;
    return Math.round((progress.answeredCount / progress.totalQuestions) * 100);
  }, [progress]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
      setForceUpdate((prev) => prev + 1);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCloseMenu = () => {
    setIsMenuClosing(true);
    setTimeout(() => {
      setIsMenuOpen(false);
      setIsMenuClosing(false);
    }, 200);
  };

  // Custom link handler to clear quiz state when leaving quiz pages
  const handleLinkClick = (href: string) => {
    const isCurrentQuizPage = pathname?.includes("/quiz/");
    const isTargetQuizPage = href.includes("/quiz/");
    if ((isCurrentQuizPage && !isTargetQuizPage) ||
        (isCurrentQuizPage && isTargetQuizPage && !href.includes(pathname.split("/")[2]))) {
      localStorage.removeItem("quiz-active");
      localStorage.removeItem("quiz-paused");
      localStorage.removeItem("quiz-reset-count");
      setQuizActive(false);
      setQuizPaused(false);
      setTimePercentage(0);
      setShowProgressBar(false);
      updateProgress(null);
    }
  };

  return (
    <>
      <style jsx global>{`
        @keyframes menuSlideIn {
          from {
            transform: translateY(-20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes menuSlideOut {
          from {
            transform: translateY(0);
            opacity: 1;
          }
          to {
            transform: translateY(-20px);
            opacity: 0;
          }
        }
        
        /* Add styles for the logo in dark mode */
        .dark .logo-color-shift {
          filter: brightness(0) invert(1);
        }
      `}</style>

      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between mx-auto px-4 sm:px-6">
          <div className="flex-shrink-0">
          <Link href="/" onClick={() => handleLinkClick("/")} className="flex items-center gap-2 font-bold text-xl">
            <div className="h-8 w-8 relative">
              <Image 
                src="/images/logo.svg" 
                alt="React2Tech Logo" 
                fill
                priority
                className="object-contain transition-all logo-color-shift"
              />
            </div>
            React2Tech
          </Link>
          </div>
          <div className="flex-grow flex justify-center">
            {isQuizPage && (() => {
              const level = pathname?.split("/")[2] || null;
              const { hours, minutes, seconds, showHours } = getTimerValues(level);
              return (
                <DigitalTimer
                  key={resetKey}
                  active={quizActive}
                  paused={quizPaused}
                  initialHours={hours}
                  initialMinutes={minutes}
                  initialSeconds={seconds}
                  showHours={showHours}
                  onTimeUp={() => {}}
                  className="h-10"
                />
              );
            })()}
          </div>
          <div className="flex-shrink-0">
            <nav className="hidden md:flex items-center gap-6">
              <SafeLink
                href="/"
                onClick={() => handleLinkClick("/")}
                className={cn(
                  "nav-link text-sm font-medium transition-colors",
                  pathname === "/" 
                    ? "active bg-striped-active text-primary pointer-events-none" 
                    : "hover:text-primary"
                )}
              >
                Home
              </SafeLink>
              <SafeLink
                href="/quiz/1"
                onClick={() => handleLinkClick("/quiz/1")}
                className={cn(
                  "nav-link text-sm font-medium transition-colors",
                  pathname === "/quiz/1" 
                    ? "active bg-striped-active text-primary pointer-events-none" 
                    : "hover:text-primary"
                )}
              >
                Level 1
              </SafeLink>
              <SafeLink
                href="/quiz/2"
                onClick={() => handleLinkClick("/quiz/2")}
                className={cn(
                  "nav-link text-sm font-medium transition-colors",
                  pathname === "/quiz/2" 
                    ? "active bg-striped-active text-primary pointer-events-none" 
                    : "hover:text-primary"
                )}
              >
                Level 2
              </SafeLink>
              <SafeLink
                href="/quiz/3"
                onClick={() => handleLinkClick("/quiz/3")}
                className={cn(
                  "nav-link text-sm font-medium transition-colors",
                  pathname === "/quiz/3" 
                    ? "active bg-striped-active text-primary pointer-events-none" 
                    : "hover:text-primary"
                )}
              >
                Level 3
              </SafeLink>
              <div className="relative">
                <ThemeToggle />
              </div>
            </nav>
            <div className="flex md:hidden items-center gap-2">
              <div className="relative">
                <ThemeToggle />
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
                className="cursor-pointer"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        <div className="w-full px-4 sm:px-6 pb-1 space-y-2">
          {isQuizPage && quizActive && (
            <div className={`relative h-2.5 rounded-full overflow-hidden ${isDarkTheme ? "bg-neutral-700" : "bg-neutral-200"}`}>
              <div
                className={`absolute left-0 top-0 h-full rounded-full ${timerBarColor} timer-bar`}
                style={{ 
                  width: `${timePercentage}%`
                }}
              />
            </div>
          )}
          {showProgressBar && progress && (
            <div className={`relative h-2.5 rounded-full ${isDarkTheme ? "bg-neutral-700" : "bg-neutral-200"} mt-4`}>
              <div
                className="absolute left-0 top-0 h-full rounded-full bg-green-500 transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              />
              <div
                className="absolute -bottom-5 text-xs font-bold text-green-500"
                style={{ left: `${progressPercentage}%`, transform: "translateX(-50%)" }}
              >
                {progressPercentage}%
              </div>
            </div>
          )}
        </div>

        {isMenuOpen && (
          <div className="fixed inset-0 z-[9999] md:hidden" onClick={handleCloseMenu}>
            <div
              className="absolute inset-0 pointer-events-auto"
              style={{
                backgroundColor: isDarkTheme ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.1)",
              }}
            />
            <div
              className={cn("absolute inset-x-4 top-20 menu-container pointer-events-auto", isMenuClosing && "closing")}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className={cn(
                  "rounded-lg border-2 shadow-lg overflow-hidden",
                  isDarkTheme 
                    ? "bg-slate-800/90 backdrop-blur-lg border-slate-700" 
                    : "bg-white/90 backdrop-blur-lg border-gray-300"
                )}
              >
                <div className="p-4 relative z-10">
                  <nav className="flex flex-col space-y-3">
                  <SafeLink
                    href="/"
                    onClick={() => {
                      handleLinkClick("/");
                      handleCloseMenu();
                    }}
                    className={cn(
                      "menu-link text-lg font-medium border-2 rounded-md px-4 py-3 transition-all duration-200 hover:shadow-sm hover:translate-x-1",
                      "cursor-pointer",
                      pathname === "/" 
                        ? "bg-striped-active border-primary/50 text-primary font-semibold pointer-events-none opacity-90" 
                        : isDarkTheme
                          ? "bg-slate-700/90 border-slate-600 hover:bg-primary/10 hover:border-primary/50" 
                          : "bg-gray-50 border-gray-200 hover:bg-primary/10 hover:border-primary/30"
                    )}
                  >
                    Home
                  </SafeLink>
                  <SafeLink
                    href="/quiz/1"
                    onClick={() => {
                      handleLinkClick("/quiz/1");
                      handleCloseMenu();
                    }}
                    className={cn(
                      "menu-link text-lg font-medium border-2 rounded-md px-4 py-3 transition-all duration-200 hover:shadow-sm hover:translate-x-1",
                      "cursor-pointer",
                      pathname === "/quiz/1" 
                        ? "bg-striped-active border-primary/50 text-primary font-semibold pointer-events-none opacity-90" 
                        : isDarkTheme
                          ? "bg-slate-700/90 border-slate-600 hover:bg-primary/10 hover:border-primary/50" 
                          : "bg-gray-50 border-gray-200 hover:bg-primary/10 hover:border-primary/30"
                    )}
                  >
                    Level 1
                  </SafeLink>
                  <SafeLink
                    href="/quiz/2"
                    onClick={() => {
                      handleLinkClick("/quiz/2");
                      handleCloseMenu();
                    }}
                    className={cn(
                      "menu-link text-lg font-medium border-2 rounded-md px-4 py-3 transition-all duration-200 hover:shadow-sm hover:translate-x-1",
                      "cursor-pointer",
                      pathname === "/quiz/2" 
                        ? "bg-striped-active border-primary/50 text-primary font-semibold pointer-events-none opacity-90" 
                        : isDarkTheme
                          ? "bg-slate-700/90 border-slate-600 hover:bg-primary/10 hover:border-primary/50" 
                          : "bg-gray-50 border-gray-200 hover:bg-primary/10 hover:border-primary/30"
                    )}
                  >
                    Level 2
                  </SafeLink>
                  <SafeLink
                    href="/quiz/3"
                    onClick={() => {
                      handleLinkClick("/quiz/3");
                      handleCloseMenu();
                    }}
                    className={cn(
                      "menu-link text-lg font-medium border-2 rounded-md px-4 py-3 transition-all duration-200 hover:shadow-sm hover:translate-x-1",
                      "cursor-pointer",
                      pathname === "/quiz/3" 
                        ? "bg-striped-active border-primary/50 text-primary font-semibold pointer-events-none opacity-90" 
                        : isDarkTheme
                          ? "bg-slate-700/90 border-slate-600 hover:bg-primary/10 hover:border-primary/50" 
                          : "bg-gray-50 border-gray-200 hover:bg-primary/10 hover:border-primary/30"
                    )}
                  >
                    Level 3
                  </SafeLink>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}