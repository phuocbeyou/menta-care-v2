import { Box, Button, Skeleton } from '@mui/material'
import { callingAPI } from '@src/configs/axios/api'
import { useState, useEffect, useRef } from 'react'
import { REQUEST_TYPE } from './api/const'
import { ResultAnalyze } from './ResultAnalyze'
import {
  MOCK_EXPERTS,
  MOCK_MUSIC_DATA,
  MOCK_PODCAST_DATA,
  MOCK_YOGA_DATA,
  MOCK_STORY_DATA,
  MOCK_DOCUMENTS
} from './mock/const'

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

const defaultQuickReplies = ['Tôi cần tư vấn', 'Tôi đang căng thẳng', 'Tôi lo về công việc']

export interface ChattingReq {
  messages: {
    role: string
    content: string
  }[]
  current_stage: string
  category: string
  triage: string
}

export interface ChattingRes {
  reply: string
  current_stage: string
  category: string
  triage: string
  options: string[]
}

export const Chatting = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [currentStage, setCurrentStage] = useState('categorization')
  const [category, setCategory] = useState('')
  const [triage, setTriage] = useState('')
  const [availableOptions, setAvailableOptions] = useState<string[]>(defaultQuickReplies)
  const messagesContainerRef = useRef<HTMLDivElement>(null)
  const [showResultAnalyze, setShowResultAnalyze] = useState(false)
  const chat = async (userMessage: string) => {
    try {
      setIsLoading(true)
      // const getRole = parseJWTPayload(getAuthToken() || '')?.role
      const res = await callingAPI<ChattingRes, ChattingReq>(REQUEST_TYPE.chat, {
        messages: [
          {
            role: 'user',
            content: userMessage
          }
        ],
        current_stage: currentStage,
        category: category,
        triage: triage
      })

      // Update conversation state
      setCurrentStage(res.current_stage)
      setCategory(res.category)
      setTriage(res.triage)

      // Add bot response first
      addMessage(res.reply, true)

      // Then update options after a short delay to show after bot message
      setTimeout(() => {
        setAvailableOptions(res.options || [])
      }, 500)
    } catch (error) {
      console.error('Error calling chat API:', error)
      addMessage('Xin lỗi, đã có lỗi xảy ra. Vui lòng thử lại sau.', true)
    } finally {
      setIsLoading(false)
    }
  }

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTo({
        top: messagesContainerRef.current.scrollHeight,
        behavior: 'smooth'
      })
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Auto scroll when quick replies appear
  useEffect(() => {
    if (availableOptions?.length > 0) {
      setTimeout(() => {
        scrollToBottom()
      }, 100)
    }
  }, [availableOptions])

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
    // Clear options immediately when user selects a reply
    setAvailableOptions([])
    // Add user message
    addMessage(reply, false)
    // Call API with the reply
    chat(reply)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputValue.trim() && !isLoading) {
      const userMessage = inputValue
      // Clear options immediately when user types a message
      setAvailableOptions([])
      addMessage(userMessage, false)
      setInputValue('')
      // Call API with the message
      chat(userMessage)
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
              {messages?.map((message) => (
                <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-[320px] ${message.isBot ? 'w-full' : 'max-w-48'}`}>
                    <div
                      className={`rounded-lg shadow-md px-2 py-1.5 text-xs leading-4 ${
                        message.isBot ? 'bg-white text-gray-800' : 'bg-secondary text-white'
                      }`}
                      style={{ boxShadow: '0 2px 6px rgb(0 0 0 / 0.05)' }}
                    >
                      <p className='text-sm text-justify'>{message.text}</p>
                      <span className={`text-xs mt-0.5 block ${message.isBot ? 'text-gray-400' : 'text-white'}`}>
                        {message.timestamp}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Loading skeleton */}
            {isLoading && (
              <div className='flex justify-start mb-3'>
                <div className='max-w-[320px] w-full'>
                  <div className='rounded-lg shadow-md px-2 py-1.5 bg-white'>
                    <Skeleton variant='text' width='80%' height={16} sx={{ mb: 0.5 }} />
                    <Skeleton variant='text' width='60%' height={16} sx={{ mb: 0.5 }} />
                    <Skeleton variant='text' width='40%' height={12} />
                  </div>
                </div>
              </div>
            )}

            {/* Quick Replies - Show available options */}
            {availableOptions.length > 0 && !isLoading && (
              <div className='border-t border-gray-100 pt-3 pb-3 text-center'>
                <p className='text-gray-500 text-xs mb-2'>Bạn có thể chọn một trong những câu trả lời sau:</p>
                <div className='flex justify-center gap-2 flex-wrap'>
                  {availableOptions?.map((reply: string, index: number) => (
                    <button
                      key={index}
                      className='bg-white text-gray-700 font-semibold text-xs rounded-full px-3 py-1 shadow-[0_2px_6px_rgb(0_0_0_/_0.1)] hover:shadow-[0_4px_8px_rgb(0_0_0_/_0.15)] transition-shadow disabled:opacity-50'
                      type='button'
                      disabled={isLoading}
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
              className='flex-grow text-gray-600 text-xs placeholder-gray-400 bg-transparent outline-none px-3 py-1.5 rounded-full border border-gray-200 focus:border-green-600 transition disabled:opacity-50'
              placeholder={isLoading ? 'Đang xử lý...' : 'Nhập tin nhắn của bạn...'}
              type='text'
              value={inputValue}
              disabled={isLoading}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              aria-label='Gửi tin nhắn'
              className='w-5 h-5 md:h-[42px] md:w-[42px] rounded-full bg-secondary hover:bg-green-500 transition flex justify-center items-center text-white disabled:opacity-50 disabled:cursor-not-allowed'
              type='submit'
              disabled={isLoading}
            >
              {isLoading ? (
                <div className='w-3 h-3 border border-white border-t-transparent rounded-full animate-spin'></div>
              ) : (
                <i className='fas fa-paper-plane text-sm'></i>
              )}
            </button>
          </form>
        </div>
      </div>

      <Button
        variant='contained'
        color='secondary'
        onClick={() => {
          setShowResultAnalyze(true)
        }}
        className='w-full'
      >
        Kết quả phân tích
      </Button>

      {showResultAnalyze && (
        <ResultAnalyze
          experts={MOCK_EXPERTS}
          musicData={MOCK_MUSIC_DATA}
          podcastData={MOCK_PODCAST_DATA}
          yogaData={MOCK_YOGA_DATA}
          storyData={MOCK_STORY_DATA}
          documents={MOCK_DOCUMENTS}
        />
      )}
    </Box>
  )
}
