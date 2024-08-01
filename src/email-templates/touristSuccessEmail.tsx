import { env } from '@env'
import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
  render,
} from '@react-email/components'

interface TouristEmailProps {
  userName: string
}

export const TouristSuccessEmail = ({ userName }: TouristEmailProps) => {
  const baseUrl = env.PAYLOAD_URL
  return (
    <Html>
      <Tailwind>
        <Head />
        <Preview>Tourist Form Submission Acknowledgment</Preview>
        <Body style={main}>
          <Container style={container}>
            {/* @ts-ignore */}
            <Section style={headerSection}>
              <Link href={baseUrl} className='flex items-center'>
                <Img
                  src={`${baseUrl}/images/logo-removebg-preview.png`}
                  alt='Logo'
                  className='self-center'
                  height={50}
                  width={50}
                />
                <Text
                  style={{
                    marginLeft: '5px',
                    fontSize: '20px',
                    color: '#000312',
                  }}>
                  Medical Health Horizon
                </Text>
              </Link>
            </Section>

            <Section className='p-[20px] text-black dark:text-white'>
              <Text style={heading}>
                Thank You for Contacting Us, {userName}!
              </Text>
              <Text style={paragraph}>
                We have received your Details and appreciate you reaching out.
                Our Travel Team will get back to you as soon as possible.
              </Text>
              <Text style={paragraph}>
                In the meantime, feel free to explore our website or contact us
                directly if you have any queries.
              </Text>
              <Text style={paragraph}>
                Thank you for your patience and understanding.
              </Text>
            </Section>
            {/* @ts-ignore */}
            <Section style={footerSection}>
              <Text style={footerText}>Best regards,</Text>
              <Text style={footerText}>The Medical health horizon Team</Text>

              <Text style={footerText}>© 2024 , All Rights Reserved</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export const renderTouristSuccessEmail = (props: TouristEmailProps) =>
  render(<TouristSuccessEmail {...props} />, { pretty: true })

const main = {
  backgroundColor: '#f0f0f0',
  fontFamily: 'Arial, sans-serif',
  padding: '20px',
}

const container = {
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  overflow: 'hidden',
  width: '100%',
}

const headerSection = {
  backgroundColor: '#d2eaeb',
  padding: '20px',
}

const logo = {
  display: 'block',
  margin: '0 auto',
}

const heading = {
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '10px',
}

const paragraph = {
  fontSize: '16px',
  marginBottom: '10px',
}

const footerSection = {
  backgroundColor: '#f8f9fa',
  padding: '20px',
  textAlign: 'center',
}

const footerText = {
  fontSize: '14px',
  color: '#6c757d',
  margin: '5px 0',
}

const socialIconsRow = {
  display: 'flex',
  justifyContent: 'center',
  margin: '10px 0',
}
