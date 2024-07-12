import { AboutStatisticsType } from '@payload-types'

import FunFact from '@/components/marketing/about/FunFact'

export default function AboutStatistics(data: AboutStatisticsType) {
  return (
    <div className='container'>
      <div
        className='cs_funfact_1_wrap cs_radius_30 cs_bg_filed'
        style={{ backgroundImage: `url(/images/about/fun_fact_bg.jpeg)` }}>
        {data?.statistics?.map((statistic, index) => (
          <FunFact key={index} statistic={statistic} />
        ))}
      </div>
    </div>
  )
}
