'use client'

import { Media, Yoga, YogaPostsType } from '@payload-types'

import Section from '@/components/common/Section'
import YogaHero from '@/components/marketing/yoga/YogaHero'
import YogaItem from '@/components/marketing/yoga/YogaItem'
import { trpc } from '@/trpc/client'

function YogaPosts(data: YogaPostsType) {
  const { data: yogaData } = trpc.yoga.getallYoga.useQuery()
  return (
    <>
      <YogaHero
        bgUrl='/images/doctors/banner_bg.svg'
        imgUrl={(data?.image as Media)?.url || ''}
        title={data?.title}
        subTitle={data?.sub_title}
      />
      <div className='container'>
        <Section topMd={65} bottomMd={200} bottomLg={150} bottomXl={110}>
          <div className={`cs_team_grid cs_${'grid'}_view_wrap`}>
            {yogaData?.map((yoga, index) => (
              <YogaItem yoga={yoga as Yoga} key={index} />
            ))}
          </div>
        </Section>
      </div>
    </>
  )
}

export default YogaPosts
