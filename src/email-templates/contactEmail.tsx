import { env } from '@env'
import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
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
  const previewText = `Read ${userName}'s message from contact form`

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>

      <Body style={main}>
        <Container style={container}>
          <Section>
            <Link href={baseUrl}>
              <Img
                src={`${baseUrl}/images/logo-removebg-preview.png`}
                width='50'
                height='50'
                alt='logo'
              />
            </Link>
          </Section>
          <Row>
            <Img
              style={image}
              width={620}
              src={`${baseUrl}/images/mail-header.png`}
            />
          </Row>
          <Section style={{ paddingBottom: '20px' }}>
            <Row>
              <Text style={heading}>Dear Admin,</Text>
              <Text style={review}>
                We are pleased to inform you that we have received a new contact
                form submission on our website. The user has shared the
                following message with us.{' '}
              </Text>
              <Text style={paragraph}>
                <strong>Message</strong>: {message}
              </Text>
              <Text style={{ ...paragraph, paddingBottom: '16px' }}>
                We kindly ask you to review this message and take the necessary
                actions at your earliest convenience. Your prompt attention to
                this matter will help us maintain our high standards of customer
                service and satisfaction.
              </Text>

              <Button style={button} href={baseUrl}>
                Contact Details
              </Button>
            </Row>
          </Section>

          <Hr style={hr} />
        </Container>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  width: '580px',
  maxWidth: '100%',
}

const userImage = {
  margin: '0 auto',
  marginBottom: '16px',
  borderRadius: '50%',
}

const heading = {
  fontSize: '24px',
  lineHeight: '1.3',
  fontWeight: '700',
  color: '#484848',
}

const image = {
  marginTop: '15px',
  maxWidth: '100%',
}

const paragraph = {
  fontSize: '18px',
  lineHeight: '1.4',
  color: '#484848',
}

const review = {
  ...paragraph,
  padding: '24px',
  backgroundColor: '#f2f3f3',
  borderRadius: '4px',
}

const button = {
  backgroundColor: '#307AC0',
  borderRadius: '8px',
  color: '#fff',
  fontSize: '18px',
  paddingTop: '19px',
  paddingBottom: '19px',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  width: '100%',
}

const link = {
  ...paragraph,
  color: '#ff5a5f',
  display: 'block',
}

const reportLink = {
  fontSize: '14px',
  color: '#9ca299',
  textDecoration: 'underline',
}

const hr = {
  borderColor: '#cccccc',
  margin: '20px 0',
}

const footer = {
  color: '#9ca299',
  fontSize: '14px',
  marginBottom: '10px',
}

export default ContactEmail

export const newContactForm = (props: UserContactEmailProps) =>
  render(<ContactEmail {...props} />, { pretty: true })
