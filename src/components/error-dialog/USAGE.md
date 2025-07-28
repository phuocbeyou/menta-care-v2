# Error Dialog System

## Sử dụng Dialog Namespace

### Import

```typescript
import { Dialog } from '@components/error-dialog'
```

### API Methods

#### 1. Error Dialog

```typescript
Dialog.error('Có lỗi xảy ra!', {
  title: 'Lỗi kết nối',
  details: 'Chi tiết lỗi ở đây...',
  confirmText: 'Thử lại',
  onConfirm: () => console.log('Retry')
})
```

#### 2. Warning Dialog

```typescript
Dialog.warning('Cảnh báo!', {
  title: 'Cảnh báo',
  confirmText: 'Đã hiểu',
  onConfirm: () => console.log('Understood')
})
```

#### 3. Info Dialog

```typescript
Dialog.info('Thông tin hữu ích', {
  title: 'Thông báo',
  confirmText: 'Đóng'
})
```

#### 4. Success Dialog

```typescript
Dialog.success('Thành công!', {
  title: 'Hoàn thành',
  confirmText: 'Đóng'
})
```

#### 5. Confirm Dialog

```typescript
Dialog.confirm('Bạn có chắc chắn?', {
  title: 'Xác nhận',
  confirmText: 'Xác nhận',
  cancelText: 'Hủy',
  onConfirm: () => console.log('Confirmed'),
  onCancel: () => console.log('Cancelled')
})
```

#### 6. Custom Dialog

```typescript
Dialog.show({
  message: 'Custom message',
  type: 'error',
  title: 'Custom Title',
  details: 'Optional details',
  confirmText: 'OK',
  cancelText: 'Cancel',
  showCancel: true,
  onConfirm: () => {},
  onCancel: () => {}
})
```

## Setup trong App.tsx

```typescript
import { ErrorProvider } from '@components/error-dialog'

export default function App() {
  return (
    <ThemeProvider>
      <ErrorProvider>
        <Router />
      </ErrorProvider>
    </ThemeProvider>
  )
}
```

## Features

- ✅ Emoji icons (không cần install icon packages)
- ✅ Smooth animations
- ✅ TypeScript support
- ✅ Responsive design
- ✅ Easy namespace API
- ✅ Backwards compatible với useError hook
