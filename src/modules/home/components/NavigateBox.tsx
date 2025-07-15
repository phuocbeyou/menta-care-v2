import { Box, Typography } from '@mui/material'

interface NavigateBoxProps {
  icon?: string
  title: string
  subtitle?: string
  onClick?: () => void
  className?: string
  classNameBox?: string
}

export function NavigateBox({
  icon = '/assets/images/icons/robot-headset.png',
  title,
  subtitle,
  onClick,
  className,
  classNameBox
}: NavigateBoxProps) {
  return (
    <Box
      className={className}
      onClick={onClick}
      sx={{
        cursor: 'pointer',
        transition: 'transform 0.2s ease-in-out',
        '&:hover': {
          transform: 'scale(1.05)'
        }
      }}
    >
      <Box
        className={`bg-secondary ${classNameBox} h-[150px] md:h-[234px] md:w-[250px] lg:w-[300px] flex flex-col justify-between`}
        sx={{
          borderRadius: '20px',
          padding: '20px',
          paddingBottom: '30px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
        }}
      >
        {/* Top row with icons */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
          {/* Main icon */}
          <Box
            component='img'
            src={icon}
            alt='Icon'
            sx={{
              filter: 'brightness(0) invert(1)'
            }}
            height={60}
          />

          {/* Arrow icon */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Box component='img' src='/assets/images/components/next.png' alt='Arrow' height={41} />
          </Box>
        </Box>

        {/* Text content */}
        <Box sx={{ textAlign: 'left' }}>
          <Typography
            variant='body2'
            sx={{
              color: 'white',
              fontWeight: 500,
              textDecoration: 'underline',
              lineHeight: 1.4,
              fontSize: { xs: '1rem', md: '1.4rem' }
            }}
          >
            {title}
          </Typography>
          {subtitle && (
            <Typography
              variant='body2'
              sx={{
                color: 'white',
                fontWeight: 500,
                textDecoration: 'underline',
                lineHeight: 1.4,
                fontSize: { xs: '1rem', md: '1.4rem' }
              }}
            >
              {subtitle}
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  )
}
