import { CollectionAfterChangeHook } from 'payload/types'

import { newContactForm } from '@/email-templates/contactEmail'

const OPERATION = 'create'
const SUBJECT = 'New contact submission'
export const ContactEmailToUser: CollectionAfterChangeHook = async ({
  operation,
  doc,
  req,
}) => {
  if (operation === OPERATION) {
    req.payload.sendEmail({
      to: doc.email,
      from: process.env.RESEND_SENDER_EMAIL,
      subject: `Hi ${doc.name}, thanks for contacting us!`,
      html: newContactForm({
        userName: doc.name,
        email: doc.email,
        subject: doc.subject,
        message: doc.message,
      }),
    })
  }
}
