"use client"

import { ArrowLeft, ArrowRight, Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface QuizNavigationProps {
  onNext: () => void
  onPrevious: () => void
  canGoNext: boolean
  canGoPrevious: boolean
  isLastQuestion: boolean
}

export default function QuizNavigation({
  onNext,
  onPrevious,
  canGoNext,
  canGoPrevious,
  isLastQuestion,
}: QuizNavigationProps) {
  return (
    <div className="flex justify-between w-full">
      <button
        onClick={onPrevious}
        disabled={!canGoPrevious}
        className={cn(
          "flex items-center gap-2 px-4 py-2 rounded-md border-2 bg-background text-foreground",
          "transition-all duration-200 shadow-sm",
          canGoPrevious 
            ? "cursor-pointer hover:bg-accent/80 hover:shadow-md hover:-translate-y-0.5" 
            : "opacity-50 cursor-not-allowed"
        )}
      >
        <ArrowLeft className="h-4 w-4" />
        Previous
      </button>
      
      <button
        onClick={onNext}
        disabled={!canGoNext}
        className={cn(
          "flex items-center gap-2 px-4 py-2 rounded-md border-2 transition-all duration-200 shadow-sm",
          isLastQuestion 
            ? "bg-green-500 text-white border-green-500 hover:bg-green-600 hover:border-green-600" 
            : "bg-primary text-primary-foreground hover:bg-primary/90",
          canGoNext 
            ? "cursor-pointer hover:shadow-md hover:-translate-y-0.5" 
            : "opacity-50 cursor-not-allowed"
        )}
      >
        {isLastQuestion ? (
          <>
            Finish
            <Check className="h-4 w-4 ml-1" />
          </>
        ) : (
          <>
            Next
            <ArrowRight className="h-4 w-4 ml-1" />
          </>
        )}
      </button>
    </div>
  )
}