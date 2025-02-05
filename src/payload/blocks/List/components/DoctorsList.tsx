'use client'

import { Department } from '@payload-types'

import Section from '@/components/common/Section'
import DoctorListItem from '@/components/marketing/doctor/DoctorsListItems'
import { trpc } from '@/trpc/client'

const DoctorsList = () => {
  const { data: departmentDetails } =
    trpc.department.getallDepartments.useQuery()
  return (
    <Section topMd={65} bottomMd={200} bottomLg={150} bottomXl={110}>
      <DoctorListItem departmentDetails={departmentDetails as Department[]} />
    </Section>
  )
}

export default DoctorsList
