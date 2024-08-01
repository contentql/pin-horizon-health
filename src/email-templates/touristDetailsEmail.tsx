import { env } from '@env'
import {
  Body,
  Column,
  Container,
  Head,
  Heading,
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
  date: any
  message: string
  phoneNumber: string
  no_of_persons: number
}

const baseUrl = env.PAYLOAD_URL

export const TouristDetailsEmail = ({
  userName,
  email,
  date,
  phoneNumber,
  message,
  no_of_persons,
}: UserContactEmailProps) => {
  const dateObj = new Date(date)
  const year = dateObj.getFullYear()
  const month = String(dateObj.getMonth() + 1).padStart(2, '0')
  const day = String(dateObj.getDate()).padStart(2, '0')
  const formattedDate = `${year}/${month}/${day}`

  return (
    <Html>
      <Head />
      <Preview>Health Horizon Traveler Details</Preview>
      <Body style={main}>
        <Container>
          <Section style={logo}>
            <Img
              src={`${baseUrl}/images/horizonLogo.webp`}
              height={50}
              width={50}
              alt='Logo'
            />
            <Text
              style={{
                marginLeft: '5px',
                fontSize: '20px',
              }}>
              Medical Health Horizon
            </Text>
          </Section>

          <Section style={content}>
            <Row>
              <Img
                style={image}
                width={620}
                src={`${baseUrl}/images/email/emailTravel.webp`}
              />
            </Row>

            <Row style={{ ...boxInfos, paddingBottom: '0' }}>
              <Column>
                <Heading
                  style={{
                    fontSize: 32,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  Hi Admin,
                </Heading>
                <Heading
                  as='h2'
                  style={{
                    fontSize: 26,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  New Traveler Details Received
                </Heading>

                <Text style={paragraph}>
                  <b>Name: </b>
                  {userName}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Email: </b>
                  {email}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Contact Number: </b>
                  {phoneNumber}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Tour Date: </b>
                  {formattedDate}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Number Of Travelers: </b>
                  {no_of_persons}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Message: </b>
                  {message}
                </Text>
                <Text
                  style={{
                    color: 'rgb(0,0,0, 0.5)',
                    fontSize: 14,
                    marginTop: -5,
                  }}>
                  *Please contact the traveler using the details provided in the
                  received email.
                </Text>
              </Column>
            </Row>
          </Section>

          <Section style={containerImageFooter}>
            <Img
              style={image}
              width={620}
              src={`${baseUrl}/images/email/emailFooter.png`}
            />
          </Section>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 12,
              color: 'rgb(0,0,0, 0.7)',
            }}>
            Copyright © 2024 Horizon Health. All rights reserved.
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

export default TouristDetailsEmail

export const newTouristContactForm = (props: UserContactEmailProps) =>
  render(<TouristDetailsEmail {...props} />, { pretty: true })

const main = {
  backgroundColor: '#fff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const paragraph = {
  fontSize: 16,
}

const logo = {
  padding: '30px 20px',
  display: 'flex',
  alignItems: 'center',
}
const containerButton = {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
}

const button = {
  backgroundColor: '#e00707',
  borderRadius: 3,
  color: '#FFF',
  fontWeight: 'bold',
  border: '1px solid rgb(0,0,0, 0.1)',
  cursor: 'pointer',
  padding: '12px 30px',
}

const content = {
  border: '1px solid rgb(0,0,0, 0.1)',
  borderRadius: '3px',
  overflow: 'hidden',
}

const image = {
  maxWidth: '100%',
}

const boxInfos = {
  padding: '20px',
}

const containerImageFooter = {
  padding: '45px 0 0 0',
}
