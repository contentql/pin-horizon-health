import { z } from 'zod'

// Define Zod schema for the appointment form
export const AppointmentValidator = z.object({
  name: z.string().min(1, 'Name is required'),
  phoneNumber: z.string().min(10, 'Please enter a valid phone number'),
  medicalRecordNumber: z.string().min(1, 'Medical Record Number is required'),
  preferredDateAndTime: z.any(),
  gender: z.any(),
  reasonForVisit: z.any(),
  department: z.any(), // Pass the array of allowed values directly
})

export type TAppointmentValidator = z.infer<typeof AppointmentValidator>
