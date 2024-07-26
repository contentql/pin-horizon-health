import { Media, Tour } from '@payload-types'
import 'lightgallery/css/lg-thumbnail.css'
import 'lightgallery/css/lg-zoom.css'
// import styles
import 'lightgallery/css/lightgallery.css'
import lgAutoplay from 'lightgallery/plugins/autoplay'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'
// import plugins if you need
import LightGallery from 'lightgallery/react'
import 'lightgallery/scss/lg-zoom.scss'
// If you want you can use SCSS instead of css
import 'lightgallery/scss/lightgallery.scss'
import Image from 'next/image'
import Link from 'next/link'

export function Gallery({ images }: { images: Tour['gallery'] }) {
  return (
    <div className='container mt-10'>
      <div className='w-full'>
        <LightGallery
          speed={500}
          elementClassNames='grid grid-cols-2 lg:grid-cols-4 gap-8'
          progressBar={true}
          plugins={[lgThumbnail, lgZoom, lgAutoplay]}>
          {images?.map((image, index) => (
            <Link
              key={index}
              href={(image?.image as Media)?.url!}
              className={`${index === 0 ? 'col-span-2 row-span-2' : ''}`}>
              <Image
                alt='img1'
                src={
                  index === 0
                    ? (image?.image as Media)?.sizes?.tour_gallery!.url || ''
                    : (image?.image as Media)?.sizes?.tour_gallery_1!.url || ''
                }
                width={index === 0 ? 797 : 382}
                height={index === 0 ? 797 : 382}
                quality={100}
                className={` h-full w-full rounded-xl brightness-90 transition-all duration-300 hover:scale-105 hover:brightness-100`}
              />
            </Link>
          ))}
        </LightGallery>
      </div>
    </div>
  )
}
