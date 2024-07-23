const AllBlogsSkelton = () => {
  const skeletons = Array.from({ length: 3 })
  return (
    <>
      {skeletons?.map((ele, index) => (
        <div className='col-xl-4 col-md-6 h-[456px]' key={index}>
          {' '}
          <div className='cs_post h-full animate-pulse rounded-[1.375rem] shadow-[0px_4px_21px_1px_rgba(48,123,196,0.1)]'>
            <div className='mb-4 h-64  rounded-[1.375rem] bg-gray-300'></div>
            <div className='ml-7 space-y-4'>
              <div className='space-y-3'>
                <div className='h-4 w-1/3 rounded bg-gray-300'></div>
                <div className='h-5 w-2/3 rounded bg-gray-300'></div>
              </div>
              <div className='h-4 w-1/4 rounded bg-gray-300'></div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default AllBlogsSkelton
