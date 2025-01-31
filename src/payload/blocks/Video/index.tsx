'use client'

import { VideoType } from '@payload-types'
import { useState } from 'react'

const Video = (videoData: VideoType) => {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className='container mb-20 mt-28'>
      <div className='mx-auto flex flex-col items-center justify-center text-center'>
        <h2 className='max-w-3xl'>{videoData?.title}</h2>
        <p className='max-w-4xl'>{videoData?.description}</p>
      </div>
      <div style={{ position: 'relative' }}>
        {/* {!isLoaded && <LoadingSkeleton className={loaderClass} />} */}

        <iframe
          src={videoData?.youtubeUrl}
          width={'100%'}
          height={'640'}
          className='mt-8 rounded-md'
          onLoad={() => setIsLoaded(true)}
          allowFullScreen></iframe>
      </div>
    </div>
  )
}

export default Video
