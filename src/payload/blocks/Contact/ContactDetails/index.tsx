import { ContactDetailsType } from '@payload-types'

import Section from '@/components/common/Section'
import ContactInfoSection from '@/components/marketing/ContactForm/ContactInfoSection'

const ContactDetails = (data: ContactDetailsType) => {
  return (
    <Section
      topMd={200}
      topLg={150}
      topXl={100}
      bottomMd={200}
      bottomLg={150}
      bottomXl={110}>
      <ContactInfoSection contactDetails={data} />
    </Section>
  )
}

export default ContactDetails
