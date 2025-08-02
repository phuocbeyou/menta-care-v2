import { Box, Typography, Card, Chip, Skeleton, Button } from '@mui/material'
import { callingAPI } from '@src/configs/axios/api'
import { useEffect, useState } from 'react'
import { REQUEST_TYPE } from '@src/modules/home/apis/const'
import { getAuthToken } from '@src/stores/authHelpers'
import CommentModal from './CommentModal'

interface ForumGroup {
  id: string
  name: string
  last_updated: string
}

interface ThreadData {
  id: string
  title: string
  content: string
  user_id: string
  up_votes: string[]
  down_votes: string[]
  group_id: string
  last_updated: string
}

interface ForumGroupsResponse {
  groups: ForumGroup[]
}

interface ThreadsResponse {
  threads: ThreadData[]
}

interface ForumGroupsRequest {
  jwt_token: string
  pagging: number
  amount: number
}

interface ThreadsRequest {
  jwt_token: string
  group_id: string
  pagging: number
}

export default function ForumDiscussion() {
  const [groups, setGroups] = useState<ForumGroup[]>([])
  const [threads, setThreads] = useState<ThreadData[]>([])
  const [selectedGroupId, setSelectedGroupId] = useState<string>('')
  const [loadingGroups, setLoadingGroups] = useState(true)
  const [loadingThreads, setLoadingThreads] = useState(false)
  const [commentModal, setCommentModal] = useState<{ open: boolean; thread: ThreadData | null }>({
    open: false,
    thread: null
  })

  const fetchForumGroups = async () => {
    try {
      setLoadingGroups(true)
      const jwt_token = getAuthToken()

      const response = await callingAPI<ForumGroupsResponse, ForumGroupsRequest>('get_thread_groups', {
        jwt_token: jwt_token || '',
        pagging: 0,
        amount: 18050000
      })

      if (response?.groups) {
        setGroups(response.groups)
        // Auto select first group
        if (response.groups.length > 0) {
          setSelectedGroupId(response.groups[0].id)
        }
      }
    } catch (error) {
      console.error('Error fetching forum groups:', error)
      // Fallback to mock data
      // setGroups(MOCK_GROUPS)
      // setSelectedGroupId(MOCK_GROUPS[0].id)
    } finally {
      setLoadingGroups(false)
    }
  }

  const fetchThreadsByGroup = async (groupId: string) => {
    if (!groupId) return

    try {
      setLoadingThreads(true)
      const jwt_token = getAuthToken()

      const response = await callingAPI<ThreadsResponse, ThreadsRequest>(REQUEST_TYPE.get_threads_by_group, {
        jwt_token: jwt_token || '',
        group_id: groupId,
        pagging: 0
      })

      if (response?.threads) {
        setThreads(response.threads)
      }
    } catch (error) {
      console.error('Error fetching threads:', error)
      // Fallback to mock data
      // setThreads(MOCK_THREADS)
    } finally {
      setLoadingThreads(false)
    }
  }

  const handleGroupSelect = (groupId: string) => {
    setSelectedGroupId(groupId)
    fetchThreadsByGroup(groupId)
  }

  const handleLike = (threadId: string) => {
    // TODO: Call API to like thread
    console.log('Like thread:', threadId)
  }

  const handleUnlike = (threadId: string) => {
    // TODO: Call API to unlike thread
    console.log('Unlike thread:', threadId)
  }

  const handleComment = (thread: ThreadData) => {
    setCommentModal({ open: true, thread })
  }

  useEffect(() => {
    fetchForumGroups()
  }, [])

  useEffect(() => {
    if (selectedGroupId) {
      fetchThreadsByGroup(selectedGroupId)
    }
  }, [selectedGroupId])

  const renderGroupSkeleton = () => (
    <div className='flex flex-wrap gap-3'>
      {Array.from({ length: 6 }).map((_, index) => (
        <Skeleton key={index} variant='rectangular' width={150} height={40} sx={{ borderRadius: 999 }} />
      ))}
    </div>
  )

  const renderThreadSkeleton = () => (
    <Card sx={{ p: 3, borderRadius: 2, border: '1px solid #e0e0e0', mb: 2 }}>
      <Skeleton variant='text' width='80%' height={28} sx={{ mb: 1 }} />
      <Skeleton variant='text' width='100%' height={20} sx={{ mb: 1 }} />
      <Skeleton variant='text' width='60%' height={20} sx={{ mb: 2 }} />
      <div className='flex items-center gap-4'>
        <Skeleton variant='rectangular' width={60} height={24} sx={{ borderRadius: 1 }} />
        <Skeleton variant='rectangular' width={60} height={24} sx={{ borderRadius: 1 }} />
        <Skeleton variant='rectangular' width={80} height={24} sx={{ borderRadius: 1 }} />
      </div>
    </Card>
  )

  return (
    <div className='py-4'>
      <Typography variant='h4' sx={{ mb: 3, fontWeight: 'bold' }}>
        💬 Diễn đàn thảo luận
      </Typography>

      {/* Groups Menu */}
      <Box sx={{ mb: 4 }}>
        <Typography variant='h6' sx={{ mb: 2, fontWeight: 'bold' }}>
          Chọn chủ đề
        </Typography>

        {loadingGroups ? (
          renderGroupSkeleton()
        ) : (
          <div className='flex flex-wrap gap-3'>
            {groups.map((group) => (
              <Chip
                key={group.id}
                label={group.name}
                onClick={() => handleGroupSelect(group.id)}
                variant={selectedGroupId === group.id ? 'filled' : 'outlined'}
                color={selectedGroupId === group.id ? 'secondary' : 'default'}
                sx={{
                  fontSize: '0.9rem',
                  fontWeight: selectedGroupId === group.id ? 'bold' : 'normal',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: 2
                  }
                }}
              />
            ))}
          </div>
        )}
      </Box>

      {/* Threads List */}
      <Box>
        <Typography variant='h6' sx={{ mb: 2, fontWeight: 'bold' }}>
          📋 Thảo luận gần đây
        </Typography>

        {loadingThreads ? (
          <div>
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index}>{renderThreadSkeleton()}</div>
            ))}
          </div>
        ) : threads.length === 0 ? (
          <Card sx={{ p: 6, textAlign: 'center', borderRadius: 2, border: '1px solid #e0e0e0' }}>
            <Typography variant='h6' sx={{ mb: 1 }}>
              💭 Chưa có thảo luận nào
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Hãy là người đầu tiên khởi tạo cuộc thảo luận trong nhóm này
            </Typography>
          </Card>
        ) : (
          <div className='space-y-4'>
            {threads.map((thread) => (
              <Card
                key={thread.id}
                sx={{
                  p: 3,
                  borderRadius: 2,
                  border: '1px solid #e0e0e0',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: 3,
                    transform: 'translateY(-2px)'
                  }
                }}
              >
                <div className='flex flex-col gap-3'>
                  {/* Thread Header */}
                  <div>
                    <Typography variant='h6' sx={{ fontWeight: 'bold', mb: 1, color: 'text.primary' }}>
                      {thread.title}
                    </Typography>
                    <Typography variant='body1' sx={{ color: 'text.secondary', lineHeight: 1.6, mb: 2 }}>
                      {thread.content}
                    </Typography>
                  </div>

                  {/* Actions */}
                  <div className='flex items-center gap-2'>
                    <Button
                      size='small'
                      variant='outlined'
                      onClick={() => handleLike(thread.id)}
                      sx={{
                        borderRadius: 999,
                        textTransform: 'none',
                        fontWeight: 'normal',
                        color: 'black',
                        borderColor: 'gray'
                      }}
                    >
                      👍 Thích ({thread.up_votes.length})
                    </Button>

                    <Button
                      size='small'
                      variant='outlined'
                      onClick={() => handleUnlike(thread.id)}
                      sx={{
                        borderRadius: 999,
                        textTransform: 'none',
                        fontWeight: 'normal',
                        color: 'black',
                        borderColor: 'gray'
                      }}
                    >
                      👎 Không thích ({thread.down_votes.length})
                    </Button>

                    <Button
                      size='small'
                      onClick={() => handleComment(thread)}
                      variant='outlined'
                      sx={{
                        borderRadius: 999,
                        textTransform: 'none',
                        fontWeight: 'normal',
                        color: 'black',
                        borderColor: 'gray'
                      }}
                    >
                      💬 Bình luận
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </Box>

      {/* Comment Modal */}
      <CommentModal
        open={commentModal.open}
        onClose={() => setCommentModal({ open: false, thread: null })}
        thread={commentModal.thread}
      />
    </div>
  )
}
