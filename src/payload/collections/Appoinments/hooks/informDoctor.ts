import { env } from '@env'
import { CollectionAfterChangeHook } from 'payload'

import { formatDateTime } from '@/utils/dateTimeFormater'

export const informDoctor: CollectionAfterChangeHook = async ({
  operation,
  req,
  doc,
  previousDoc,
}) => {
  if (operation === 'create') {
    await fetch(`${env.PAYLOAD_URL}/api/trpc/message.appointmentCreated`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        heading: 'New Appointment',
        title: doc.title,
        phoneNumber: '9390463796', // ! TODO: to be replace with doctor phone number
        name: doc.attendee_name,
        email: doc.attendee_email,
        meetingStartTime: formatDateTime(doc.start_time),
        meetingEndTime: formatDateTime(doc.end_time),
        meetingUrl: doc.cal_video_url,
      }),
    })
  }
  if (operation === 'update') {
    if (
      previousDoc.booking_status !== doc.booking_status &&
      doc.booking_status == 'CANCELLED'
    ) {
      await fetch(`${env.PAYLOAD_URL}/api/trpc/message.appointmentCreated`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          heading: 'Appointment Cancelled',
          title: doc.title,
          phoneNumber: '9390463796', // ! TODO: to be replace with doctor phone number
          name: doc.attendee_name,
          email: doc.attendee_email,
          meetingStartTime: formatDateTime(doc.start_time),
          meetingEndTime: formatDateTime(doc.end_time),
          meetingUrl: doc.cal_video_url,
        }),
      })
    }
  }
  if (operation === 'update') {
    if (previousDoc.uid !== doc.uid && previousDoc.metadata !== doc.metadata) {
      await fetch(`${env.PAYLOAD_URL}/api/trpc/message.appointmentCreated`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          heading: `Appointment Rescheduled from ${formatDateTime(previousDoc.start_time)} to ${formatDateTime(doc.start_time)}`,
          title: doc.title,
          phoneNumber: '9390463796', // ! TODO: to be replace with doctor phone number
          name: doc.attendee_name,
          email: doc.attendee_email,
          meetingStartTime: formatDateTime(doc.start_time),
          meetingEndTime: formatDateTime(doc.end_time),
          meetingUrl: doc.cal_video_url,
        }),
      })
    }
  }
}
