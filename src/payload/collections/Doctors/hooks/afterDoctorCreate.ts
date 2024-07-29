import { env } from '@env'
import { CollectionAfterChangeHook } from 'payload'

export const AfterDoctorCreate: CollectionAfterChangeHook = async ({
  operation,
  req,
  doc,
}) => {
  if (operation === 'create') {
    await fetch(`${env.PAYLOAD_URL}/api/trpc/message.doctorCreated`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: `Welcome to Horizon Health, ${doc.name} !\n\nWe are excited to have you on board. Soon, you will receive a link to create your account on Cal.\n\nPlease follow the instructions provided to complete the registration process.\n\nThank you, and welcome to the team!`,
        phoneNumber: '9390463796',
      }),
    })
  }
}
