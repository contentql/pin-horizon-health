import { router } from '@/trpc'
import { authorRouter } from '@/trpc/routers/author'
import { blogRouter } from '@/trpc/routers/blog'
import { pageRouter } from '@/trpc/routers/page'
import { seedRouter } from '@/trpc/routers/seed'
import { siteSettingsRouter } from '@/trpc/routers/site-settings'
import { tagRouter } from '@/trpc/routers/tag'

import { appointmentRouter } from './appointment'
import { contactRouter } from './contact'
import { departmentRouter } from './department'
import { doctorRouter } from './doctor'
import { hospitalRouter } from './hospital'
import { toursRouter } from './tours'

import { yogaRouter } from './yoga'


export const appRouter = router({
  page: pageRouter,
  blog: blogRouter,
  siteSettings: siteSettingsRouter,
  tag: tagRouter,
  author: authorRouter,
  doctor: doctorRouter,
  seed: seedRouter,
  appointment: appointmentRouter,
  contact: contactRouter,
  department: departmentRouter,
  tour: toursRouter,

  yoga: yogaRouter,
  hospital: hospitalRouter,
  ayurveda: ayurvedaRouter,

})

export type AppRouter = typeof appRouter
