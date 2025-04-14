"use client"

import { cn } from "@/lib/utils"
import { usePathname, useRouter } from "next/navigation"
import { ExternalLink } from "lucide-react"

// SafeLink component for navigation with confirmation
function SafeLink({ 
  href, 
  children, 
  className,
  external = false
}: { 
  href: string
  children: React.ReactNode
  className?: string
  external?: boolean
}) {
  const router = useRouter()
  const pathname = usePathname()
  const isInQuiz = pathname?.includes('/quiz/')
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (external) return; // Don't handle external links with our router
    
    e.preventDefault()
    
    // Check if we're in a quiz and need to show confirmation
    if (isInQuiz) {
      // Get quiz state from localStorage
      const level = pathname?.split('/')[2]
      const storedQuizKey = `quiz-state-level-${level}`
      const storedQuiz = localStorage.getItem(storedQuizKey)
      
      if (storedQuiz) {
        try {
          const parsedState = JSON.parse(storedQuiz)
          const userAnswers = parsedState.quizState.userAnswers
          
          // If user has answered questions, confirm before navigating
          if (Object.keys(userAnswers).length > 0) {
            if (confirm("If you leave now, your progress will be lost. Are you sure you want to exit the quiz?")) {
              // Clear quiz state and navigate
              localStorage.removeItem(storedQuizKey)
              router.push(href)
            }
            return
          }
        } catch (e) {
          console.error("Failed to parse stored quiz state:", e)
        }
      }
    }
    
    // If not in quiz or no answers, navigate directly
    router.push(href)
  }
  
  if (external) {
    return (
      <a 
        href={href} 
        className={className} 
        target="_blank" 
        rel="noopener noreferrer"
      >
        {children}
        <ExternalLink className="inline-block ml-1 h-3 w-3" />
      </a>
    )
  }
  
  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  )
}

export default function Footer() {
  const pathname = usePathname()
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="border-t py-8 md:py-10 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Main content with max-width and centering */}
        <div className="max-w-4xl mx-auto">
          {/* Three column grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Column 1: About */}
            <div className="flex flex-col items-center text-center">
              <h3 className="text-lg font-semibold mb-4">React2Tech</h3>
              <p className="text-sm text-muted-foreground mb-4">
                A React training platform with interactive quizzes and comprehensive explanations to help you master React concepts.
              </p>
            </div>
            
            {/* Column 2: Quick Links */}
            <div className="flex flex-col items-center text-center">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <SafeLink
                    href="/"
                    className={cn(
                      "text-sm hover:text-primary hover:underline",
                      pathname === "/" 
                        ? "text-gray-400 dark:text-gray-500 pointer-events-none" 
                        : "text-muted-foreground"
                    )}
                  >
                    Home
                  </SafeLink>
                </li>
                <li>
                  <SafeLink
                    href="/quiz/1"
                    className={cn(
                      "text-sm hover:text-primary hover:underline",
                      pathname === "/quiz/1" 
                        ? "text-gray-400 dark:text-gray-500 pointer-events-none" 
                        : "text-muted-foreground"
                    )}
                  >
                    Level 1: React Fundamentals
                  </SafeLink>
                </li>
                <li>
                  <SafeLink
                    href="/quiz/2"
                    className={cn(
                      "text-sm hover:text-primary hover:underline",
                      pathname === "/quiz/2" 
                        ? "text-gray-400 dark:text-gray-500 pointer-events-none" 
                        : "text-muted-foreground"
                    )}
                  >
                    Level 2: Intermediate React
                  </SafeLink>
                </li>
                <li>
                  <SafeLink
                    href="/quiz/3"
                    className={cn(
                      "text-sm hover:text-primary hover:underline",
                      pathname === "/quiz/3" 
                        ? "text-gray-400 dark:text-gray-500 pointer-events-none" 
                        : "text-muted-foreground"
                    )}
                  >
                    Level 3: Advanced React
                  </SafeLink>
                </li>
              </ul>
            </div>
            
            {/* Column 3: About */}
            <div className="flex flex-col items-center text-center">
              <h3 className="text-lg font-semibold mb-4">About React2Tech</h3>
              <p className="text-sm text-muted-foreground mb-4">
                React2Tech is a platform for practicing React skills, offering specialized training and skills assessment for developers of all levels.
              </p>
              <div className="space-y-2 text-center">
                <div className="text-sm text-muted-foreground">
                  <SafeLink
                    href="https://github.com/3merillon/react2tech"
                    external={true}
                    className="flex items-center justify-center text-sm font-medium text-primary hover:underline"
                  >
                    View on GitHub
                  </SafeLink>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom section with copyright */}
          <div className="pt-8 border-t flex flex-col items-center gap-4">
            <p className="text-sm text-muted-foreground text-center">
              &copy; {currentYear} React2Tech. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <SafeLink
                href="/"
                className={cn(
                  "text-xs underline-offset-4 hover:underline",
                  pathname === "/" 
                    ? "text-gray-400 dark:text-gray-500 pointer-events-none" 
                    : "text-muted-foreground"
                )}
              >
                Home
              </SafeLink>
              <SafeLink
                href="/privacy-policy"
                className="text-xs text-muted-foreground underline-offset-4 hover:underline"
              >
                Privacy Policy
              </SafeLink>
              <SafeLink
                href="/legal-notice"
                className="text-xs text-muted-foreground underline-offset-4 hover:underline"
              >
                Legal Notice
              </SafeLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}