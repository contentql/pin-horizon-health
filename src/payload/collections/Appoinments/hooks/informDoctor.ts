import { env } from '@env'
import { CollectionAfterChangeHook } from 'payload/types'

export const informDoctor: CollectionAfterChangeHook = async ({
  operation,
  req,
  doc,
}) => {
  if (operation === 'create') {
    console.log('before', doc)
    await fetch(`${env.PAYLOAD_URL}/api/trpc/message.appointmentCreated`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: doc.title,
        phoneNumber: '9390463796', // ! TODO: to be replace with doctor phone number
        name: doc.attendee_name,
        email: doc.attendee_email,
        meetingStartTime: doc.start_time,
        meetingEndTime: doc.end_time,
      }),
    })
  }
}
