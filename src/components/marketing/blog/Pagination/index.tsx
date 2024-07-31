'use client'

import Image from 'next/image'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export default function Pagination({ meta, setPage, page }: any) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const handlePageChange = (newPage: number) => {
    const search = new URLSearchParams(searchParams)
    search.set('page', newPage.toString())
    pathname === '/doctors'
      ? router.push(`${pathname}?${search.toString()}#doctors`)
      : router.push(`${pathname}?${search.toString()}#pagination`)

    setPage(newPage)
  }

  return (
    <ul className='cs_pagination_box'>
      {/* Previous page arrow */}
      <li>
        <button
          className='cs_pagination_arrow cs_center'
          onClick={() => meta?.hasPrevPage && handlePageChange(page - 1)}
          disabled={!meta?.hasPrevPage}>
          <Image
            src='/images/icons/left_arrow_blue.svg'
            alt='Icon'
            height={11}
            width={16}
          />
        </button>
      </li>

      {/* Page numbers */}
      {Array.from({ length: meta?.totalPages }, (_, i) => i + 1).map(p => (
        <li key={p}>
          <button
            onClick={() => handlePageChange(p)}
            className={`cs_pagination_item cs_center ${meta?.currentPage === p ? 'active' : ''}`}>
            {p}
          </button>
        </li>
      ))}

      {/* Next page arrow */}
      <li>
        <button
          className='cs_pagination_arrow cs_center'
          onClick={() => meta?.hasNextPage && handlePageChange(page + 1)}
          disabled={!meta?.hasNextPage}>
          <Image
            src='/images/icons/right_arrow_blue.svg'
            alt='Icon'
            height={11}
            width={16}
          />
        </button>
      </li>
    </ul>
  )
}
