import { Department } from '@payload-types'
import parser from 'html-react-parser'
import Image from 'next/image'
import Link from 'next/link'

export default function DepartmentsList({
  departments,
}: {
  departments: Department[]
}) {
  return (
    <div className='cs_mt_minus_110 container'>
      <div className='row'>
        {departments?.map((department, index) => (
          <div className='col-xl-4 col-md-6' key={index}>
            <div className='cs_iconbox cs_style_7'>
              {/* <div className='cs_iconbox_icon'>
                <Image
                  src='/images/departments/icon_1.svg'
                  alt='Icon'
                  height={0}
                  width={0}
                  style={{ width: '66px', height: 'auto' }}
                />
              </div> */}
              <h2 className='cs_iconbox_title cs_fs_32'>
                {parser(department?.title)}
              </h2>
              <p className='cs_iconbox_subtitle clamped-text-8 m-0'>
                {parser(department?.description)}
              </p>
              <Link href='#' className='cs_iconbox_btn cs_center'>
                <Image
                  src='/images/icons/arrow_white.svg'
                  alt='Icon'
                  height={0}
                  width={0}
                  style={{ width: '35px', height: 'auto' }}
                />
                <Image
                  src='/images/icons/arrow_white.svg'
                  alt='Icon'
                  height={0}
                  width={0}
                  style={{ width: '35px', height: 'auto' }}
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
