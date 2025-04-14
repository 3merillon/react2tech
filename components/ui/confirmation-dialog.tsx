import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface ConfirmationDialogProps {
  title: string
  message: string
  confirmText: string
  cancelText: string
  onConfirm: () => void
  onCancel: () => void
}

export function ConfirmationDialog({
  title,
  message,
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
}: ConfirmationDialogProps) {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50">
      <Card className="w-full max-w-md mx-4">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{message}</p>
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          <Button variant="outline" onClick={onCancel}>
            {cancelText}
          </Button>
          <Button variant="destructive" onClick={onConfirm}>
            {confirmText}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}