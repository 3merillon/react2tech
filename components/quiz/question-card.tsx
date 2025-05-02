"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Question } from "@/types"
import AnswerOption from "./answer-option"
import QuizNavigation from "./quiz-navigation"
import { AlertTriangle } from "lucide-react"

interface QuestionCardProps {
  question: Question
  questionIndex: number
  totalQuestions: number
  selectedAnswer: string | string[] | undefined
  onAnswerSelect: (questionId: string, optionId: string) => void
  onNext: () => void
  onPrevious: () => void
  isAnswered: boolean
  isOptionSelected: (questionId: string, optionId: string) => boolean
  level: number
}

export default function QuestionCard({
  question,
  questionIndex,
  totalQuestions,
  selectedAnswer,
  onAnswerSelect,
  onNext,
  onPrevious,
  isOptionSelected,
  level,
}: QuestionCardProps) {
  // Determine if we can go to next question
  const canGoNext = question.multipleCorrect 
    ? Array.isArray(selectedAnswer) && selectedAnswer.length > 0
    : !!selectedAnswer;

  return (
    <Card className="w-full max-w-3xl mx-auto border-2 shadow-lg hover:shadow-xl transition-all duration-300">
      <CardHeader className="pb-2 border-b">
      <CardTitle className="flex items-center justify-between">
        <span className="text-xl font-bold">Question {questionIndex + 1} of {totalQuestions}</span>
        <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
          Level {level}
        </span>
      </CardTitle>
        <CardDescription className="text-lg font-medium mt-4">
          {question.question}
          {question.multipleCorrect && (
            <span className="block text-sm font-normal mt-1 text-red-500 dark:text-red-400 flex items-center">
              <AlertTriangle className="h-4 w-4 mr-1" />
              Select all that apply
            </span>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 pt-4">
        {question.options.map((option) => (
          <AnswerOption
            key={option.id}
            option={option}
            isSelected={isOptionSelected(question.id, option.id)}
            onSelect={() => onAnswerSelect(question.id, option.id)}
            multipleCorrect={question.multipleCorrect}
          />
        ))}
      </CardContent>
      <CardFooter className="pt-4 border-t">
        <QuizNavigation
          onNext={onNext}
          onPrevious={onPrevious}
          canGoNext={canGoNext}
          canGoPrevious={questionIndex > 0}
          isLastQuestion={questionIndex === totalQuestions - 1}
        />
      </CardFooter>
    </Card>
  )
}