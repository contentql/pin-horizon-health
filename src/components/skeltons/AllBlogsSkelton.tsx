const AllBlogsSkelton = () => {
  const skeletons = Array.from({ length: 3 })
  return (
    <>
      {skeletons?.map((ele, index) => (
        <div className='col-xl-4 col-md-6' key={index}>
          {' '}
          <div className='cs_post animate-pulse'>
            <div className='mb-4 h-64  rounded-[1.375rem] bg-gray-300'></div>
            <div className='space-y-4'>
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
