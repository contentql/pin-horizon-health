import { z } from 'zod'

// Define Zod schema for the contact form
export const ContactFormValidator = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phoneNumber: z
    .string()
    .regex(/^\d{10}$/, 'Please enter a valid 10-digit phone number'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(1, 'Message is required'),
})

export type TContactForm = z.infer<typeof ContactFormValidator>
