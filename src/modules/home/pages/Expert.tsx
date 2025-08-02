import { Box } from '@mui/material'
import { CONFIG } from '@src/config-global'
import { Helmet } from 'react-helmet-async'
import { HeaderExpert } from '../components/expert/header-expert'
import { ProcessInformation } from '../components/expert/ProcessInformation'
import { ProcessStep } from '../components/expert/ProcessStep'
import { Form } from '../components/expert/Form'
import { ListExpert } from '../components/expert/ListExpert'
import { useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
export default function Expert() {
  const [searchParams] = useSearchParams()
  const type = searchParams.get('type')
  const formExpert = searchParams.get('form-expert')

  //scroll to list-expert
  useEffect(() => {
    if (type) {
      const listExpert = document.getElementById('list-expert')
      if (listExpert) {
        const elementTop = listExpert.offsetTop
        const offsetPosition = elementTop - 200

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }
  }, [type])

  useEffect(() => {
    if (formExpert) {
      const formExpert = document.getElementById('form-expert')
      if (formExpert) {
        const elementTop = formExpert.offsetTop
        const offsetPosition = elementTop - 200

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }
  }, [formExpert])

  return (
    <>
      <Helmet>
        <title> {`Chuyên gia - ${CONFIG.appName}`}</title>
      </Helmet>
      <Box className='mx-auto px-3 py-6 flex flex-col bg-white'>
        <HeaderExpert />
        <ListExpert type={type} />
        <ProcessInformation />
        <ProcessStep />
        <Form />
      </Box>
    </>
  )
}
