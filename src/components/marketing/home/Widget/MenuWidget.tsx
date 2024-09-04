import { Page, SiteSetting } from '@payload-types'
import Link from 'next/link'
import React from 'react'

import DropDown from '@/payload/blocks/Header/DropDown'

type menuDataOneType = {
  title: string
  href: string
}[]
export default function MenuWidget({
  data,
}: {
  data: Required<SiteSetting>['footer']['links']
}) {
  return (
    <ul className='cs_menu_widget cs_mp0'>
      {data?.map((footerLink, index) => (
        <React.Fragment key={index}>
          {footerLink?.group ? (
            <li className='menu-item-has-children'>
              <Link href=''>Services</Link>
              <DropDown>
                <ul>
                  {footerLink?.menuLinkGroup?.groupLinks?.map(
                    (link, subIndex) =>
                      link?.externalLink ? (
                        <li key={subIndex}>
                          <Link
                            href={link?.link!}
                            target={`${link?.newPage ? '_blank' : '_self'}`}>
                            {link.label}
                          </Link>
                        </li>
                      ) : (
                        <li key={subIndex}>
                          <Link
                            href={(link?.page?.value as Page)?.slug!}
                            target={`${link?.newPage ? '_blank' : '_self'}`}>
                            {(link?.page?.value as Page)?.title}
                          </Link>
                        </li>
                      ),
                  )}
                </ul>
              </DropDown>
            </li>
          ) : footerLink?.menuLink?.externalLink ? (
            <li>
              <Link
                href={footerLink?.menuLink?.link!}
                target={`${footerLink?.menuLink?.newPage ? '_blank' : '_self'}`}>
                {footerLink?.menuLink?.label!}
              </Link>
            </li>
          ) : (
            <li>
              <Link
                target={`${footerLink?.menuLink?.newPage ? '_blank' : '_self'}`}
                href={`/${(footerLink?.menuLink?.page?.value as Page)?.slug!}`}>
                {(footerLink?.menuLink?.page?.value as Page)?.title}
              </Link>
            </li>
          )}
        </React.Fragment>
      ))}
    </ul>
  )
}
