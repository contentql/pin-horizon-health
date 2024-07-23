'use client'

import Spacing from '../home/Spacing'
import { Department, Doctor } from '@payload-types'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

import AllDoctorsSkelton from '@/components/skeltons/AllDoctorsSkelton'
import { trpc } from '@/trpc/client'

import DoctorItem from './DoctorItem'

export default function DoctorListItem({
  departmentDetails,
}: {
  departmentDetails: Department[]
}) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const [view, setView] = useState('grid')
  const [active, setActive] = useState(
    searchParams?.get('department') ? searchParams?.get('department') : 'all',
  )
  const [filteredData, setFilteredData] = useState(
    searchParams.get('department') ? searchParams?.get('department') : 'all',
  )

  const { data: doctorsData, isPending: isDoctorsPending } =
    trpc.doctor.getDoctorsByDepartment.useQuery({
      slug: filteredData!,
    })
  // Extracting unique categories from teamData
  // const uniqueCategories = [...new Set(data.map(doctor => doctor.category))]
  const handleFilter = (department: string) => {
    const search = new URLSearchParams(searchParams)
    search.set('department', department)
    router.push(`${pathname}?${search.toString()}#doctors`)
    setActive(department)
    setFilteredData(department)
  }

  return (
    <div className='container'>
      <div className='cs_doctors_heading' id='doctors'>
        <div className='cs_isotop_filter cs_style1'>
          <p className='mb-0'>Sort by</p>
          <ul className='cs_mp0'>
            <li className={active === 'all' ? 'active' : ''}>
              <span onClick={() => handleFilter('all')}>All</span>
            </li>
            {departmentDetails?.map(category => (
              <li
                className={active === category?.slug ? 'active' : ''}
                key={category?.id}>
                <span onClick={() => handleFilter(category?.slug!)}>
                  {category?.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className='cs_view_box'>
          <span>Showing {doctorsData?.length} items</span>
          <div className='cs_view_box_in'>
            <button
              type='button'
              className={`cs_grid_view ${view === 'grid' ? 'active' : ''}`}
              onClick={() => setView('grid')}>
              <svg
                width={25}
                height={25}
                viewBox='0 0 25 25'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M0 11.8571H11.8571V0H0V11.8571ZM1.5625 1.5625H10.2948V10.2948H1.5625V1.5625ZM13.1429 0V11.8571H25V0H13.1429ZM23.4375 10.2948H14.7052V1.5625H23.4375V10.2948ZM0 25H11.8571V13.1429H0V25ZM1.5625 14.7052H10.2948V23.4375H1.5625V14.7052ZM13.1429 25H25V13.1429H13.1429V25ZM14.7052 14.7052H23.4375V23.4375H14.7052V14.7052Z'
                  fill='currentColor'
                />
              </svg>
            </button>
            <button
              type='button'
              className={`cs_list_view ${view === 'list' ? 'active' : ''}`}
              onClick={() => setView('list')}>
              <svg
                width={25}
                height={25}
                viewBox='0 0 25 25'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M0 11.8571H12.2396V0H0V11.8571ZM1.6129 1.5625H10.6267V10.2946H1.6129V1.5625ZM0 25H12.2396V13.1429H0V25ZM1.6129 14.7052H10.6267V23.4375H1.6129V14.7052ZM25 0.85022V2.41272H14.3731V0.85022H25ZM14.3731 9.44458H25V11.0071H14.3731V9.44458ZM14.3731 5.1475H25V6.71H14.3731V5.1475ZM14.3731 13.9929H25V15.5554H14.3731V13.9929ZM14.3731 22.5873H25V24.1498H14.3731V22.5873ZM14.3731 18.2902H25V19.8527H14.3731V18.2902Z'
                  fill='currentColor'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <Spacing md='65' />
      <div className={`cs_team_grid cs_${view}_view_wrap`}>
        {isDoctorsPending
          ? [0, 1, 2].map((_, index) => <AllDoctorsSkelton key={index} />)
          : doctorsData?.map((doctor, index) => (
              <DoctorItem doctor={doctor as Doctor} key={index} />
            ))}
      </div>
      <Spacing md='90' />
      {/* <Pagination /> */}
    </div>
  )
}
