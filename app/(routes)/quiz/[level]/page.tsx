import { getQuestionsByLevel } from "@/data"
import { Level } from "@/types"
import QuizClient from "./quiz-client"
import { Metadata } from "next"

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ level: string }> 
}): Promise<Metadata> {
  // Await the params
  const resolvedParams = await params;
  const levelNum = Number(resolvedParams.level);
  const levelValue = (isNaN(levelNum) || ![1, 2, 3].includes(levelNum)) ? 1 : levelNum;
  
  let title = "React Quiz";
  switch (levelValue) {
    case 1: title = "Level 1: React Fundamentals Quiz"; break;
    case 2: title = "Level 2: Intermediate React Quiz"; break;
    case 3: title = "Level 3: Advanced React Quiz"; break;
  }
  
  return {
    title,
    description: `Test your React knowledge with our ${title} - 20 minute timed assessment`,
  };
}

// For the page component
export default async function QuizPage({ 
  params 
}: { 
  params: Promise<{ level: string }> 
}) {
  // Await the params
  const resolvedParams = await params;
  const levelNum = Number(resolvedParams.level);
  const levelValue = (isNaN(levelNum) || ![1, 2, 3].includes(levelNum)) ? 1 : levelNum as Level;
  
  const questions = getQuestionsByLevel(levelValue);
  
  return <QuizClient initialQuestions={questions} level={levelValue} />;
}