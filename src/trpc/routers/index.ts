import { router } from '@/trpc'
import { blogRouter } from '@/trpc/routers/blog'
import { pageRouter } from '@/trpc/routers/page'
import { siteSettingsRouter } from '@/trpc/routers/site-settings'
import { tagRouter } from '@/trpc/routers/tag'

import { appointmentRouter } from './appointment'
import { contactRouter } from './contact'
import { departmentRouter } from './department'
import { doctorRouter } from './doctor'
import { hospitalRouter } from './hospital'
import { touristsRouter } from './tourists'
import { toursRouter } from './tours'
import { messageRouter } from './whatsapp'

export const appRouter = router({
  page: pageRouter,
  blog: blogRouter,
  siteSettings: siteSettingsRouter,
  tag: tagRouter,
  doctor: doctorRouter,
  appointment: appointmentRouter,
  contact: contactRouter,
  department: departmentRouter,
  tour: toursRouter,
  hospital: hospitalRouter,
  message: messageRouter,
  tourist: touristsRouter,
})

export type AppRouter = typeof appRouter
