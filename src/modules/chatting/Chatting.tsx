import { Box } from '@mui/material'
import { useState, useEffect, useRef } from 'react'

interface Message {
  id: number
  text: string
  isBot: boolean
  timestamp: string
}

const initialMessages: Message[] = [
  {
    id: 1,
    text: 'Xin chào! 😊 Tôi là MentaCare Bot, trợ lý giúp bạn chăm sóc Thân, Tâm, Trí. Hôm nay bạn cảm thấy thế nào? Có điều gì đang khiến bạn trăn trở không?',
    isBot: true,
    timestamp: '15:36'
  }
]

const quickReplies = ['Tôi đang căng thẳng', 'Lo về công việc', 'Khó khăn kinh doanh']

const botResponses = {
  'Tôi đang căng thẳng':
    'Tôi hiểu bạn đang cảm thấy căng thẳng. Hãy thử thở sâu và chia sẻ với tôi điều gì đang làm bạn căng thẳng nhất?',
  'Lo về công việc':
    'Công việc có thể tạo ra nhiều áp lực. Bạn có thể chia sẻ cụ thể hơn về những gì đang khiến bạn lo lắng không?',
  'Khó khăn kinh doanh':
    'Kinh doanh luôn có những thách thức riêng. Tôi sẵn sàng lắng nghe và hỗ trợ bạn. Bạn đang gặp khó khăn gì cụ thể?'
}

export const Chatting = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [inputValue, setInputValue] = useState('')
  const messagesContainerRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const getCurrentTime = () => {
    const now = new Date()
    return `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`
  }

  const addMessage = (text: string, isBot: boolean = false) => {
    const newMessage: Message = {
      id: Date.now(),
      text,
      isBot,
      timestamp: getCurrentTime()
    }
    setMessages((prev) => [...prev, newMessage])
  }

  const handleQuickReply = (reply: string) => {
    // Add user message
    addMessage(reply, false)

    // Add bot response after delay
    setTimeout(() => {
      const response =
        botResponses[reply as keyof typeof botResponses] || 'Cảm ơn bạn đã chia sẻ. Tôi sẽ hỗ trợ bạn tốt nhất có thể.'
      addMessage(response, true)
    }, 1000)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputValue.trim()) {
      addMessage(inputValue, false)
      setInputValue('')

      // Add bot response after delay
      setTimeout(() => {
        addMessage('Cảm ơn bạn đã chia sẻ. Tôi đang lắng nghe và sẵn sàng hỗ trợ bạn.', true)
      }, 1000)
    }
  }

  return (
    <Box className='mx-auto px-3 flex flex-col bg-white'>
      <div className='py-6'>
        <div
          className='w-full rounded-[20px] border-0 shadow-[8px_8px_0_0_rgba(0,0,0,0.1)]'
          style={{ background: 'linear-gradient(90deg, #5ea75e 0%, #0a7a4a 100%)' }}
        >
          <div
            className='rounded-t-[20px] flex items-center gap-3 p-1'
            style={{ background: 'linear-gradient(90deg, #5ea75e 0%, #0a7a4a 100%)' }}
          >
            <div className='w-5 h-5 rounded-full bg-[#d9f0d9] flex justify-center items-center relative'>
              <img
                alt='Robot face emoji icon representing MentaCare Bot'
                className='w-2 h-2'
                height='8'
                src='https://storage.googleapis.com/a1aa/image/65b3fa64-f50c-4785-923d-d879b6c49313.jpg'
                width='8'
              />
              <span className='absolute top-0 right-0 w-2 h-2 rounded-full bg-[#f87171] border border-white'></span>
            </div>
            <div>
              <h1 className='text-white font-semibold text-sm'>MentaCare Bot</h1>
              <p className='text-[#d9f0d9] text-xs font-normal'>Người bạn đồng hành tâm lý</p>
            </div>
          </div>
          <div className='bg-gray-50 p-3 h-60 flex flex-col'>
            {/* Messages */}
            <div
              ref={messagesContainerRef}
              className='flex-1 space-y-3 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100'
            >
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-[320px] ${message.isBot ? 'w-full' : 'max-w-48'}`}>
                    <div
                      className={`rounded-lg shadow-md px-2 py-1.5 text-xs leading-4 ${
                        message.isBot ? 'bg-white text-gray-800' : 'bg-secondary text-white'
                      }`}
                      style={{ boxShadow: '0 2px 6px rgb(0 0 0 / 0.05)' }}
                    >
                      <p className='text-sm'>{message.text}</p>
                      <span className={`text-xs mt-0.5 block ${message.isBot ? 'text-gray-400' : 'text-white'}`}>
                        {message.timestamp}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Replies - Only show for initial message */}
            {messages.length === 1 && (
              <div className='border-t border-gray-100 pt-3 pb-3 text-center'>
                <p className='text-gray-500 text-xs mb-2'>Bạn có thể chọn một trong những câu trả lời sau:</p>
                <div className='flex justify-center gap-2 flex-wrap'>
                  {quickReplies.map((reply, index) => (
                    <button
                      key={index}
                      className='bg-white text-gray-700 font-semibold text-xs rounded-full px-3 py-1 shadow-[0_2px_6px_rgb(0_0_0_/_0.1)] hover:shadow-[0_4px_8px_rgb(0_0_0_/_0.15)] transition-shadow'
                      type='button'
                      onClick={() => handleQuickReply(reply)}
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          {/* Input Form */}
          <form
            onSubmit={handleSubmit}
            className='flex items-center gap-2 border-t border-gray-100 bg-white rounded-b-[20px] p-3'
          >
            <input
              aria-label='Nhập tin nhắn của bạn'
              className='flex-grow text-gray-600 text-xs placeholder-gray-400 bg-transparent outline-none px-3 py-1.5 rounded-full border border-gray-200 focus:border-green-600 transition'
              placeholder='Nhập tin nhắn của bạn...'
              type='text'
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              aria-label='Gửi tin nhắn'
              className='w-5 h-5 md:w-8 md:h-[42px] md:w-[42px] rounded-full bg-secondary hover:bg-green-500 transition flex justify-center items-center text-white'
              type='submit'
            >
              <i className='fas fa-paper-plane text-sm'></i>
            </button>
          </form>
        </div>
      </div>
    </Box>
  )
}
