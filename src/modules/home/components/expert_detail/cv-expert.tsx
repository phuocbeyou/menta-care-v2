import { Box, Rating } from '@mui/material'
import { Expert } from '../expert/ListExpert'

const Line = () => {
  return (
    <div className='flex items-center gap-2 relative my-2'>
      <div className='border-1 border-gray-300 w-full' />
      <div className='border-1 border-gray-500 w-[50px] h-[4px] bg-gray-500 absolute bottom-0 left-1/2 -translate-x-1/2 rounded-sm' />
    </div>
  )
}

interface ExperienceProps {
  data: {
    title: string
    time: string
    company: string
    description: string
  }[]
}

const Experience = ({ data }: ExperienceProps) => {
  return (
    <div className='relative  mt-4 flex'>
      <div className='border-l border-gray-300 pl-2 my-1' />
      <div className='space-y-4'>
        {data.map((item, index) => (
          <div className='relative' key={index}>
            <div className='absolute h-[14px] w-[14px] bg-gray-600 rounded-full -left-[24px] top-[5px]' />
            <h3 className='font-semibold text-gray-800'>{item.title}</h3>
            <p className='italic text-gray-600 mb-1'>{item.company}</p>
            <p className='text-sm text-gray-600 max-w-prose'>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

const ListExperience = [
  {
    title: 'Product Design Manager',
    time: '2016 - 2020',
    company: 'Arowwai Industries',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque.'
  },
  {
    title: 'Marketing Manager',
    time: '2019 - 2020',
    company: 'Arowwai Industries',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque.'
  },
  {
    title: 'Marketing Manager',
    time: '2017- 2019',
    company: 'Arowwai Industries',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque.'
  },
  {
    title: 'Marketing Manager',
    time: '2016- 2017',
    company: 'Arowwai Industries',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque.'
  }
]

interface CvExpertProps {
  expert?: Expert
}

export function CvExpert({ expert }: CvExpertProps) {
  return (
    <main className='mt-20'>
      <div className='flex flex-col md:flex-row gap-10 md:gap-20'>
        {/* Left Panel */}
        <section className='border border-gray-300 rounded-xl p-4 w-full max-w-md flex flex-col gap-8'>
          {/* SỐ LƯỢNG KHÁCH HÀNG */}
          <div>
            <h2 className='text-gray-700 font-semibold text-lg relative inline-block pb-1 text-center w-full'>
              SỐ LƯỢNG KHÁCH HÀNG
              <Line />
            </h2>
            <ul className='text-sm text-gray-600 space-y-1 mb-3'>
              <li>+1000 Khách hàng cá nhân</li>
              <li>+59 Khách hàng doanh nghiệp</li>
              <li>+78 Dự án tư vấn thành công</li>
            </ul>
            <p className='font-semibold text-gray-800 mt-2 text-sm'>Thêm phần review của người sau book lịch</p>
            <div className='flex items-center gap-1 mb-2'>
              <Rating
                name='simple-controlled'
                value={parseFloat(expert?.rating || '') || 0}
                precision={0.1}
                readOnly
                size='small'
              />
              <span className='text-xs text-gray-600'>({parseFloat(expert?.rating || '').toFixed(1)})</span>
            </div>
          </div>
          {/* <!-- DOANH NGHIỆP TỪNG LÀM VIỆC --> */}
          <div>
            <h2 className='text-gray-700 font-semibold text-lg relative inline-block text-center w-full'>
              DOANH NGHIỆP TỪNG LÀM VIỆC
            </h2>
            <Line />
            <div className='flex items-center justify-between'>
              <img
                alt='Google logo with multicolor G letter on white background'
                className='h-10 w-auto object-contain'
                height='40'
                src='https://storage.googleapis.com/a1aa/image/f86ec8c7-1701-4c90-2a59-120220927eb7.jpg'
                width='60'
              />
              <img
                alt='Amazon logo with black text and orange arrow on white background'
                className='h-10 w-auto object-contain'
                height='40'
                src='https://storage.googleapis.com/a1aa/image/22932c0f-6ea2-4c2f-8950-6f234d2e8c23.jpg'
                width='80'
              />
              <img
                alt='Maersk logo with white star on blue background and black text'
                className='h-10 w-auto object-contain'
                height='40'
                src='https://storage.googleapis.com/a1aa/image/2d6462ec-62f4-434f-a15f-8c7f9557e17e.jpg'
                width='60'
              />
            </div>
          </div>
          {/* <!-- SKILLS --> */}
          <div>
            <h2 className='text-gray-700 font-semibold text-lg relative inline-block text-center w-full'>SKILLS</h2>
            <Line />
            <ul className='text-center text-gray-600 space-y-3 text-base font-normal mt-2 !list-none'>
              {expert?.skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </div>
        </section>
        {/* <!-- Right Panel --> */}
        <section className='flex-1 flex flex-col gap-8 '>
          {/* <!-- EXPERIENCE --> */}
          <div className='p-4'>
            <h2 className='text-gray-700 font-semibold text-lg relative inline-block text-center w-full'>EXPERIENCE</h2>
            <Line />

            <Experience data={ListExperience} />
          </div>
          {/* <!-- CHỨNG CHỈ LIÊN QUAN --> */}
          <div>
            <h2 className='text-gray-700 font-semibold text-lg relative inline-block text-center w-full'>
              CHỨNG CHỈ LIÊN QUAN
            </h2>
            <Line />
            <div className='flex justify-center items-center gap-4 flex-wrap'>
              <Box
                component={'img'}
                src='https://storage.googleapis.com/a1aa/image/86b360ae-f2f8-4482-8f33-dd0536c02b1a.jpg'
                height={120}
                sx={{
                  objectFit: 'cover'
                }}
              />
              <Box
                component={'img'}
                src='https://storage.googleapis.com/a1aa/image/155efb6d-01fa-4cb0-7025-055f76949a60.jpg'
                height={120}
                sx={{
                  objectFit: 'cover'
                }}
              />

              <Box
                component={'img'}
                src='https://storage.googleapis.com/a1aa/image/f44a2fd8-7d48-4881-9bef-54def9e85c15.jpg'
                height={120}
                sx={{
                  objectFit: 'cover'
                }}
              />
              {/* <img
                alt='SHRM-CP Certified Professional round blue badge with white and blue text'
                className='h-24 w-auto object-contain'
                height='100'
                src='https://storage.googleapis.com/a1aa/image/86b360ae-f2f8-4482-8f33-dd0536c02b1a.jpg'
                width='100'
              />
              <img
                alt='HR Certification Institute logo with purple and pink H letter and gray text on white background'
                className='h-24 w-auto object-contain'
                height='100'
                src='https://storage.googleapis.com/a1aa/image/155efb6d-01fa-4cb0-7025-055f76949a60.jpg'
                width='140'
              />
              <img
                alt='PMP certification round purple badge with PMP text and colorful icon on white background'
                className='h-24 w-auto object-contain'
                height='100'
                src='https://storage.googleapis.com/a1aa/image/f44a2fd8-7d48-4881-9bef-54def9e85c15.jpg'
                width='100'
              /> */}
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
