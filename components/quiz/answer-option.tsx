"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Option } from "@/types"
import { Check } from "lucide-react"

interface AnswerOptionProps {
  option: Option
  isSelected: boolean
  onSelect: () => void
  multipleCorrect?: boolean
}

export default function AnswerOption({
  option,
  isSelected,
  onSelect,
  multipleCorrect = false,
}: AnswerOptionProps) {
  return (
    <Button
      variant="outline"
      className={cn(
        "w-full justify-start text-left p-4 h-auto transition-all group cursor-pointer",
        "border-2 hover:shadow-md",
        isSelected 
          ? "border-[hsl(var(--primary))] bg-[hsl(var(--primary))]/10 shadow-sm" 
          : "hover:border-[hsl(var(--primary))]/50 hover:bg-[hsl(var(--primary))]/5"
      )}
      onClick={onSelect}
      style={{ whiteSpace: "normal", height: "auto" }}
    >
      <div className="flex w-full items-center">
        <div
          className={cn(
            "flex h-6 w-6 shrink-0 items-center justify-center border-2 transition-all duration-200 mt-0.5 mr-3",
            isSelected
              ? "border-[hsl(var(--primary))] bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] scale-110"
              : "border-[hsl(var(--muted))] group-hover:border-[hsl(var(--primary))] group-hover:bg-[hsl(var(--primary))]/10",
            multipleCorrect ? "rounded" : "rounded-full"
          )}
        >
          {isSelected && (
            multipleCorrect ? (
              <Check className="h-3.5 w-3.5 animate-in zoom-in-50 duration-200" />
            ) : (
              <span className="h-2 w-2 rounded-full bg-current animate-in zoom-in-50 duration-200" />
            )
          )}
        </div>
        <div className="flex-grow text-left overflow-hidden">
          <span className="inline-block whitespace-normal break-words">{option.text}</span>
        </div>
      </div>
    </Button>
  )
}