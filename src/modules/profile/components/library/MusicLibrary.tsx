import { Box, Typography, Card } from '@mui/material'

interface MusicItem {
  id: string
  title: string
  thumbnail: string
  duration: string
  artist: string
}

const MOCK_MUSIC_DATA: MusicItem[] = [
  {
    id: '1',
    title: 'Meditation Music for Deep Sleep',
    thumbnail: 'https://img.youtube.com/vi/tEmt1Znux58/maxresdefault.jpg',
    duration: '3:04',
    artist: 'Peaceful Mind'
  },
  {
    id: '2',
    title: 'Nature Sounds - Rain & Thunder',
    thumbnail: 'https://img.youtube.com/vi/nDq6TstdEi8/maxresdefault.jpg',
    duration: '8:20',
    artist: 'Nature Therapy'
  },
  {
    id: '3',
    title: 'Calming Piano Music',
    thumbnail: 'https://img.youtube.com/vi/jfKfPfyJRdk/maxresdefault.jpg',
    duration: '5:15',
    artist: 'Soothing Piano'
  },
  {
    id: '4',
    title: 'Ocean Waves & Seagulls',
    thumbnail: 'https://img.youtube.com/vi/V1bFr2SWP1I/maxresdefault.jpg',
    duration: '10:30',
    artist: 'Ocean Sounds'
  },
  {
    id: '5',
    title: 'Forest Birds & Gentle Breeze',
    thumbnail: 'https://img.youtube.com/vi/xNN7iTA57jM/maxresdefault.jpg',
    duration: '6:45',
    artist: 'Forest Ambience'
  },
  {
    id: '6',
    title: 'Tibetan Singing Bowls',
    thumbnail: 'https://img.youtube.com/vi/3-DKcR9SvM8/maxresdefault.jpg',
    duration: '12:00',
    artist: 'Meditation Sounds'
  }
]

export default function MusicLibrary() {
  return (
    <div className='p-4'>
      <Typography variant='h6' sx={{ mb: 3, fontWeight: 'bold' }}>
        Âm nhạc thư giãn
      </Typography>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {MOCK_MUSIC_DATA.map((item) => (
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
                {item.artist}
              </Typography>
            </Box>
          </Card>
        ))}
      </div>
    </div>
  )
}
