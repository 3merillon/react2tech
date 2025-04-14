"use client"

import { ThemeProvider } from "@/components/theme/theme-provider"
import { QuizProgressProvider } from "@/contexts/quiz-progress-context"
import { ReactNode } from "react"

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <QuizProgressProvider>
        {children}
      </QuizProgressProvider>
    </ThemeProvider>
  )
}