import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Question, Option } from "@/types" // Import your types

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

export function calculateScore(
  userAnswers: Record<string, string>,
  questions: Question[]
): { score: number; total: number; percentage: number } {
  let correct = 0
  const total = questions.length

  questions.forEach((question) => {
    const userAnswer = userAnswers[question.id]
    const correctAnswer = question.options.find((option: Option) => option.isCorrect)?.id

    if (userAnswer === correctAnswer) {
      correct++
    }
  })

  const percentage = Math.round((correct / total) * 100)

  return {
    score: correct,
    total,
    percentage: percentage || 0,
  }
}