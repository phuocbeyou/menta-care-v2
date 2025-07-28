import { useState, ReactNode, useEffect } from 'react'
import { ErrorDialog, ErrorDialogData } from './ErrorDialog'
import { Dialog } from './DialogService'

interface ErrorProviderProps {
  children: ReactNode
}

export function ErrorProvider({ children }: ErrorProviderProps) {
  const [dialogData, setDialogData] = useState<ErrorDialogData | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  const showDialog = (data: ErrorDialogData) => {
    setDialogData(data)
    setIsOpen(true)
  }

  const hideDialog = () => {
    setIsOpen(false)
    // Delay clearing data to allow animation to complete
    setTimeout(() => setDialogData(null), 300)
  }

  // Register callback với Dialog service
  useEffect(() => {
    Dialog._register(showDialog)

    return () => {
      Dialog._unregister()
    }
  }, [])

  return (
    <>
      {children}
      <ErrorDialog open={isOpen} data={dialogData} onClose={hideDialog} />
    </>
  )
}

// Deprecated: Keep for backward compatibility
export function useError() {
  console.warn('useError is deprecated. Use Dialog.error(), Dialog.success(), etc. instead.')

  return {
    showError: (data: ErrorDialogData) => Dialog.show(data),
    showSuccess: (message: string, title?: string) => Dialog.success(message, { title }),
    showWarning: (message: string, title?: string) => Dialog.warning(message, { title }),
    showInfo: (message: string, title?: string) => Dialog.info(message, { title }),
    hideDialog: () => {
      console.warn('hideDialog is not available with Dialog service. Dialogs close automatically.')
    }
  }
}
