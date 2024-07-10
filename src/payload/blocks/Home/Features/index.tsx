import Feature from '@/components/marketing/home/Feature'
import SectionHeading from '@/components/marketing/home/SectionHeading'
import Spacing from '@/components/marketing/home/Spacing'

export default function Features({ sectionTitle, data }: any) {
  return (
    <>
      <Spacing md={185} lg={140} xl={100} />
      <div className='cs_shape_wrap'>
        <div className='cs_shape_1' />
        <div className='container'>
          <SectionHeading title={sectionTitle} center />
          <Spacing md='72' lg='50' />
          <div className='cs_random_features'>
            {data?.map(({ item, index }: any) => (
              <div className='cs_random_features_col' key={index}>
                <Feature {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Spacing md={185} lg={140} xl={100} />
    </>
  )
}
