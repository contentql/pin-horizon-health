import { isValidPhoneNumber, parsePhoneNumber } from 'libphonenumber-js'
import { z } from 'zod'

// Define Zod schema for the appointment form
export const AppointmentValidator = z.object({
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
  medicalRecordNumber: z.string()?.optional(),
  reasonForVisit: z.string().min(1, 'Reason is required'),
  // title: z.string(),
  // uid: z.string(),
  // description: z.string(),
  // bookingStatus: z.string(),
  // notes: z.string(),
  // startDate: z.any(),
  // endDate: z.string(),
  // attendeeName: z.string(),
  // attendeeEmail: z.string().email(),
  // doctorEmail: z.string(),
  // metadata: z.any(),
  // videoUrl: z.string(),
})

export type TAppointmentValidator = z.infer<typeof AppointmentValidator>
