import { ErrorDialogData, ErrorType } from './ErrorDialog'

type DialogCallback = (data: ErrorDialogData) => void

class DialogServiceClass {
  private callback: DialogCallback | null = null

  // Internal method để register callback từ Provider
  _register(callback: DialogCallback) {
    this.callback = callback
  }

  // Internal method để unregister callback
  _unregister() {
    this.callback = null
  }

  // Private method để show dialog
  private showDialog(data: ErrorDialogData) {
    if (!this.callback) {
      console.warn('Dialog service not initialized. Make sure ErrorProvider is mounted.')
      return
    }
    this.callback(data)
  }

  // Public API methods
  error(
    message: string,
    options?: {
      title?: string
      details?: string
      onConfirm?: () => void
      onCancel?: () => void
      confirmText?: string
      cancelText?: string
      showCancel?: boolean
    }
  ) {
    this.showDialog({
      message,
      type: 'error' as ErrorType,
      title: options?.title,
      details: options?.details,
      onConfirm: options?.onConfirm,
      onCancel: options?.onCancel,
      confirmText: options?.confirmText || 'Đồng ý',
      cancelText: options?.cancelText,
      showCancel: options?.showCancel
    })
  }

  warning(
    message: string,
    options?: {
      title?: string
      onConfirm?: () => void
      confirmText?: string
    }
  ) {
    this.showDialog({
      message,
      type: 'warning' as ErrorType,
      title: options?.title,
      onConfirm: options?.onConfirm,
      confirmText: options?.confirmText || 'Đã hiểu'
    })
  }

  info(
    message: string,
    options?: {
      title?: string
      onConfirm?: () => void
      confirmText?: string
    }
  ) {
    this.showDialog({
      message,
      type: 'info' as ErrorType,
      title: options?.title,
      onConfirm: options?.onConfirm,
      confirmText: options?.confirmText || 'Đóng'
    })
  }

  success(
    message: string,
    options?: {
      title?: string
      onConfirm?: () => void
      confirmText?: string
    }
  ) {
    this.showDialog({
      message,
      type: 'success' as ErrorType,
      title: options?.title,
      onConfirm: options?.onConfirm,
      confirmText: options?.confirmText || 'Đóng'
    })
  }

  // Method để show confirm dialog
  confirm(
    message: string,
    options?: {
      title?: string
      onConfirm?: () => void
      onCancel?: () => void
      confirmText?: string
      cancelText?: string
    }
  ) {
    this.showDialog({
      message,
      type: 'warning' as ErrorType,
      title: options?.title || 'Xác nhận',
      onConfirm: options?.onConfirm,
      onCancel: options?.onCancel,
      confirmText: options?.confirmText || 'Xác nhận',
      cancelText: options?.cancelText || 'Hủy',
      showCancel: true
    })
  }

  // Advanced method cho custom dialog
  show(data: ErrorDialogData) {
    this.showDialog(data)
  }
}

// Export singleton instance
export const Dialog = new DialogServiceClass()

// For backward compatibility, export the class too
export { DialogServiceClass }
