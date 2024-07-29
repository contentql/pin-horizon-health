import { CollectionAfterChangeHook } from 'payload'

import { tempContactForm } from '@/email-templates/tempContactEmail'

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
      html: tempContactForm({
        userName: doc.name,
        email: doc.email,
        subject: doc.subject,
        message: doc.message,
      }),
    })
  }
}
