import { router } from '@/trpc'
import { authorRouter } from '@/trpc/routers/author'
import { blogRouter } from '@/trpc/routers/blog'
import { pageRouter } from '@/trpc/routers/page'
import { seedRouter } from '@/trpc/routers/seed'
import { siteSettingsRouter } from '@/trpc/routers/site-settings'
import { tagRouter } from '@/trpc/routers/tag'

import { categoryRouter } from './category'
import { doctorRouter } from './doctor'

export const appRouter = router({
  page: pageRouter,
  blog: blogRouter,
  siteSettings: siteSettingsRouter,
  tag: tagRouter,
  author: authorRouter,
  doctor: doctorRouter,
  category: categoryRouter,
  seed: seedRouter,
})

export type AppRouter = typeof appRouter
