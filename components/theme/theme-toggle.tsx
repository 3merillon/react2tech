"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ThemeToggle() {
  const { setTheme } = useTheme()
  const [open, setOpen] = React.useState(false)

  // Close dropdown when window is resized
  React.useEffect(() => {
    const handleResize = () => {
      setOpen(false)
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="cursor-pointer"> {/* Add cursor-pointer class */}
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="bg-background/80 backdrop-blur-md"
        forceMount
      >
        <DropdownMenuItem onClick={() => { setTheme("light"); setOpen(false); }} className="cursor-pointer">
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => { setTheme("dark"); setOpen(false); }} className="cursor-pointer">
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => { setTheme("system"); setOpen(false); }} className="cursor-pointer">
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}