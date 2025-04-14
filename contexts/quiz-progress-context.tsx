"use client"

import React, { createContext, useContext, useState, useCallback } from "react"

interface ProgressData {
  answeredCount: number
  totalQuestions: number
}

interface QuizProgressContextType {
  progress: ProgressData | null
  updateProgress: (progress: ProgressData | null) => void
}

const QuizProgressContext = createContext<QuizProgressContextType>({
  progress: null,
  updateProgress: () => {}
})

export const QuizProgressProvider = ({ children }: { children: React.ReactNode }) => {
  const [progress, setProgress] = useState<ProgressData | null>(null)

  // Use useCallback to prevent the function from being recreated on every render
  const updateProgress = useCallback((newProgress: ProgressData | null) => {
    setProgress(newProgress)
  }, [])

  return (
    <QuizProgressContext.Provider value={{ progress, updateProgress }}>
      {children}
    </QuizProgressContext.Provider>
  )
}

export const useQuizProgress = () => useContext(QuizProgressContext)