import { Department, DepartmentHeroType, Media } from '@payload-types'
import parse from 'html-react-parser'
import Image from 'next/image'

import Section from '@/components/common/Section'
import DepartmentsList from '@/components/marketing/departments/DepartmentsList'
import { trpc } from '@/trpc/client'

export default function DepartmentHero(heroData: DepartmentHeroType) {
  const { data: departments } = trpc.department.getallDepartments.useQuery()
  return (
    <>
      <section
        className='cs_banner cs_style_5 cs_bg_filed'
        style={{ backgroundImage: `url(${(heroData?.bgUrl as Media)?.url!})` }}>
        <div className='cs_banner_img'>
          <Image
            src={(heroData?.imgUrl as Media)?.url!}
            alt='Banner'
            width={1000}
            height={1000}
          />
        </div>
        <div className='container'>
          <div className='cs_banner_text'>
            <h2 className='cs_banner_title cs_fs_72'>
              {parse(heroData?.title)}
            </h2>
            <p className='cs_banner_subtitle cs_fs_20 cs_heading_color mb-0'>
              {parse(heroData?.sub_title)}
            </p>
          </div>
        </div>
      </section>
      <Section bottomMd={140} bottomLg={100} bottomXl={60}>
        <DepartmentsList departments={departments as Department[]} />
      </Section>
    </>
  )
}
