import { Media, Tour } from '@payload-types'
import Image from 'next/image'
import Link from 'next/link'
import { FaRegClock } from 'react-icons/fa'
import { MdOutlineStar } from 'react-icons/md'

function TravelTourList({ tours }: { tours: Tour[] }) {
  return (
    <div className='container grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4 '>
      {tours?.map((tour, index) => (
        <div
          key={index}
          className='transition-all duration-300 hover:-translate-y-2 '>
          <div className='max-w-auto rounded-lg  bg-white shadow-md dark:bg-gray-800'>
            <div className='relative h-64 w-full'>
              <Image
                className='h-full w-full rounded-t-lg object-cover object-center'
                src={(tour?.hero_url as Media)?.sizes?.tour_card?.url!}
                alt=''
                width={320}
                height={256}
              />
              {/* <p className='absolute left-2 top-2 rounded-lg bg-zinc-800 px-2 py-1 text-sm font-semibold text-white'>
                ${tour?.price}
              </p> */}
            </div>
            <div className='p-4'>
              <p className='text-sm text-gray-500'>{tour?.location}</p>
              <Link href={`/travel/${tour?.slug!}`}>
                <h5 className='line-clamp-2 pt-2 text-lg font-bold tracking-tight text-gray-900 hover:underline'>
                  {tour?.title}
                </h5>
              </Link>
            </div>
            <div className='border border-b-[1px] border-dotted border-gray-600'></div>
            <div className='flex justify-between'>
              <div className='inline-flex items-center gap-x-2 p-4 text-sm'>
                <FaRegClock />
                <div>{tour?.duration}</div>
              </div>
              <div className='inline-flex items-center gap-x-2 p-4 text-sm'>
                <MdOutlineStar color='#FFC300' size={24} />
                <div className='text-lg font-bold text-black'>3.5</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TravelTourList
