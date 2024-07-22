import { Icon } from '@iconify/react'
import { SiteSetting } from '@payload-types'

export default function ContactInfoWidget({
  contactInfo,
}: {
  contactInfo: Required<SiteSetting>['footer']['personal_information']
}) {
  return (
    <ul className='cs_contact_widget'>
      {contactInfo?.map((contact, index) => (
        <li key={index}>
          <i className='cs_accent_bg'>
            <Icon icon={contact?.icon} />
          </i>
          {contact?.title}
        </li>
      ))}
    </ul>
  )
}
