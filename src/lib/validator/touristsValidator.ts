import { z } from 'zod'

// Define Zod schema for the contact form
export const TouristsFormValidator = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.union([z.literal(''), z.string().email('Invalid email address')]),
  date: z.any(),
})

export type TTouristsForm = z.infer<typeof TouristsFormValidator>
