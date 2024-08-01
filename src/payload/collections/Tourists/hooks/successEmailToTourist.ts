import { CollectionAfterChangeHook } from 'payload'

import { renderTouristSuccessEmail } from '@/email-templates/touristSuccessEmail'

const OPERATION = 'create'
const SUBJECT = 'New contact submission'
export const SuccessEmailToTourist: CollectionAfterChangeHook = async ({
  operation,
  doc,
  req,
}) => {
  if (operation === OPERATION) {
    req.payload.sendEmail({
      to: doc.email,
      from: process.env.RESEND_SENDER_EMAIL,
      subject: `Hi ${doc.name}, thanks for contacting us!`,
      html: renderTouristSuccessEmail({
        userName: doc.name,
      }),
    })
  }
}
