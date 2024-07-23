import { z } from 'zod'

// Define Zod schema for the appointment form
export const AppointmentValidator = z.object({
  // name: z.string().min(1, 'Name is required'),
  // phoneNumber: z.string().min(10, 'Please enter a valid phone number'),
  // medicalRecordNumber: z.string().min(1, 'Medical Record Number is required'),
  // preferredDateAndTime: z.any(),
  // gender: z.any(),
  // reasonForVisit: z.any(),
  // department: z.any(), // Pass the array of allowed values directly
  title: z.string(),
  uid: z.string(),
  description: z.string(),
  bookingStatus: z.string(),
  notes: z.string(),
  startDate: z.any(),
  endDate: z.string(),
  attendeeName: z.string(),
  attendeeEmail: z.string().email(),
  doctorEmail: z.string(),
  metadata: z.any(),
  videoUrl: z.string(),
})

export type TAppointmentValidator = z.infer<typeof AppointmentValidator>
