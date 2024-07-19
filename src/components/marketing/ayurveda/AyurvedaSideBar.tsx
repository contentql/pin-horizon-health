'use client'

import { Ayurveda } from '@payload-types'

import { trpc } from '@/trpc/client'

import AyurvedaSideMenuWidget from './AyurvedaSideMenuWidget'

export default function AyurvedaSidebar() {
  const { data: ayurvedaData } = trpc.ayurveda.getAllAyurveda.useQuery()
  return (
    <div className='cs_sidebar'>
      <div className='cs_sidebar_item widget_categories'>
        <AyurvedaSideMenuWidget
          title='Recent Ayurvedas'
          data={ayurvedaData as Ayurveda[]}
        />
      </div>
    </div>
  )
}
