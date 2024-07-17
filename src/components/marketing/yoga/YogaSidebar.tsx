'use client'

import { Yoga } from '@payload-types'

import { trpc } from '@/trpc/client'

import YogaSideMenuWidget from './YogaSideMenuWidget'

export default function YogaSidebar() {
  const { data: yogaData } = trpc.yoga.getallYoga.useQuery()
  return (
    <div className='cs_sidebar'>
      <div className='cs_sidebar_item widget_categories'>
        <YogaSideMenuWidget title='Recent Yogas' data={yogaData as Yoga[]} />
      </div>
    </div>
  )
}
