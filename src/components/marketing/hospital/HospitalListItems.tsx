'use client'

import Spacing from '../home/Spacing'
import { Hospital } from '@payload-types'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

import AllHospitalsSkelton from '@/components/skeltons/AllHospitalsSkelton'
import { trpc } from '@/trpc/client'

import HospitalItem from './HospitalItem'

export default function HospitalListItem() {
  const { data: hospitalDetails, isPending: isAllHospitalsPending } =
    trpc.hospital.getallHospitals.useQuery()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const [view, setView] = useState('grid')
  const [active, setActive] = useState(
    searchParams?.get('country') ? searchParams?.get('country') : 'all',
  )
  const [filteredData, setFilteredData] = useState(
    searchParams.get('country') ? searchParams?.get('country') : 'all',
  )

  const { data: hospitalData, isPending: isHospitalByCountryPending } =
    trpc.hospital.getHospitalByCountry.useQuery({
      slug: filteredData!,
    })

  const handleFilter = (country: string) => {
    const search = new URLSearchParams(searchParams)
    search.set('country', country)
    router.push(`${pathname}?${search.toString()}#hospitals`)
    setActive(country)
    setFilteredData(country)
  }

  const { data: countries } =
    trpc.hospital.getAllCountriesOfHospitals.useQuery()

  const uniqueCountries = Array.from(
    new Set(countries?.map(country => country?.country)),
  )

  return (
    <div className='container'>
      <div className='cs_doctors_heading' id='hospitals'>
        <div className='cs_isotop_filter cs_style1'>
          <p className='mb-0'>Sort by</p>
          <ul className='cs_mp0'>
            <li className={active === 'all' ? 'active' : ''}>
              <span onClick={() => handleFilter('all')}>All</span>
            </li>
            {uniqueCountries?.map((country, index) => (
              <li className={active === country ? 'active' : ''} key={index}>
                <span onClick={() => handleFilter(country as string)}>
                  {country as string}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className='cs_view_box'>
          <span>Showing {hospitalData?.length} items</span>
        </div>
      </div>
      <Spacing md='65' />
      <div className={`cs_team_grid cs_${view}_view_wrap`}>
        {isHospitalByCountryPending || isAllHospitalsPending
          ? [0, 1, 2].map((_, index) => <AllHospitalsSkelton key={index} />)
          : hospitalData?.map((hospital, index) => (
              //@ts-ignore
              <HospitalItem hospital={hospital as Hospital} key={index} />
            ))}
      </div>
      <Spacing md='90' />
      {/* <Pagination /> */}
    </div>
  )
}
