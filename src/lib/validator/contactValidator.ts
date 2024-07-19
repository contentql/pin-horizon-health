import { isValidPhoneNumber, parsePhoneNumber } from 'libphonenumber-js'
import { z } from 'zod'

// Define Zod schema for the contact form
export const ContactFormValidator = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.union([z.literal(''), z.string().email('Invalid email address')]),
  phoneNumber: z.string().refine(
    phoneNumber => {
      if (phoneNumber.length < 6) return
      phoneNumber = parsePhoneNumber('+' + phoneNumber).formatInternational()
      return isValidPhoneNumber(phoneNumber)
    },
    {
      message: 'Invalid Phone Number',
    },
  ),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(1, 'Message is required'),
})

export type TContactForm = z.infer<typeof ContactFormValidator>
