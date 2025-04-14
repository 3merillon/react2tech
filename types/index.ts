export interface Option {
  id: string
  text: string
  isCorrect: boolean
  explanation: string // Explanation for this specific option
}

export interface Explanation {
  correct: string     // General explanation when answer is correct
  incorrect: string   // General explanation when answer is incorrect
  detailed: string    // Detailed explanation of the concept
}

export interface Question {
  id: string
  level: 1 | 2 | 3
  question: string
  options: Option[]
  explanation: Explanation
  multipleCorrect: boolean // Flag to indicate if multiple answers can be selected
}

export interface QuizState {
  currentQuestionIndex: number
  userAnswers: Record<string, string | string[]> // Supports arrays for multiple answers
  isCompleted: boolean
}

export type Level = 1 | 2 | 3
