import { Icon } from '@iconify/react'
import { SiteSetting } from '@payload-types'
import Link from 'next/link'

export default function SocialWidget({
  socialMedia,
}: {
  socialMedia: Required<SiteSetting>['footer']['social_media']
}) {
  return (
    <div className='cs_social_links_wrap'>
      <h2>Follow Us</h2>
      <div className='cs_social_links'>
        {socialMedia?.map((item, index) => (
          <Link key={index} href={item?.social_media_url}>
            <Icon icon={item?.icon} />
          </Link>
        ))}
      </div>
    </div>
  )
}
