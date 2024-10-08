import { CollectionAfterChangeHook } from 'payload'

import { newContactForm } from '@/email-templates/contactEmail'

const OPERATION = 'create'
const SUBJECT = 'New contact submission'

export const ContactEmailToAdmin: CollectionAfterChangeHook = async ({
  operation,
  doc,
  req,
}) => {
  const { payload } = req
  const siteSettings = await payload.findGlobal({
    slug: 'site-settings',
  })

  if (operation === OPERATION) {
    req.payload.sendEmail({
      to: siteSettings?.email,
      from: process.env.RESEND_SENDER_EMAIL,
      subject: `Hello Admin 👋`,
      html: newContactForm({
        userName: doc.name,
        email: doc.email,
        subject: doc.subject,
        message: doc.message,
      }),
    })
  }
}
