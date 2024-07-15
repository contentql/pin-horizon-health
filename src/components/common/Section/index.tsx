import React from 'react'

import Spacing from '@/components/marketing/home/Spacing'

export default function Section({
  topMd = '_',
  topLg = '_',
  topXl = '_',
  bottomMd = '_',
  bottomLg = '_',
  bottomXl = '_',
  children,
  ...props
}: {
  topMd?: string | number
  topLg?: string | number
  topXl?: string | number
  bottomMd?: string | number
  bottomLg?: string | number
  bottomXl?: string | number
  children?: React.ReactNode
}) {
  return (
    <section {...props} className='cs_footer_margin_0'>
      <Spacing md={topMd} lg={topLg} xl={topXl} />
      {children}
      <Spacing md={bottomMd} lg={bottomLg} xl={bottomXl} />
    </section>
  )
}
