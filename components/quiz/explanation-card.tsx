"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Question } from "@/types"
import { CheckCircle2, XCircle, AlertTriangle, MinusCircle } from "lucide-react"
import { useTheme } from "next-themes"

interface ExplanationCardProps {
  question: Question
  questionNumber: number
  userAnswer: string | string[]
  isCorrect: boolean
  level: number
}

export default function ExplanationCard({
  question,
  questionNumber,
  userAnswer,
  isCorrect,
  level,
}: ExplanationCardProps) {
  const { resolvedTheme } = useTheme()
  const isDarkTheme = resolvedTheme === "dark"
  const userAnswerArray = Array.isArray(userAnswer) ? userAnswer : userAnswer ? [userAnswer] : [];

  // Check if an option was selected by the user
  const isOptionSelected = (optionId: string) => {
    return userAnswerArray.includes(optionId);
  };

  // Function to render the status icon for each option
  const renderStatusIndicator = (optionId: string) => {
    const option = question.options.find(opt => opt.id === optionId);
    const wasSelected = isOptionSelected(optionId);
    
    if (!option) return null;
    
    if (wasSelected) {
      if (option.isCorrect) {
        // Correct answer that was selected
        return (
          <div className="flex items-center justify-center h-full w-full bg-green-100 dark:bg-green-900/60 border-2 border-green-500 rounded-md">
            <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-400" strokeWidth={3} />
          </div>
        );
      } else {
        // Incorrect answer that was selected
        return (
          <div className="flex items-center justify-center h-full w-full bg-red-100 dark:bg-red-900/60 border-2 border-red-500 rounded-md">
            <XCircle className="h-8 w-8 text-red-600 dark:text-red-400" strokeWidth={3} />
          </div>
        );
      }
    } else if (option.isCorrect) {
      // Correct answer that wasn't selected (missed)
      return (
        <div className="flex items-center justify-center h-full w-full bg-amber-100 dark:bg-amber-900/60 border-2 border-amber-500 rounded-md">
          <MinusCircle className="h-8 w-8 text-amber-600 dark:text-amber-400" strokeWidth={3} />
        </div>
      );
    }
    
    // For non-selected incorrect options, return an empty div to maintain spacing
    return <div className="h-full w-full"></div>;
  };

  return (
    <Card className={cn(
      "border-l-4 shadow-md hover:shadow-lg transition-all duration-300",
      isCorrect ? "border-l-green-500" : "border-l-red-500"
    )}>
      <CardHeader className="pb-2 border-b">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            Question {questionNumber}
            {isCorrect ? (
              <CheckCircle2 className="h-5 w-5 text-green-500 animate-in zoom-in-50 duration-300" />
            ) : (
              <XCircle className="h-5 w-5 text-red-500 animate-in zoom-in-50 duration-300" />
            )}
          </CardTitle>
          <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
            Level {level}
          </span>
        </div>
        <CardDescription className="text-base font-medium mt-2">
          {question.question}
          {question.multipleCorrect && (
            <span className="block text-sm font-normal mt-1 text-blue-500 dark:text-blue-400 flex items-center">
              <AlertTriangle className="h-4 w-4 mr-1" />
              Multiple correct answers
            </span>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 pt-4">
        {/* All Options Section */}
        <div className="space-y-3">
          <div className="font-medium text-lg border-b pb-1">All Options</div>
          
          <div className="space-y-3">
            {question.options.map((option) => {
              const wasSelected = isOptionSelected(option.id);
              
              return (
                <div key={option.id} className="flex items-stretch">
                  {/* Option button */}
                  <div 
                    className={cn(
                      "flex-grow w-full justify-start text-left p-4 h-auto transition-all group",
                      "border-2 rounded-md",
                      wasSelected 
                        ? "border-[hsl(var(--primary))] bg-[hsl(var(--primary))]/10 shadow-sm" 
                        : "border-[hsl(var(--border))]"
                    )}
                  >
                    <div className="flex w-full items-center">
                      <div
                        className={cn(
                          "flex h-6 w-6 shrink-0 items-center justify-center border-2 transition-all duration-200 mt-0.5 mr-3",
                          wasSelected
                            ? "border-[hsl(var(--primary))] bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]"
                            : "border-[hsl(var(--muted))]",
                          question.multipleCorrect ? "rounded" : "rounded-full"
                        )}
                      >
                        {wasSelected && (
                          question.multipleCorrect ? (
                            <CheckCircle2 className="h-3.5 w-3.5" />
                          ) : (
                            <span className="h-2 w-2 rounded-full bg-current" />
                          )
                        )}
                      </div>
                      <div className="flex-grow text-left overflow-hidden">
                        <span className="inline-block whitespace-normal break-words">{option.text}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Status indicator */}
                  <div className="flex items-stretch justify-center w-16 ml-2">
                    {renderStatusIndicator(option.id)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Explanation Section */}
        <div className="space-y-3 pt-2">
          <div className="font-medium text-lg border-b pb-1">Explanation</div>
          <div className={cn(
            "p-4 rounded-md",
            isDarkTheme ? "bg-gray-800/50 border border-gray-700" : "bg-gray-100 border border-gray-200"
          )}>
            <p className="font-medium">{isCorrect ? question.explanation.correct : question.explanation.incorrect}</p>
            <p className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700 text-muted-foreground">
              {question.explanation.detailed}
            </p>
          </div>
        </div>
        
        {/* Option Explanations */}
        <div className="space-y-3 pt-2">
          <div className="font-medium text-lg border-b pb-1">Option Details</div>
          <div className="space-y-3">
            {question.options.map(option => (
              <div key={option.id} className={cn(
                "p-4 rounded-md border",
                option.isCorrect 
                  ? "bg-green-100 border-green-300 [.dark_&]:bg-green-950 [.dark_&]:border-green-800"
                  : "bg-gray-100 border-gray-300 [.dark_&]:bg-gray-800 [.dark_&]:border-gray-700"
              )}>
                <div className="font-medium flex items-center">
                  {option.isCorrect 
                    ? <CheckCircle2 className="h-5 w-5 text-green-600 [.dark_&]:text-green-400 mr-2" />
                    : <XCircle className="h-5 w-5 text-red-600 [.dark_&]:text-red-400 mr-2" />
                  }
                  {option.text}
                </div>
                <div className="mt-2 text-sm [.dark_&]:text-gray-300">
                  {option.explanation}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}