// import { NextRequest, NextResponse } from 'next/server'

// import { serverClient } from '@/trpc/serverClient'

// export async function POST(req: NextRequest) {
//   try {
//     const eventData = await req.json()

//     if (eventData.triggerEvent === 'BOOKING_CREATED') {
//       await serverClient.appointment.postAppointmentData({
//         title: eventData.payload.title,
//         attendeeEmail: eventData.payload.attendees.at(0).email,
//         attendeeName: eventData.payload.attendees.at(0).name,
//         uid: eventData.payload.uid,
//         bookingStatus: eventData.payload.status,
//         description: eventData.payload.description,
//         startDate: eventData.payload.startTime,
//         endDate: eventData.payload.endTime,
//         notes: eventData.payload.additionalNotes,
//         doctorEmail: eventData.payload.organizer.email,
//         metadata: eventData,
//         videoUrl: eventData.payload.metadata.videoCallUrl,
//       })
//     } else if (eventData.triggerEvent === 'BOOKING_CANCELLED') {
//       await serverClient.appointment.cancelAppointment({
//         status: eventData.payload.status,
//         uid: eventData.payload.uid,
//       })
//     } else if (eventData.triggerEvent === 'BOOKING_RESCHEDULED') {
//       await serverClient.appointment.rescheduleAppointment({
//         uid: eventData.payload.uid,
//         rescheduleUid: eventData.payload.rescheduleUid,
//         rescheduleStartTime: eventData.payload.startTime,
//         rescheduleEndTime: eventData.payload.endTime,
//         status: eventData.payload.status,
//         videoUrl: eventData.payload.metadata.videoCallUrl,
//         metaData: eventData,
//       })
//     }

//     console.log('meeting data:', eventData)
//     return NextResponse.json({ received: true })
//   } catch (error: any) {
//     console.error('Error handling event data:', error)
//     return NextResponse.json(
//       { received: false, error: error.message },
//       { status: 500 },
//     )
//   }
// }
