'use client'

import { Blog, Media, YogaPostsType } from '@payload-types'

import Section from '@/components/common/Section'
import YogaHero from '@/components/marketing/yoga/YogaHero'
import YogaItem from '@/components/marketing/yoga/YogaItem'
import AllYogaPostsSkelton from '@/components/skeltons/AllYogaPostsSkelton'
import { trpc } from '@/trpc/client'

function YogaPosts(data: YogaPostsType) {
  const { data: yogaData, isPending: isYogaPending } =
    trpc.blog.getAllBlogsByTag.useQuery({
      slug: 'yoga',
    })
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
            {isYogaPending
              ? [1, 2].map((_, index) => <AllYogaPostsSkelton key={index} />)
              : yogaData?.map((yoga, index) => (
                  <YogaItem yoga={yoga as Blog} key={index} />
                ))}
          </div>
        </Section>
      </div>
    </>
  )
}

export default YogaPosts
