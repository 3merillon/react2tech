"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { useQuiz } from "@/hooks/use-quiz"
import QuestionCard from "@/components/quiz/question-card"
import ResultsCard from "@/components/quiz/results-card"
import { Level, Question } from "@/types"
import { useQuizProgress } from "@/contexts/quiz-progress-context"
import LandingPage from "./landing-page"

export default function QuizClient({ 
  initialQuestions, 
  level 
}: { 
  initialQuestions: Question[]
  level: Level
}) {
  const [showLandingPage, setShowLandingPage] = useState(true)
  const { updateProgress } = useQuizProgress()
  const timerStoppedRef = useRef(false)
  const quizStartedRef = useRef(false)
  
  const {
    currentQuestion,
    currentQuestionIndex,
    totalQuestions,
    userAnswers,
    isCompleted,
    handleAnswerSelect,
    goToNextQuestion,
    goToPreviousQuestion,
    clearQuizState,
    calculateScore,
    isOptionSelected, 
    isCorrect,
    questions: shuffledQuestions,
    completeQuiz,
    resetAndShuffleQuestions,
    getTimeLimit,
  } = useQuiz(initialQuestions, level)

  // Clear all quiz data
  const clearAllQuizData = useCallback(() => {
    // Clear localStorage items
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      if (key && (key.startsWith('quiz-') || key.includes('quiz'))) {
        localStorage.removeItem(key)
      }
    }
    
    // Clear sessionStorage items
    for (let i = 0; i < sessionStorage.length; i++) {
      const key = sessionStorage.key(i)
      if (key && (key.startsWith('quiz-') || key.includes('quiz'))) {
        sessionStorage.removeItem(key)
      }
    }
    
    clearQuizState()
    
    // Clear quiz flags
    localStorage.removeItem("quiz-active")
    localStorage.removeItem("quiz-paused")
    localStorage.removeItem("quiz-reset-count")
    
    // Dispatch event to notify header
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event("quiz-state-changed"))
    }
  }, [clearQuizState]);
  
  // Initialize with landing page
  useEffect(() => {
    setShowLandingPage(true)
    clearAllQuizData()
    timerStoppedRef.current = false
    quizStartedRef.current = false
  }, [level, clearAllQuizData])
  
  // Handle quiz completion - pause timer
  useEffect(() => {
    if (isCompleted && !timerStoppedRef.current) {
      // Pause the timer without resetting
      localStorage.setItem("quiz-paused", "true");
      
      // Keep the active flag true so the timer stays visible
      localStorage.setItem("quiz-active", "true");
      
      // Dispatch event to notify header
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new Event("quiz-state-changed"));
      }
      
      timerStoppedRef.current = true;
    }
  }, [isCompleted]);
  
  // Update progress
  useEffect(() => {
    updateProgress({
      answeredCount: Object.keys(userAnswers).length,
      totalQuestions,
    })
    
    return () => {
      updateProgress(null)
    }
  }, [userAnswers, totalQuestions, updateProgress])
  
  // Warn before unload
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (!showLandingPage && Object.keys(userAnswers).length > 0 && !isCompleted) {
        e.preventDefault()
        e.returnValue = 'If you leave now, your progress will be lost. Are you sure you want to exit the quiz?'
        return e.returnValue
      }
    }
    
    window.addEventListener('beforeunload', handleBeforeUnload)
    return () => window.removeEventListener('beforeunload', handleBeforeUnload)
  }, [userAnswers, showLandingPage, isCompleted])

  // Handle timer completion
  useEffect(() => {
    const handleTimeUp = () => {
      // Automatically complete the quiz when time is up
      if (!isCompleted) {
        // Use requestAnimationFrame to ensure we're not in the middle of a render cycle
        requestAnimationFrame(() => {
          completeQuiz();
        });
      }
    };
  
    // Listen for custom timer-complete event
    window.addEventListener('timer-complete', handleTimeUp);
    
    return () => {
      window.removeEventListener('timer-complete', handleTimeUp);
    };
  }, [completeQuiz, isCompleted]);

  // Start timer when first question is loaded
  useEffect(() => {
    if (!showLandingPage && currentQuestion && !quizStartedRef.current) {
      // Only start the timer once when we first show a question
      quizStartedRef.current = true;
      
      // Start the timer with a small delay to ensure component is fully mounted
      setTimeout(() => {
        // Set quiz active flag
        localStorage.setItem("quiz-active", "true");
        
        // Set initial reset count
        localStorage.setItem("quiz-reset-count", "1");
        
        // Set timer duration based on level
        localStorage.setItem("quiz-duration", getTimeLimit());
        
        // Dispatch event to notify header
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new Event("quiz-state-changed"));
        }
      }, 0);
    }
  }, [showLandingPage, currentQuestion, getTimeLimit]);
  
  // Start quiz
  const handleStartQuiz = () => {
    clearAllQuizData();
    resetAndShuffleQuestions();
    timerStoppedRef.current = false;
    quizStartedRef.current = false;
    
    // Change UI state to show questions
    setShowLandingPage(false);
  }
  
  // Restart quiz
  const handleRestartQuiz = () => {
    // Set a flag to prevent multiple timer resets
    localStorage.setItem("quiz-freeze-time", "true");
    
    // Reset internal state
    resetAndShuffleQuestions();
    timerStoppedRef.current = false;
    quizStartedRef.current = false;
    
    // First clear all timer flags
    localStorage.removeItem("quiz-paused");
    
    // Then increment reset counter to trigger a clean reset
    const currentCount = Number(localStorage.getItem("quiz-reset-count") || "0");
    localStorage.setItem("quiz-reset-count", String(currentCount + 1));
    
    // Set active flag
    localStorage.setItem("quiz-active", "true");
    
    // Use a small delay before removing the freeze flag to prevent multiple resets
    setTimeout(() => {
      localStorage.removeItem("quiz-freeze-time");
      
      // Notify header
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new Event("quiz-state-changed"));
      }
    }, 100);
    
    // Change UI state
    setShowLandingPage(false);
  };
  
  // Complete quiz
  const handleQuizComplete = () => {
    // First, mark the timer as stopped
    timerStoppedRef.current = true;
    
    // Get the current timer value from the DOM or through a custom event
    // Store the exact timer value in localStorage
    localStorage.setItem("quiz-paused", "true");
    localStorage.setItem("quiz-active", "true");
    localStorage.setItem("quiz-freeze-time", "true"); // New flag to indicate we want to freeze the time
    
    // Dispatch event to notify header
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event("quiz-state-changed"));
    }
    
    // Complete the quiz
    completeQuiz();
  };
  
  if (showLandingPage) {
    return <LandingPage 
      level={level} 
      startQuiz={handleStartQuiz} 
      questionCount={totalQuestions}
      timeLimit={getTimeLimit()}
    />
  }
  
  if (isCompleted) {
    // Ensure timer is paused when showing results
    if (!timerStoppedRef.current) {
      // Pause the timer without resetting
      localStorage.setItem("quiz-paused", "true");
      
      // Keep the active flag true so the timer stays visible
      localStorage.setItem("quiz-active", "true");
      
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new Event("quiz-state-changed"));
      }
      
      timerStoppedRef.current = true;
    }
    
    return (
      <ResultsCard
        score={calculateScore()}
        questions={shuffledQuestions}
        userAnswers={userAnswers}
        onRestart={handleRestartQuiz}
        level={level}
        isCorrect={isCorrect}
      />
    )
  }
  
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {currentQuestion && (
        <QuestionCard
          question={currentQuestion}
          questionIndex={currentQuestionIndex}
          totalQuestions={totalQuestions}
          selectedAnswer={userAnswers[currentQuestion.id]}
          onAnswerSelect={handleAnswerSelect}
          onNext={currentQuestionIndex === totalQuestions - 1 ? handleQuizComplete : goToNextQuestion}
          onPrevious={goToPreviousQuestion}
          isAnswered={false}
          isOptionSelected={isOptionSelected}
          level={level}
        />
      )}
    </div>
  );
}
