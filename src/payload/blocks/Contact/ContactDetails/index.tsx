import { ContactDetailsType } from '@payload-types'

import Section from '@/components/common/Section'
import ContactInfoSection from '@/components/marketing/ContactForm/ContactInfoSection'

const ContactDetails = (data: ContactDetailsType) => {
  return (
    <Section bottomMd={80}>
      <ContactInfoSection contactDetails={data} />
    </Section>
  )
}

export default ContactDetails
