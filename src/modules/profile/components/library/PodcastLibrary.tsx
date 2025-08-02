import { Box, Typography, Card } from '@mui/material'

interface PodcastItem {
  id: string
  title: string
  thumbnail: string
  duration: string
  host: string
  episode: string
  topic: string
}

const MOCK_PODCAST_DATA: PodcastItem[] = [
  {
    id: '1',
    title: 'Mental Health in the Digital World',
    thumbnail: 'https://img.youtube.com/vi/8jPQjjsBbIc/maxresdefault.jpg',
    duration: '42:15',
    host: 'Mindful Conversations',
    episode: 'EP. 127',
    topic: 'Mental Health'
  },
  {
    id: '2',
    title: 'Building Resilience in Tough Times',
    thumbnail: 'https://img.youtube.com/vi/hzOzlPtg_dQ/maxresdefault.jpg',
    duration: '35:30',
    host: 'Psychology Today',
    episode: 'EP. 89',
    topic: 'Resilience'
  },
  {
    id: '3',
    title: 'The Science of Happiness',
    thumbnail: 'https://img.youtube.com/vi/GXy__kBVq1M/maxresdefault.jpg',
    duration: '28:45',
    host: 'Happiness Lab',
    episode: 'EP. 205',
    topic: 'Happiness'
  },
  {
    id: '4',
    title: 'Stress Management Techniques',
    thumbnail: 'https://img.youtube.com/vi/RqcjBLMaWCg/maxresdefault.jpg',
    duration: '31:20',
    host: 'Calm Mind Podcast',
    episode: 'EP. 67',
    topic: 'Stress Relief'
  },
  {
    id: '5',
    title: 'Mindfulness in Daily Life',
    thumbnail: 'https://img.youtube.com/vi/ZToicYcHIOU/maxresdefault.jpg',
    duration: '39:10',
    host: 'Present Moment',
    episode: 'EP. 143',
    topic: 'Mindfulness'
  },
  {
    id: '6',
    title: 'Work-Life Balance Secrets',
    thumbnail: 'https://img.youtube.com/vi/ZXsQAXx_ao0/maxresdefault.jpg',
    duration: '26:55',
    host: 'Life Balance Show',
    episode: 'EP. 92',
    topic: 'Work-Life'
  }
]

export default function PodcastLibrary() {
  const getTopicColor = (topic: string) => {
    switch (topic) {
      case 'Mental Health':
        return '#2E7D32'
      case 'Resilience':
        return '#1565C0'
      case 'Happiness':
        return '#F57C00'
      case 'Stress Relief':
        return '#C62828'
      case 'Mindfulness':
        return '#6A1B9A'
      case 'Work-Life':
        return '#00695C'
      default:
        return '#424242'
    }
  }

  return (
    <div className='p-4'>
      <Typography variant='h6' sx={{ mb: 3, fontWeight: 'bold' }}>
        Podcast Sức khỏe tinh thần
      </Typography>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {MOCK_PODCAST_DATA.map((item) => (
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

              {/* Episode badge */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 8,
                  right: 8,
                  backgroundColor: getTopicColor(item.topic),
                  color: 'white',
                  px: 1,
                  py: 0.5,
                  borderRadius: 1,
                  fontSize: '0.75rem',
                  fontWeight: 'bold'
                }}
              >
                {item.episode}
              </Box>

              {/* Play icon overlay */}
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  borderRadius: '50%',
                  width: 48,
                  height: 48,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  opacity: 0.7,
                  transition: 'opacity 0.3s ease'
                }}
              >
                ▶️
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
              <Typography variant='caption' color='text.secondary' sx={{ display: 'block', mb: 0.5 }}>
                {item.host}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography
                  variant='caption'
                  sx={{
                    color: getTopicColor(item.topic),
                    fontWeight: 'bold'
                  }}
                >
                  {item.topic}
                </Typography>
              </Box>
            </Box>
          </Card>
        ))}
      </div>
    </div>
  )
}
