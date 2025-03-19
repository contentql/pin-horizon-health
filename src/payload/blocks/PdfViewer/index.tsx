'use client'

import { Media, PdfType } from '@payload-types'

const Pdf = (pdfData: PdfType) => {
  console.log('pdf', pdfData)
  return (
    <>
      <div className='container mt-28 pb-20'>
        <div className='mx-auto flex flex-col items-center justify-center text-center'>
          <h2 className='max-w-3xl'>{pdfData?.title}</h2>
          <p className='max-w-4xl'>{pdfData?.description}</p>
        </div>

        {(pdfData?.pdf as Media)?.url ? (
          <iframe
            src={(pdfData?.pdf as Media)?.url!}
            width='100%'
            height={'640'}
            className='mt-8 rounded-md'
          />
        ) : null}
      </div>
    </>
  )
}

export default Pdf
