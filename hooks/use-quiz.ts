"use client"

import { useState, useEffect, useCallback } from "react"
import { Question, QuizState } from "@/types"
import { shuffleArray } from "@/lib/utils"

// Define the question limits and time limits for each level
const QUIZ_CONFIG = {
  1: { questions: 25, time: "12:30" }, // Level 1: 25 questions, 12m30s
  2: { questions: 40, time: "20:00" }, // Level 2: 40 questions, 20m
  3: { questions: 50, time: "25:00" }  // Level 3: 50 questions, 25m
}

export function useQuiz(questions: Question[], level: number) {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    userAnswers: {},
    isCompleted: false,
  })
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([])

  // Initialize a new quiz with shuffled questions and shuffled options
  const initializeNewQuiz = useCallback(() => {
    // First shuffle the questions
    const shuffled = shuffleArray(questions)
    
    // Get the question limit for this level
    const questionLimit = QUIZ_CONFIG[level as keyof typeof QUIZ_CONFIG]?.questions || 50
    
    // Limit the number of questions based on level, but don't exceed available questions
    const limitedQuestions = shuffled.slice(0, Math.min(questionLimit, shuffled.length))
    
    // Then shuffle the options for each question
    const shuffledWithOptions = limitedQuestions.map(question => ({
      ...question,
      options: shuffleArray([...question.options])
    }))
    
    setShuffledQuestions(shuffledWithOptions)
    setQuizState({
      currentQuestionIndex: 0,
      userAnswers: {},
      isCompleted: false,
    })
  }, [questions, level])

  // Initialize on first load
  useEffect(() => {
    initializeNewQuiz()
  }, [initializeNewQuiz])

  const currentQuestion = shuffledQuestions[quizState.currentQuestionIndex]

  const handleAnswerSelect = (questionId: string, optionId: string) => {
    setQuizState((prev) => {
      const currentQuestion = shuffledQuestions.find(q => q.id === questionId)
      
      // Handle multiple correct answers
      if (currentQuestion?.multipleCorrect) {
        const currentAnswers = Array.isArray(prev.userAnswers[questionId]) 
          ? prev.userAnswers[questionId] as string[]
          : []
          
        // Toggle the selection
        const newAnswers = currentAnswers.includes(optionId)
          ? currentAnswers.filter(id => id !== optionId)
          : [...currentAnswers, optionId]
          
        return {
          ...prev,
          userAnswers: {
            ...prev.userAnswers,
            [questionId]: newAnswers,
          },
        }
      } else {
        // Single answer (radio button style)
        return {
          ...prev,
          userAnswers: {
            ...prev.userAnswers,
            [questionId]: optionId,
          },
        }
      }
    })
  }

  const goToNextQuestion = () => {
    const nextIndex = quizState.currentQuestionIndex + 1

    if (nextIndex < shuffledQuestions.length) {
      setQuizState((prev) => ({
        ...prev,
        currentQuestionIndex: nextIndex,
      }))
    } else {
      setQuizState((prev) => ({
        ...prev,
        isCompleted: true,
      }))
    }
  }

  const goToPreviousQuestion = () => {
    if (quizState.currentQuestionIndex > 0) {
      setQuizState((prev) => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex - 1,
      }))
    }
  }

  const restartQuiz = () => {
    initializeNewQuiz()
  }

  const clearQuizState = useCallback(() => {
    setQuizState({
      currentQuestionIndex: 0,
      userAnswers: {},
      isCompleted: false,
    })
  }, [])
  
  // Function to reset state and shuffle questions
  const resetAndShuffleQuestions = useCallback(() => {
    initializeNewQuiz()
  }, [initializeNewQuiz])

  const completeQuiz = useCallback(() => {
    // Use requestAnimationFrame to ensure we're not updating during render
    requestAnimationFrame(() => {
      setQuizState(prev => ({
        ...prev,
        isCompleted: true
      }));
    });
  }, []);

  const calculateScore = () => {
    let correct = 0

    shuffledQuestions.forEach((question) => {
      if (question.multipleCorrect) {
        // For multiple correct questions
        const userAnswer = quizState.userAnswers[question.id] as string[] || []
        const correctAnswers = question.options.filter(option => option.isCorrect).map(option => option.id)
        
        // Check if arrays have the same elements (regardless of order)
        const isCorrect = 
          userAnswer.length === correctAnswers.length && 
          correctAnswers.every(id => userAnswer.includes(id))
        
        if (isCorrect) {
          correct++
        }
      } else {
        // For single correct questions
        const userAnswer = quizState.userAnswers[question.id] as string
        const correctAnswer = question.options.find((option) => option.isCorrect)?.id

        if (userAnswer === correctAnswer) {
          correct++
        }
      }
    })

    return {
      correct,
      total: shuffledQuestions.length,
      percentage: Math.round((correct / shuffledQuestions.length) * 100) || 0,
    }
  }

  const isAnswered = (questionId: string) => {
    return questionId in quizState.userAnswers
  }

  const isOptionSelected = (questionId: string, optionId: string) => {
    const answer = quizState.userAnswers[questionId]
    
    if (Array.isArray(answer)) {
      return answer.includes(optionId)
    }
    
    return answer === optionId
  }

  const isCorrect = (questionId: string) => {
    const question = shuffledQuestions.find((q) => q.id === questionId)
    if (!question) return false

    if (question.multipleCorrect) {
      // For multiple correct questions
      const userAnswer = quizState.userAnswers[questionId] as string[] || []
      const correctAnswers = question.options.filter(option => option.isCorrect).map(option => option.id)
      
      // Check if arrays have the same elements (regardless of order)
      return userAnswer.length === correctAnswers.length && 
             correctAnswers.every(id => userAnswer.includes(id))
    } else {
      // For single correct questions
      const userAnswer = quizState.userAnswers[questionId] as string
      const correctAnswer = question.options.find((option) => option.isCorrect)?.id

      return userAnswer === correctAnswer
    }
  }

  // Export the time limit for this level
  const getTimeLimit = () => {
    return QUIZ_CONFIG[level as keyof typeof QUIZ_CONFIG]?.time || "25:00"
  }

  return {
    currentQuestion,
    currentQuestionIndex: quizState.currentQuestionIndex,
    totalQuestions: shuffledQuestions.length,
    userAnswers: quizState.userAnswers,
    isCompleted: quizState.isCompleted,
    handleAnswerSelect,
    goToNextQuestion,
    goToPreviousQuestion,
    restartQuiz,
    clearQuizState,
    calculateScore,
    isAnswered,
    isOptionSelected,
    isCorrect,
    questions: shuffledQuestions,
    completeQuiz,
    resetAndShuffleQuestions,
    getTimeLimit,
  }
}
