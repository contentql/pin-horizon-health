import { AppointmentContactType } from '@payload-types'

import AppointmentWithContactInfoSection from '@/components/marketing/appointment/AppointmentWithContactInfoSection'
import Section from '@/components/marketing/appointment/BannerSection'

const AppointmentContact = (data: AppointmentContactType) => {
  return (
    <Section
      topMd={200}
      topLg={150}
      topXl={110}
      bottomMd={200}
      bottomLg={150}
      bottomXl={110}>
      <AppointmentWithContactInfoSection contactInfo={data} />
    </Section>
  )
}

export default AppointmentContact
