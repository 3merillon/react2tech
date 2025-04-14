"use client"

import { useEffect, useState, useMemo, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Question } from "@/types"
import { ArrowLeft, RotateCcw, ChevronLeft, ChevronRight, Filter, CheckCircle2, XCircle, SortAsc } from "lucide-react"
import ExplanationCard from "./explanation-card"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"

interface ResultsCardProps {
  score: {
    correct: number
    total: number
    percentage: number
  }
  questions: Question[]
  userAnswers: Record<string, string | string[]>
  onRestart: () => void
  level: number
  isCorrect: (questionId: string) => boolean
}

type SortOption = "all" | "correct" | "incorrect"

export default function ResultsCard({
  score,
  questions,
  userAnswers,
  onRestart,
  level,
  isCorrect,
}: ResultsCardProps) {
  const router = useRouter()
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [sortOption, setSortOption] = useState<SortOption>("all")
  const [showSortMenu, setShowSortMenu] = useState(false)
  const sortMenuRef = useRef<HTMLDivElement>(null)

  // Group questions by their correctness
  const questionGroups = useMemo(() => {
    const correctQuestions = questions.filter(q => isCorrect(q.id))
    const incorrectQuestions = questions.filter(q => !isCorrect(q.id))

    return {
      all: questions,
      correct: correctQuestions,
      incorrect: incorrectQuestions
    }
  }, [questions, isCorrect])

  // Get the current filtered questions based on sort option
  const filteredQuestions = useMemo(() => {
    return questionGroups[sortOption]
  }, [questionGroups, sortOption])

  // Reset current index when changing sort option
  useEffect(() => {
    setCurrentQuestionIndex(0)
  }, [sortOption])

  // Handle clicks outside the sort menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sortMenuRef.current && 
        !sortMenuRef.current.contains(event.target as Node) &&
        showSortMenu
      ) {
        setShowSortMenu(false)
      }
    }
    
    // Add event listener when menu is open
    if (showSortMenu) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    
    // Clean up event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showSortMenu])
  
  // Close menu when window is resized
  useEffect(() => {
    const handleResize = () => {
      if (showSortMenu) {
        setShowSortMenu(false)
      }
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [showSortMenu])

  // Ensure timer is paused but NOT reset when results card is shown
  useEffect(() => {
    // Only set the paused flag if it's not already set
    if (localStorage.getItem("quiz-paused") !== "true") {
      // Pause the timer
      localStorage.setItem("quiz-paused", "true");
      
      // Keep the active flag true so the timer stays visible
      localStorage.setItem("quiz-active", "true");
      
      // Notify header
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new Event("quiz-state-changed"));
      }
    }
  }, []);

  const getScoreMessage = () => {
    if (score.percentage >= 90) return "Excellent! You're ready for certification!"
    if (score.percentage >= 70) return "Good job! Just a bit more practice needed."
    if (score.percentage >= 50) return "Not bad, but you should review the material."
    return "You need more practice before taking the certification."
  }

  const getScoreColor = () => {
    if (score.percentage >= 90) return "text-green-500"
    if (score.percentage >= 70) return "text-blue-500"
    if (score.percentage >= 50) return "text-yellow-500"
    return "text-red-500"
  }

  const handleBackToHome = () => {
    // Clear the quiz state for this level
    localStorage.removeItem(`quiz-state-level-${level}`)
    
    // Clear quiz flags
    localStorage.removeItem("quiz-active")
    localStorage.removeItem("quiz-paused")
    localStorage.removeItem("quiz-reset-count")
    
    // Notify header
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event("quiz-state-changed"))
    }
    
    router.push('/')
  }

  const handleRestart = () => {
    // First clear all timer flags
    localStorage.removeItem("quiz-paused");
    localStorage.removeItem("quiz-freeze-time");
    
    // Then increment reset counter to trigger a clean reset
    const currentCount = Number(localStorage.getItem("quiz-reset-count") || "0");
    localStorage.setItem("quiz-reset-count", String(currentCount + 1));
    
    // Finally set active flag
    localStorage.setItem("quiz-active", "true");
    
    // Notify header
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event("quiz-state-changed"));
    }
    
    // Call the onRestart prop
    onRestart();
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1)
    }
  }

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1)
    }
  }

  const getSortOptionLabel = (option: SortOption) => {
    switch (option) {
      case "all": return "All Questions"
      case "correct": return "Correct Answers"
      case "incorrect": return "Incorrect Answers"
      default: return "All Questions"
    }
  }

  const currentQuestion = filteredQuestions[currentQuestionIndex]

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Quiz Results</CardTitle>
          <CardDescription>
            Level {level} React Certification Quiz
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center py-6">
            <div className={`text-6xl font-bold ${getScoreColor()} transition-all duration-500 hover:scale-110`}>
              {score.percentage}%
            </div>
            <div className="text-xl mt-3 font-medium">
              {score.correct} correct out of {score.total} questions
            </div>
            <div className="mt-4 text-lg">
              {getScoreMessage()}
            </div>
          </div>

          {/* Question summary cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <Card className="bg-green-100 dark:bg-green-900/30 border-green-300 dark:border-green-800">
              <CardContent className="p-4 text-center">
                <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-700 dark:text-green-300">{score.correct}</div>
                <div className="text-sm text-green-800 dark:text-green-200">Correct Answers</div>
              </CardContent>
            </Card>
            
            <Card className="bg-red-100 dark:bg-red-900/30 border-red-300 dark:border-red-800">
              <CardContent className="p-4 text-center">
                <XCircle className="h-8 w-8 text-red-600 dark:text-red-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-red-700 dark:text-red-300">{score.total - score.correct}</div>
                <div className="text-sm text-red-800 dark:text-red-200">Incorrect Answers</div>
              </CardContent>
            </Card>
            
            <Card className="bg-blue-100 dark:bg-blue-900/30 border-blue-300 dark:border-blue-800">
              <CardContent className="p-4 text-center">
                <SortAsc className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">{score.total}</div>
                <div className="text-sm text-blue-800 dark:text-blue-200">Total Questions</div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between border-t pt-6">
          <Button 
            variant="outline" 
            onClick={handleBackToHome} 
            className="flex items-center gap-2 cursor-pointer border-2 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
          <Button 
            onClick={handleRestart} 
            className="flex items-center gap-2 cursor-pointer border-2 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
          >
            <RotateCcw className="h-4 w-4" />
            Restart Quiz
          </Button>
        </CardFooter>
      </Card>

      <div className="space-y-6">
        <div className="flex justify-between items-center flex-wrap gap-4">
          <h2 className="text-2xl font-bold">Question Review</h2>
          
          {/* Sort menu */}
          <div className="relative" ref={sortMenuRef}>
            <Button 
              variant="outline" 
              className="flex items-center gap-2"
              onClick={() => setShowSortMenu(!showSortMenu)}
            >
              <Filter className="h-4 w-4" />
              {getSortOptionLabel(sortOption)}
            </Button>
            
            {showSortMenu && (
              <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-background/95 backdrop-blur-sm border z-10">
                <div className="py-1">
                  {(["all", "correct", "incorrect"] as SortOption[]).map((option) => (
                    <button
                      key={option}
                      className={cn(
                        "block w-full text-left px-4 py-2 text-sm",
                        sortOption === option 
                          ? "bg-primary text-primary-foreground" 
                          : "hover:bg-accent hover:text-accent-foreground"
                      )}
                      onClick={() => {
                        setSortOption(option)
                        setShowSortMenu(false)
                      }}
                    >
                      {getSortOptionLabel(option)}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Question navigation */}
        <div className="flex items-center justify-between mb-4">
          <Button
            variant="outline"
            onClick={goToPreviousQuestion}
            disabled={currentQuestionIndex === 0}
            className={cn(
              "flex items-center gap-2",
              currentQuestionIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            )}
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>
          
          <div className="text-sm">
            Question {currentQuestionIndex + 1} of {filteredQuestions.length}
          </div>
          
          <Button
            variant="outline"
            onClick={goToNextQuestion}
            disabled={currentQuestionIndex === filteredQuestions.length - 1}
            className={cn(
              "flex items-center gap-2",
              currentQuestionIndex === filteredQuestions.length - 1 ? "opacity-50 cursor-not-allowed" : ""
            )}
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Current question explanation */}
        {currentQuestion && (
          <ExplanationCard
            key={currentQuestion.id}
            question={currentQuestion}
            questionNumber={questions.findIndex(q => q.id === currentQuestion.id) + 1}
            userAnswer={userAnswers[currentQuestion.id]}
            isCorrect={isCorrect(currentQuestion.id)}
          />
        )}
      </div>
    </div>
  )
}