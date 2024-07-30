import { CollectionAfterChangeHook } from 'payload/types'

import { touristContactForm } from '@/email-templates/touristDetailsEmail'

const OPERATION = 'create'
const SUBJECT = 'New Tourist details submission'

export const TouristDetailsEmailToAdmin: CollectionAfterChangeHook = async ({
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
      subject: `Hello Admin, New Tourist Details`,
      html: touristContactForm({
        userName: doc.name,
        email: doc.email,
      }),
    })
  }
}
