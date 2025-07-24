import { Router } from '@src/routes'
import { Chatting } from './Chatting'
import { ChattingLayout } from '@src/layouts/chatting'

export const CHATTING_PATH = 'chatting'

export const chattingRouter: Router[] = [
  {
    element: <ChattingLayout />,
    children: [{ element: <Chatting />, path: CHATTING_PATH }]
  }
]
