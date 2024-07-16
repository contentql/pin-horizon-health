'use client'

import { Category, Media, YogaPostsType } from '@payload-types'

import Section from '@/components/common/Section'
import YogaHero from '@/components/marketing/yoga/YogaHero'
import YogaListItem from '@/components/marketing/yoga/YogaListItems'
import { trpc } from '@/trpc/client'

function YogaPosts(data: YogaPostsType) {
  const { data: categoriesData } = trpc.category.getallCategories.useQuery()
  return (
    <>
      <YogaHero
        bgUrl='/images/doctors/banner_bg.svg'
        imgUrl={(data?.image as Media)?.url!}
        title={data?.title}
        subTitle={data?.sub_title}
      />
      <Section topMd={65} bottomMd={200} bottomLg={150} bottomXl={110}>
        <YogaListItem categoriesData={categoriesData as Category[]} />
      </Section>
    </>
  )
}

export default YogaPosts
