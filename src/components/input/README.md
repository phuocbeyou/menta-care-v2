# Input Components

## InputPassword

Component password input với icon con mắt để toggle show/hide password.

### Features

- ✅ **Toggle visibility**: Click icon con mắt để show/hide password
- ✅ **Emoji icons**: 👁️ (show) / 🙈 (hide)
- ✅ **TypeScript**: Full type support
- ✅ **Material-UI styled**: Tương thích với theme
- ✅ **Accessibility**: ARIA labels và keyboard support

### Usage

#### Basic Usage

```tsx
import InputPassword from '@src/components/input/InputPassword'

;<InputPassword label='Mật khẩu' placeholder='Nhập mật khẩu...' onChange={(e) => setPassword(e.target.value)} />
```

#### Advanced Usage

```tsx
<InputPassword
  fullWidth
  label='Mật khẩu'
  placeholder='Nhập mật khẩu...'
  size='small'
  showToggle={true} // default: true
  onChange={(e) => setPassword(e.target.value)}
  sx={{ mb: 2 }}
/>
```

#### Disable Toggle

```tsx
<InputPassword
  label='Mật khẩu'
  placeholder='Nhập mật khẩu...'
  showToggle={false} // Ẩn icon con mắt
/>
```

### Props

| Prop                | Type             | Default | Description                            |
| ------------------- | ---------------- | ------- | -------------------------------------- |
| `showToggle`        | `boolean`        | `true`  | Hiển thị icon toggle                   |
| `...TextFieldProps` | `TextFieldProps` | -       | Tất cả props của Material-UI TextField |

### Icons

- **👁️** - Hiển thị khi password đang ẩn (click để show)
- **🙈** - Hiển thị khi password đang show (click để hide)

### Examples

Xem demo tại:

- **SignIn page**: `/auth`
- **SignUp page**: `/sign-up`
- **Profile page**: `/profile` (Demo section)
