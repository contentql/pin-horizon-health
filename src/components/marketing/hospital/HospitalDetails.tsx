import { Hospital, Media } from '@payload-types'
import Image from 'next/image'
import Link from 'next/link'
import { BsTelephone } from 'react-icons/bs'
import { GoPeople } from 'react-icons/go'
import { IoLocationOutline } from 'react-icons/io5'
import { MdOutlineStar } from 'react-icons/md'

import { trpc } from '@/trpc/client'

import List2 from './List'

const HospitalDetails = ({
  hospitalDetails,
}: {
  hospitalDetails: Hospital
}) => {
  const handleFocus = (event: any) => {
    event.target.type = 'date'
  }

  const handleBlur = (event: any) => {
    event.target.type = 'text'
  }
  const { data: hospitalsByCountry } =
    trpc.hospital.getHospitalByCountry.useQuery({
      slug: hospitalDetails?.country,
    })

  return (
    <div className='container mt-20'>
      <div className='flex flex-col justify-between lg:flex-row'>
        <div className='w-full space-y-8 divide-y-2 lg:w-[60%]'>
          <div>
            <h2 className='line-clamp-1 text-4xl font-bold text-black'>
              {hospitalDetails?.title}
            </h2>
            <div className='mt-6 flex gap-10'>
              <div className='text-md inline-flex items-center gap-x-2'>
                <MdOutlineStar color='#FFC300' size={24} />
                <div className='text-lg font-bold text-black'>3.5</div>
              </div>
              <div className='text-md inline-flex items-center gap-x-2'>
                <IoLocationOutline color='black' size={24} />
                <div className='text-lg font-bold text-black'>
                  {hospitalDetails?.country}
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className='mb-4 mt-10 text-2xl font-semibold '>
              Hospital Contact Details
            </h2>
            <div className='grid grid-cols-1 gap-y-6 md:grid-cols-2'>
              {hospitalDetails?.receptionistName && (
                <div className='inline-flex gap-x-2'>
                  <GoPeople size={24} className='font-bold text-black' />
                  <div>
                    Receptionist Name
                    <p className='text-lg  text-zinc-800'>
                      {hospitalDetails?.receptionistName}
                    </p>
                  </div>
                </div>
              )}
              <div className='inline-flex gap-x-2'>
                <IoLocationOutline size={24} className='font-bold text-black' />
                <div>
                  Location
                  <p className='text-lg  text-zinc-800'>
                    {hospitalDetails?.location}
                  </p>
                </div>
              </div>

              <div className='inline-flex gap-x-2'>
                <BsTelephone size={24} className='font-bold text-black' />
                <div>
                  Contact Phone
                  <p className='text-lg  text-zinc-800'>
                    {hospitalDetails?.phone}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className='mb-4 mt-16 text-2xl font-semibold '>
              Hospital Highlights
            </h2>
            <List2
              heading='Highlights'
              iconUrl='/images/icons/award2.svg'
              data={hospitalDetails?.highlights}
            />
            <h2 className='mb-4 mt-16 text-2xl font-semibold'>Services</h2>
            <List2
              heading='Services'
              iconUrl='/images/icons/award2.svg'
              data={hospitalDetails?.services}
            />
            <h2 className='mb-4 mt-16 text-2xl font-semibold'>Achievements</h2>
            <List2
              heading='achievement'
              iconUrl='/images/icons/award2.svg'
              data={hospitalDetails?.achievements}
            />
          </div>
        </div>
        {hospitalsByCountry?.length! > 1 && (
          <div className='sticky top-10 w-full lg:w-[400px]'>
            <div className='mx-auto mt-16 max-w-lg overflow-hidden rounded-md bg-white shadow-md'>
              <div className='bg-gray-100 px-4 py-2'>
                <h2 className='text-xl font-semibold text-gray-800'>
                  Other hospitals in {hospitalDetails?.country}
                </h2>
              </div>
              <ul className='divide-y divide-gray-200'>
                {hospitalsByCountry?.slice(0, 5).map(
                  (hospital, idx) =>
                    hospitalDetails?.slug !== (hospital?.slug as string) && (
                      <li key={idx} className='flex items-center px-6 py-4'>
                        <Image
                          height={48}
                          width={48}
                          className='mr-4 h-12 w-12 rounded-full object-cover'
                          src={
                            (hospital?.gallery?.at(0)?.image as Media)
                              ?.url as string
                          }
                          alt='User avatar'
                        />
                        <div className='flex-1'>
                          <Link
                            href={hospital?.slug as string}
                            className='text-lg font-medium text-gray-800'>
                            {hospital?.title as string}
                          </Link>
                          <p className='line-clamp-1 text-base text-gray-600'>
                            {hospital?.location as string}
                          </p>
                        </div>
                      </li>
                    ),
                )}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default HospitalDetails
