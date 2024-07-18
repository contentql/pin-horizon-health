import { Ayurveda, AyurvedaPostsType } from '@payload-types'

import Section from '@/components/common/Section'
import AyurvedaItem from '@/components/marketing/ayurveda/AyurvedaItem'
import { trpc } from '@/trpc/client'

const AyurvedaPosts = (data: AyurvedaPostsType) => {
  const { data: ayurvedaData } = trpc.ayurveda.getAllAyurveda.useQuery()
  return (
    <div className='flex items-center justify-center'>
      <div className='w-96 px-4 py-9 2xl:container sm:w-auto md:px-6 md:py-12 lg:px-20 lg:py-16 2xl:mx-auto'>
        <div role='main' className='flex flex-col items-center justify-center'>
          <h1 className='text-center text-4xl font-semibold leading-9'>
            {data?.title}
          </h1>
          <p className='mt-4 w-11/12 text-center text-base leading-normal md:w-10/12 lg:w-1/2'>
            {data?.sub_title}
          </p>
        </div>
        <div className='container'>
          <Section topMd={65} bottomMd={200} bottomLg={150} bottomXl={110}>
            <div className={`cs_team_grid cs_${'grid'}_view_wrap`}>
              {ayurvedaData?.map((ayurveda, index) => (
                <AyurvedaItem ayurveda={ayurveda as Ayurveda} key={index} />
              ))}
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}

export default AyurvedaPosts
