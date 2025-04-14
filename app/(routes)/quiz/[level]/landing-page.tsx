"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Level } from "@/types"
import { cn } from "@/lib/utils"
import { AlertTriangle } from "lucide-react"

interface LandingPageProps {
  level: Level
  startQuiz: () => void
  questionCount: number
  timeLimit: string
}

export default function LandingPage({ 
  level, 
  startQuiz, 
  questionCount, 
  timeLimit 
}: LandingPageProps) {
  const [isStarting, setIsStarting] = useState(false)
  const [hasSetQuizFlag, setHasSetQuizFlag] = useState(false)

  // Clear quiz data on mount
  useEffect(() => {
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
    
    // Clear the quiz active flag
    localStorage.removeItem("quiz-active")
    
    // Dispatch event to notify header
    window.dispatchEvent(new Event("quiz-state-changed"))
  }, [level])

  // Effect to handle quiz flag changes
  useEffect(() => {
    if (hasSetQuizFlag) {
      // Start quiz after a short delay
      setTimeout(() => {
        startQuiz()
      }, 700)
    }
  }, [hasSetQuizFlag, startQuiz])

  const getLevelTitle = () => {
    switch (level) {
      case 1: return "React Fundamentals"
      case 2: return "Intermediate React"
      case 3: return "Advanced React"
      default: return "React Quiz"
    }
  }

  const getLevelDescription = () => {
    switch (level) {
      case 1: return "Test your knowledge of React fundamentals including JSX, components, props, state, and lifecycle methods."
      case 2: return "Challenge yourself with intermediate React concepts like Context API, hooks, forms, and routing."
      case 3: return "Prove your expertise in advanced React topics including performance optimization, advanced patterns, and React internals."
      default: return "Test your React knowledge"
    }
  }

  // Format time limit for display
  const formatTimeLimit = () => {
    const parts = timeLimit.split(":");
    if (parts.length === 2) {
      const minutes = parseInt(parts[0]);
      const seconds = parseInt(parts[1]);
      
      if (seconds === 0) {
        return `${minutes} minutes`;
      } else {
        return `${minutes} minutes and ${seconds} seconds`;
      }
    }
    return timeLimit;
  };

  const handleStartQuiz = () => {
    setIsStarting(true)
    
    // Set state to trigger effect
    setHasSetQuizFlag(true)
  }

  return (
    <div className="max-w-4xl mx-auto fade-in">
      <Card className="w-full">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl">Level {level}: {getLevelTitle()}</CardTitle>
          <CardDescription className="text-lg mt-2">
            {getLevelDescription()}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-muted p-6 rounded-lg fade-in-delay-1">
            <h3 className="text-xl font-medium mb-4">Quiz Instructions</h3>
            <ul className="space-y-2 list-disc pl-5">
              <li>This quiz contains {questionCount} multiple-choice questions about React.</li>
              <li>
                <strong>
                  You will have {formatTimeLimit()} to complete the quiz.
                </strong>
              </li>
              <li>
                For single-answer questions, select the best answer.
              </li>
              <li>
                For questions marked with{" "}
                <span className="text-red-500 dark:text-red-400 inline-flex items-center">
                  <AlertTriangle className="h-4 w-4 mr-1" />
                  Select all that apply
                </span>
                , choose all correct options.
              </li>
              <li>You can navigate between questions using the Next and Previous buttons.</li>
              <li>You&apos;ll see your results and explanations when you finish or when the timer runs out.</li>
            </ul>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center pb-8 fade-in-delay-2">
          <Button 
            size="lg" 
            className={cn(
              "px-8 py-6 text-lg transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg",
              "border-2 hover:-translate-y-1",
              isStarting 
                ? "bg-green-500 hover:bg-green-600 border-green-600" 
                : "hover:bg-primary/90 border-primary"
            )}
            onClick={handleStartQuiz}
            disabled={isStarting}
          >
            {isStarting ? (
              <>
                <span className="animate-pulse">Starting Quiz...</span>
                <div className="ml-2 flex space-x-1">
                  <div className="h-2 w-2 rounded-full bg-white animate-bounce" style={{ animationDelay: "0ms" }}></div>
                  <div className="h-2 w-2 rounded-full bg-white animate-bounce" style={{ animationDelay: "150ms" }}></div>
                  <div className="h-2 w-2 rounded-full bg-white animate-bounce" style={{ animationDelay: "300ms" }}></div>
                </div>
              </>
            ) : (
              <>Start Quiz</>
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
