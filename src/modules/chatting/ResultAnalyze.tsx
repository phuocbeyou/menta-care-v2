import { Button } from '@mui/material'
import { ListExpert } from './components/ListExpert'

import { Expert } from './components/ListExpert'
import { useNavigate } from 'react-router-dom'

interface ResultAnalyzeProps {
  experts?: Expert[]
}

export const ResultAnalyze = ({ experts }: ResultAnalyzeProps) => {
  const navigate = useNavigate()
  return (
    <div className='py-4 gap-4'>
      {experts && experts.length > 0 && (
        <div className='flex flex-col gap-4'>
          <div className='text-3xl font-bold text-secondary text-center w-[80%] mx-auto'>
            {`Sau khi phân tích nhu cầu của bạn, dưới đây là danh sách ${experts.length} chuyên gia phù hợp nhất.`}
          </div>
          <ListExpert experts={experts} isLoading={false} />
          <div className='flex justify-end'>
            <Button
              variant='contained'
              color='secondary'
              className='w-[60%] mx-auto'
              onClick={() => navigate('/expert')}
            >
              NẾU BẠN CHƯA THẤY PHÙ HỢP, XEM THÊM DANH SÁCH CHUYÊN GIA TẠI ĐÂY
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
