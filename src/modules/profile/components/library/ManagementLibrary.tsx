import { Box, Typography, Card, Chip } from '@mui/material'

interface ManagementItem {
  id: string
  title: string
  thumbnail: string
  duration: string
  category: string
  speaker: string
  views: string
}

const MOCK_MANAGEMENT_DATA: ManagementItem[] = [
  {
    id: '1',
    title: 'Leadership Skills in Digital Age',
    thumbnail: 'https://img.youtube.com/vi/HHjgK6p4nrw/maxresdefault.jpg',
    duration: '21:22',
    category: 'Leadership',
    speaker: 'Harvard Business Review',
    views: '475K views'
  },
  {
    id: '2',
    title: 'Time Management Mastery',
    thumbnail: 'https://img.youtube.com/vi/iONDebHX9qk/maxresdefault.jpg',
    duration: '18:45',
    category: 'Productivity',
    speaker: 'Brian Tracy',
    views: '1.2M views'
  },
  {
    id: '3',
    title: 'Effective Communication Strategies',
    thumbnail: 'https://img.youtube.com/vi/HAnw168huqA/maxresdefault.jpg',
    duration: '15:30',
    category: 'Communication',
    speaker: 'TED Talks',
    views: '890K views'
  },
  {
    id: '4',
    title: 'Building High Performance Teams',
    thumbnail: 'https://img.youtube.com/vi/K3Qzzggn--s/maxresdefault.jpg',
    duration: '25:10',
    category: 'Team Building',
    speaker: 'Simon Sinek',
    views: '2.1M views'
  },
  {
    id: '5',
    title: 'Strategic Decision Making',
    thumbnail: 'https://img.youtube.com/vi/ZkWdJKs-wPo/maxresdefault.jpg',
    duration: '32:45',
    category: 'Strategy',
    speaker: 'McKinsey & Company',
    views: '654K views'
  },
  {
    id: '6',
    title: 'Emotional Intelligence at Work',
    thumbnail: 'https://img.youtube.com/vi/Y7m9eNoB3NU/maxresdefault.jpg',
    duration: '19:15',
    category: 'Psychology',
    speaker: 'Daniel Goleman',
    views: '1.5M views'
  }
]

export default function ManagementLibrary() {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Leadership':
        return '#9C27B0'
      case 'Productivity':
        return '#3F51B5'
      case 'Communication':
        return '#009688'
      case 'Team Building':
        return '#FF5722'
      case 'Strategy':
        return '#795548'
      case 'Psychology':
        return '#E91E63'
      default:
        return '#607D8B'
    }
  }

  return (
    <div className='p-4'>
      <Typography variant='h6' sx={{ mb: 3, fontWeight: 'bold' }}>
        Tài nguyên quản trị
      </Typography>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {MOCK_MANAGEMENT_DATA.map((item) => (
          <Card
            key={item.id}
            sx={{
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: 3
              }
            }}
          >
            <Box sx={{ position: 'relative' }}>
              <Box
                component='img'
                src={item.thumbnail}
                alt={item.title}
                sx={{
                  width: '100%',
                  height: 120,
                  objectFit: 'cover'
                }}
                onError={(e) => {
                  e.currentTarget.src =
                    'https://storage.googleapis.com/a1aa/image/b5e67944-41ac-48ed-6c51-1512f815f13c.jpg'
                }}
              />

              {/* Duration badge */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 8,
                  right: 8,
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                  color: 'white',
                  px: 1,
                  py: 0.5,
                  borderRadius: 1,
                  fontSize: '0.75rem',
                  fontWeight: 'bold'
                }}
              >
                {item.duration}
              </Box>

              {/* Category chip */}
              <Chip
                label={item.category}
                size='small'
                sx={{
                  position: 'absolute',
                  top: 8,
                  left: 8,
                  backgroundColor: getCategoryColor(item.category),
                  color: 'white',
                  fontSize: '0.7rem',
                  height: 24,
                  '& .MuiChip-label': {
                    px: 1
                  }
                }}
              />
            </Box>

            <Box sx={{ p: 2 }}>
              <Typography
                variant='body2'
                sx={{
                  fontWeight: 'bold',
                  mb: 0.5,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical'
                }}
              >
                {item.title}
              </Typography>
              <Typography variant='caption' color='text.secondary' sx={{ display: 'block', mb: 0.5 }}>
                {item.speaker}
              </Typography>
              <Typography variant='caption' color='text.secondary' sx={{ display: 'block' }}>
                {item.views}
              </Typography>
            </Box>
          </Card>
        ))}
      </div>
    </div>
  )
}
