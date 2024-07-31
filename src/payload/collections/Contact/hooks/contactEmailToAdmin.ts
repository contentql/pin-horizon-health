import { CollectionAfterChangeHook } from 'payload'

import { tempContactForm } from '@/email-templates/tempContactEmail'

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
      subject: `Hi Admin, ${doc.subject}`,
      html: tempContactForm({
        userName: doc.name,
        email: doc.email,
        subject: doc.subject,
        message: doc.message,
      }),
    })
  }
}
