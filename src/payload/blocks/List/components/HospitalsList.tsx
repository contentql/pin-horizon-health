'use client'

import Section from '@/components/common/Section'
import HospitalListItem from '@/components/marketing/hospital/HospitalListItems'

const HospitalsList = () => {
  return (
    <Section topMd={65} bottomMd={200} bottomLg={150} bottomXl={110}>
      <HospitalListItem />
    </Section>
  )
}

export default HospitalsList
