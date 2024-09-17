import { env } from '@env'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
  Text,
  render,
} from '@react-email/components'

import { formatDateTime } from '@/utils/dateTimeFormater'

interface newAppointmentProps {
  username?: string
  date?: string
  preview: string
}

const baseUrl = env.PAYLOAD_URL

const NewAppointmentTemplate = ({
  username,
  date,
  preview,
}: newAppointmentProps) => {
  return (
    <Html>
      <Head />
      <Preview>{preview}</Preview>
      <Tailwind>
        <Body className='mx-auto my-auto bg-white px-2 font-sans'>
          <Container className='mx-auto my-[40px] max-w-[465px] rounded border border-solid border-[#eaeaea] p-[20px]'>
            <Section className='mt-[32px]'>
              <Img
                src={`${baseUrl}/favicon.ico`}
                width='40'
                height='37'
                alt='horizon'
                className='mx-auto my-0'
              />
            </Section>
            <Heading className='mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black'>
              Horizon Health
            </Heading>
            <Text className='text-[14px] leading-[24px] text-black'>
              Hello <strong>{username}</strong>,
            </Text>
            <Text className='text-[14px] leading-[24px] text-black'>
              <strong> Your Appointment Has Been Scheduled</strong>
              <Text>
                Your appointment is scheduled. We will notify you of any changes
                or reminders as the date approaches.
              </Text>
            </Text>
            <Section>
              <Text>when</Text>
              <Text>{formatDateTime(date!)}</Text>
            </Section>

            <Hr className='mx-0 my-[26px] w-full border border-solid border-[#eaeaea]' />
            <Text className='text-[12px] leading-[24px] text-[#666666]'>
              Thanks for choosing us!
              <p className='text-[12px] leading-[24px] text-[#666666]'>
                We appreciate your trust and look forward to serving you. If you
                have any questions, feel free to contact us.
              </p>
              <Text className='text-[12px] leading-[24px] text-[#666666]'>
                <p className='text-[12px] leading-[24px] text-[#666666]'>
                  Best regards,
                </p>
                <p className='text-[12px] leading-[24px] text-[#666666]'>
                  <strong>Horizon Health</strong>
                </p>
              </Text>
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export const newAppointment = (props: newAppointmentProps) =>
  render(<NewAppointmentTemplate {...props} />, { pretty: true })
