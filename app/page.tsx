import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col items-center space-y-10 py-10">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          React2Tech
        </h1>
        <p className="text-xl text-muted-foreground max-w-[700px]">
          Train for your React certification with interactive quizzes and comprehensive explanations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {[1, 2, 3].map((level) => (
          <Card key={level} className="flex flex-col">
            <CardHeader>
              <CardTitle>Level {level}</CardTitle>
              <CardDescription>
                {level === 1 
                  ? "React fundamentals and basic concepts" 
                  : level === 2 
                    ? "Intermediate React patterns and hooks" 
                    : "Advanced React concepts and optimization"}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground">
                {level === 1 
                  ? "JSX, components, props, state, and lifecycle methods." 
                  : level === 2 
                    ? "Context API, hooks, forms, and routing." 
                    : "Performance optimization, advanced patterns, and React internals."}
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full border-2 hover:shadow-md transition-all duration-200 hover:-translate-y-1">
                <Link href={`/quiz/${level}`} prefetch={false}>Start Quiz</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}