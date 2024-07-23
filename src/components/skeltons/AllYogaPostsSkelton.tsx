const AllYogaPostsSkelton = () => {
  const skeletons = Array.from({ length: 2 })
  return (
    <>
      <div className='h-[573px] w-full'>
        {' '}
        <div className='cs_post h-full  animate-pulse rounded-[1.375rem] text-center shadow-[0px_4px_21px_1px_rgba(48,123,196,0.1)]'>
          <div className='mb-4 h-[415px] w-full  rounded-[1.375rem] bg-gray-300'></div>
          <div className=' space-y-4'>
            <div className='space-y-3'>
              <div className='mx-auto h-4 w-1/3 rounded bg-gray-300'></div>
            </div>
            <div className='mx-auto h-5 w-4/5 rounded bg-gray-300'></div>
            <div className='mx-auto h-4 w-2/3 rounded bg-gray-300'></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AllYogaPostsSkelton
