import RichText from '../blog/RichText'
import { Tour } from '@payload-types'
import { BsTelephone } from 'react-icons/bs'
import { FaRegClock } from 'react-icons/fa'
import { GoPeople } from 'react-icons/go'
import { IoLocationOutline, IoPricetagsOutline } from 'react-icons/io5'
import { MdOutlineStar } from 'react-icons/md'

import List2 from './List'

const TourDetails = ({ tourDetails }: { tourDetails: Tour }) => {
  const handleFocus = (event: any) => {
    event.target.type = 'date'
  }

  const handleBlur = (event: any) => {
    event.target.type = 'text'
  }
  return (
    <div className='container mt-20'>
      <div className='flex flex-col justify-between sm:w-full md:flex-row'>
        <div className='space-y-8 divide-y-2'>
          <div>
            <h2 className='text-4xl font-bold text-black'>
              {tourDetails?.title}
            </h2>
            <div className='mt-6 flex gap-10'>
              <div className='text-md inline-flex items-center gap-x-2'>
                <MdOutlineStar color='#FFC300' size={24} />
                <div className='text-lg font-bold text-black'>3.5</div>
              </div>
              <div className='text-md inline-flex items-center gap-x-2'>
                <IoLocationOutline color='black' size={24} />
                <div className='text-lg font-bold text-black'>
                  {tourDetails?.location}
                </div>
              </div>
              <div className='text-md inline-flex items-center gap-x-2'>
                <GoPeople color='black' size={24} />
                <div className=''>
                  Tour guide by
                  <span className='pl-1 text-lg font-bold text-black'>
                    {tourDetails?.guide_name}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className='mb-4 mt-10 text-2xl font-semibold '>
              Tour Overview
            </h2>
            <div className='grid grid-cols-1 gap-y-6 md:grid-cols-2'>
              <div className='inline-flex gap-x-2'>
                <IoPricetagsOutline
                  size={24}
                  className='font-bold text-black'
                />
                <div>
                  Price
                  <p className='text-lg  text-zinc-800'>
                    ${tourDetails?.price}
                  </p>
                </div>
              </div>
              <div className='inline-flex gap-x-2'>
                <GoPeople size={24} className='font-bold text-black' />
                <div>
                  Contact Name
                  <p className='text-lg  text-zinc-800'>
                    {tourDetails?.guide_name}
                  </p>
                </div>
              </div>
              <div className='inline-flex gap-x-2'>
                <IoLocationOutline size={24} className='font-bold text-black' />
                <div>
                  Location
                  <p className='text-lg  text-zinc-800'>
                    {tourDetails?.location}
                  </p>
                </div>
              </div>

              <div className='inline-flex gap-x-2'>
                <BsTelephone size={24} className='font-bold text-black' />
                <div>
                  Contact Phone
                  <p className='text-lg  text-zinc-800'>
                    {tourDetails?.guide_phone}
                  </p>
                </div>
              </div>
              <div className='inline-flex gap-x-2'>
                <FaRegClock size={24} className='font-bold text-black' />
                <div>
                  Duration
                  <p className='text-lg  text-zinc-800'>
                    {tourDetails?.duration}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className='mb-4 mt-16 text-2xl font-semibold '>
              Tour Highlights
            </h2>
            <List2
              heading='Tour Highlights'
              iconUrl='/images/icons/award2.svg'
              data={tourDetails?.highlights}
            />
            <h2 className='mb-4 mt-16 text-2xl font-semibold'>Services</h2>
            <List2
              heading='Tour Highlights'
              iconUrl='/images/icons/award2.svg'
              data={tourDetails?.services}
            />
            <h2 className='mb-4 mt-16 text-2xl font-semibold'>Tour Program</h2>
            <RichText
              content={tourDetails?.description!}
              locale={''}
              blockIndex={0}
            />
          </div>
        </div>
        <div>
          <div className='w-full rounded-lg bg-white  p-4 shadow-md dark:bg-gray-800 sm:p-6 md:p-8 lg:w-[400px]'>
            <form className='space-y-6' action='#'>
              <h5 className='text-xl font-medium text-gray-900 '>
                {tourDetails?.price}/ tour
              </h5>
              <div>
                <input
                  type='text'
                  name='date'
                  id='date'
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  placeholder='MM/DD//YY'
                  className='placeholder-font-bold placeholder-text-lg tex-xl w-full rounded-lg border border-gray-300 bg-gray-50 p-6 text-gray-900 placeholder-gray-500 placeholder-opacity-75 focus:border-blue-500 focus:ring-blue-500 '
                  required
                />
              </div>
              <div>
                <input
                  type='text'
                  name='text'
                  id='text'
                  placeholder='Guests'
                  className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-6 text-xl  text-gray-900 focus:border-blue-500 focus:ring-blue-500 '
                  required
                />
              </div>

              <button
                type='submit'
                className='w-full rounded-lg bg-zinc-800 px-5 py-2.5 text-center text-lg font-medium text-white'>
                Reserve
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TourDetails
