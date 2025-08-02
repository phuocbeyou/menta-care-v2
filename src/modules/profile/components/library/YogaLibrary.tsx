import { Box, Typography, Card } from '@mui/material'

interface YogaItem {
  id: string
  title: string
  thumbnail: string
  duration: string
  level: string
  instructor: string
}

const MOCK_YOGA_DATA: YogaItem[] = [
  {
    id: '1',
    title: 'Morning Yoga Flow for Beginners',
    thumbnail: 'https://img.youtube.com/vi/VaoV1PrYft4/maxresdefault.jpg',
    duration: '15:30',
    level: 'Beginner',
    instructor: 'Yoga with Adriene'
  },
  {
    id: '2',
    title: 'Evening Yoga for Better Sleep',
    thumbnail: 'https://img.youtube.com/vi/BiWnaZ2XzB0/maxresdefault.jpg',
    duration: '20:45',
    level: 'All Levels',
    instructor: 'Breathe and Flow'
  },
  {
    id: '3',
    title: 'Core Strengthening Yoga',
    thumbnail: 'https://img.youtube.com/vi/Eml2xnoLpYE/maxresdefault.jpg',
    duration: '25:15',
    level: 'Intermediate',
    instructor: 'Yoga Studio'
  },
  {
    id: '4',
    title: 'Gentle Yoga for Stress Relief',
    thumbnail: 'https://img.youtube.com/vi/COp7BR_Dvps/maxresdefault.jpg',
    duration: '30:00',
    level: 'Beginner',
    instructor: 'Calm Yoga'
  },
  {
    id: '5',
    title: 'Advanced Power Yoga Flow',
    thumbnail: 'https://img.youtube.com/vi/4C-gxOE0j7s/maxresdefault.jpg',
    duration: '45:20',
    level: 'Advanced',
    instructor: 'Power Yoga Studio'
  },
  {
    id: '6',
    title: 'Meditation & Mindfulness',
    thumbnail: 'https://img.youtube.com/vi/inpok4MKVLM/maxresdefault.jpg',
    duration: '12:30',
    level: 'All Levels',
    instructor: 'Mindful Life'
  }
]

export default function YogaLibrary() {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return '#4CAF50'
      case 'Intermediate':
        return '#FF9800'
      case 'Advanced':
        return '#F44336'
      default:
        return '#2196F3'
    }
  }

  return (
    <div className='p-4'>
      <Typography variant='h6' sx={{ mb: 3, fontWeight: 'bold' }}>
        Bài tập Yoga
      </Typography>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {MOCK_YOGA_DATA.map((item) => (
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

              {/* Level badge */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 8,
                  left: 8,
                  backgroundColor: getLevelColor(item.level),
                  color: 'white',
                  px: 1,
                  py: 0.5,
                  borderRadius: 1,
                  fontSize: '0.75rem',
                  fontWeight: 'bold'
                }}
              >
                {item.level}
              </Box>
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
              <Typography variant='caption' color='text.secondary' sx={{ display: 'block' }}>
                {item.instructor}
              </Typography>
            </Box>
          </Card>
        ))}
      </div>
    </div>
  )
}
