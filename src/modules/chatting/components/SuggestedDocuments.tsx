import { Button, Card, Typography } from '@mui/material'
import { Document } from '../mock/const'

interface SuggestedDocumentsProps {
  documents?: Document[]
}

export function SuggestedDocuments({ documents = [] }: SuggestedDocumentsProps) {
  const handleDownload = (document: Document) => {
    // Trong thực tế, đây sẽ là API call hoặc direct download
    console.log('Downloading:', document.title)
    // window.open(document.downloadUrl, '_blank')
  }

  return (
    <div className='flex flex-col gap-4'>
      <Typography
        variant='h4'
        className='text-center font-bold text-secondary mb-4'
        sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }}
      >
        GỢI Ý TÀI LIỆU CHO BẠN
      </Typography>

      <Typography
        variant='body1'
        className='text-center text-gray-600 mb-6'
        sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}
      >
        MÌNH SẼ HIỂN THỊ 1 LIST NÀY VÀ IN ĐẬM TÀI LIỆU GỢI Ý ĐC K?
      </Typography>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {documents.map((document) => (
          <Card
            key={document.id}
            className='p-4 shadow-md hover:shadow-lg transition-shadow duration-300'
            sx={{
              borderRadius: 2,
              border: '1px solid #e0e0e0'
            }}
          >
            <div className='flex flex-col gap-3 h-full'>
              <Typography
                variant='h6'
                className='font-semibold text-secondary line-clamp-2'
                sx={{ fontSize: { xs: '1rem', md: '1.1rem' } }}
              >
                {document.title}
              </Typography>

              <Typography
                variant='body2'
                className='text-gray-600 flex-1 line-clamp-3'
                sx={{
                  fontSize: { xs: '0.85rem', md: '0.9rem' },
                  lineHeight: 1.5
                }}
              >
                {document.description}
              </Typography>

              <Button
                variant='contained'
                color='secondary'
                onClick={() => handleDownload(document)}
                className='mt-auto'
                sx={{
                  borderRadius: 2,
                  textTransform: 'none',
                  fontSize: { xs: '0.8rem', md: '0.9rem' }
                }}
              >
                📥 Tải xuống
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
