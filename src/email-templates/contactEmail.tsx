import { env } from '@env'
import {
  Body,
  Column,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
  render,
} from '@react-email/components'

interface UserContactEmailProps {
  userName: string
  email: string
  subject: string
  message: string
}

export const ContactEmail = ({
  userName,
  email,
  subject,
  message,
}: UserContactEmailProps) => {
  const baseUrl = env.PAYLOAD_URL
  return (
    <Html>
      <Head />
      <Preview>Contact form submission</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section>
            <Row>
              <Column>
                <Img
                  style={sectionLogo}
                  src={`${baseUrl}/images/logo-removebg-preview.png`}
                  width='155'
                  height='31'
                  alt='Logo'
                />
              </Column>
            </Row>
          </Section>

          <Section style={paragraphContent}>
            <Hr style={hr} />
            <Text style={heading}>New Contact Form Submission</Text>
            <Text style={paragraph}>
              You have received a new contact form submission with the following
              details:
            </Text>
            <Text style={paragraph}>
              <strong>Name:</strong> {userName}
            </Text>
            <Text style={paragraph}>
              <strong>Email:</strong> {email}
            </Text>
            <Text style={paragraph}>
              <strong>Subject:</strong> {subject}
            </Text>
            <Text style={paragraph}>
              <strong>Message:</strong> {message}
            </Text>
            <Hr style={hr} />
          </Section>

          <Section style={paragraphContent}>
            <Text style={paragraph}>Thank you,</Text>
            <Text style={{ ...paragraph, fontSize: '20px' }}>
              The Medical health horizon team
            </Text>
          </Section>

          <Section style={{ ...paragraphContent, paddingBottom: 30 }}>
            <Text
              style={{
                ...paragraph,
                fontSize: '12px',
                textAlign: 'center',
                margin: 0,
              }}>
              © 2024 Medical health horizon
            </Text>
            <Text
              style={{
                ...paragraph,
                fontSize: '12px',
                textAlign: 'center',
                margin: 0,
              }}>
              You have received this email because a contact form was submitted
              on your website.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

export default ContactEmail

export const newContactForm = (props: UserContactEmailProps) =>
  render(<ContactEmail {...props} />, { pretty: true })

const main = {
  backgroundColor: '#dbddde',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const sectionLogo = {
  padding: '0 40px',
}

const headerBlue = {
  marginTop: '-1px',
}

const container = {
  margin: '30px auto',
  backgroundColor: '#fff',
  borderRadius: 5,
  overflow: 'hidden',
}

const heading = {
  fontSize: '14px',
  lineHeight: '26px',
  fontWeight: '700',
  color: '#004dcf',
}

const paragraphContent = {
  padding: '0 40px',
}

const paragraph = {
  fontSize: '14px',
  lineHeight: '22px',
  color: '#3c4043',
}

const link = {
  ...paragraph,
  color: '#004dcf',
}

const hr = {
  borderColor: '#e8eaed',
  margin: '20px 0',
}
