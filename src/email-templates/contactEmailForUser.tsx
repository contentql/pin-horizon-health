import { env } from '@env'
import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Section,
  Text,
  render,
} from '@react-email/components'

interface UserAcknowledgmentEmailProps {
  userName: string
}

export const UserAcknowledgmentEmail = ({
  userName,
}: UserAcknowledgmentEmailProps) => {
  const baseUrl = env.NEXT_PUBLIC_PUBLIC_URL
  return (
    <Html>
      <Head />
      <Preview>Contact Form Submission Acknowledgment</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* @ts-ignore */}
          <Section style={headerSection}>
            <Img
              src={`${baseUrl}/images/logo-removebg-preview.webp`}
              width='150'
              height='40'
              alt='Company Logo'
              style={logo}
            />
          </Section>

          <Section style={contentSection}>
            <Text style={heading}>
              Thank You for Contacting Us, {userName}!
            </Text>
            <Text style={paragraph}>
              We have received your message and appreciate you reaching out. Our
              team will review your inquiry and get back to you as soon as
              possible.
            </Text>
            <Text style={paragraph}>
              In the meantime, feel free to explore our website or contact us
              directly if you have any urgent questions.
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
    </Html>
  )
}

export const renderUserAcknowledgmentEmail = (
  props: UserAcknowledgmentEmailProps,
) => render(<UserAcknowledgmentEmail {...props} />, { pretty: true })

const main = {
  backgroundColor: '#f0f0f0',
  fontFamily: 'Arial, sans-serif',
  padding: '20px',
}

const container = {
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  overflow: 'hidden',
}

const headerSection = {
  backgroundColor: '#007bff',
  padding: '20px',
  textAlign: 'center',
}

const logo = {
  display: 'block',
  margin: '0 auto',
}

const contentSection = {
  padding: '20px',
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
