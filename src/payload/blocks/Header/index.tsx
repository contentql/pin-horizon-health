'use client'

import { Media, Page, SiteSetting } from '@payload-types'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import IconBoxStyle11 from '@/components/marketing/home/IconBox/IconBoxStyle11'
import Spacing from '@/components/marketing/home/Spacing'
import Newsletter from '@/components/marketing/home/Widget/Newsletter'
import SocialWidget from '@/components/marketing/home/Widget/SocialWidget'

import DropDown from './DropDown'

const listOfIcons = {
  '1': '/images/contact/icon_1.svg',
  '2': '/images/contact/icon_2.svg',
  '3': '/images/contact/icon_3.svg',
}

export default function Header({
  headerData,
  variant,
}: {
  headerData: SiteSetting['header']
  variant: string
}) {
  const [isSticky, setIsSticky] = useState(false)
  const [mobileToggle, setMobileToggle] = useState(false)
  const [sideNav, setSideNav] = useState(false)
  const [searchToggle, setSearchToggle] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <>
      <header
        className={`cs_site_header cs_style1 cs_sticky_header ${variant} ${
          isSticky ? 'cs_active_sticky' : ''
        }`}>
        <div className='cs_main_header'>
          <div className='container'>
            <div className='cs_main_header_in'>
              <div className='cs_main_header_left'>
                <Link className='cs_site_branding' href='/'>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Image
                      src={(headerData?.logo_image as Media)?.url || ''}
                      alt='Logo'
                      height={28}
                      width={50}
                    />
                    <span style={{ marginLeft: '5px' }}>
                      {headerData?.app_name}
                    </span>
                  </div>
                </Link>

                <nav className='cs_nav'>
                  <ul
                    className={`${
                      mobileToggle ? 'cs_nav_list cs_active' : 'cs_nav_list'
                    }`}>
                    {/* <li className="menu-item-has-children">
                      <Link href="/">Home</Link>
                      <DropDown>
                        <ul>
                          <li>
                            <Link href="/">Home Version-1</Link>
                          </li>
                          <li>
                            <Link href="/home-v2">Home Version-2</Link>
                          </li>
                          <li>
                            <Link href="/home-v3">Home Version-3</Link>
                          </li>
                          <li>
                            <Link href="/home-v4">Home Version-4</Link>
                          </li>
                        </ul>
                      </DropDown>
                    </li> */}
                    {headerData?.menuItems?.map((link, index) =>
                      link?.subMenuItems?.length === 0 ? (
                        <li key={index}>
                          <Link href={(link?.page?.value as Page)?.path || ''}>
                            {(link?.page?.value as Page)?.title}
                          </Link>
                        </li>
                      ) : (
                        <li key={index} className='menu-item-has-children'>
                          <Link href={''}>Services</Link>
                          <DropDown>
                            <ul>
                              {link?.subMenuItems?.map((subMenu, index) => (
                                <li key={index}>
                                  <Link
                                    href={
                                      (subMenu?.page?.value as Page)?.path || ''
                                    }>
                                    {(subMenu?.page?.value as Page)?.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </DropDown>
                        </li>
                      ),
                    )}
                    {/* <li>
                      <Link href='/doctors'>Find Doctor</Link>
                    </li>
                    <li>
                      <Link href='/blog'>Blog</Link>
                    </li>
                    <li>

                      <Link href='/appointment'>Appointment</Link>
                      {/* <DropDown>

                        <ul>
                          <li>
                            <Link href='/appointments'>Appointments</Link>
                          </li>
                          <li>
                            <Link href='/departments'>Departments</Link>
                          </li>
                          <li>
                            <Link href='/departments/department-details'>
                              Department Details
                            </Link>
                          </li>
                          <li>
                            <Link href='/doctors'>Doctors</Link>
                          </li>
                          <li>
                            <Link href='doctors/doctor-details'>
                              Doctor Details
                            </Link>
                          </li>
                          <li>
                            <Link href='/pricing-plan'>Pricing Plan</Link>
                          </li>
                          <li>
                            <Link href='/gallery'>Gallery</Link>
                          </li>
                          <li>
                            <Link href='/timetable'>Timetable</Link>
                          </li>
                        </ul>
                      </DropDown> */}
                    {/* </li>
                    <li>
                      <Link href='/contact'>Contact</Link>
                    </li> */}
                  </ul>
                  <span
                    className={
                      mobileToggle
                        ? 'cs_menu_toggle cs_teggle_active'
                        : 'cs_menu_toggle'
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}>
                    <span></span>
                  </span>
                </nav>
              </div>
              <div className='cs_main_header_right'>
                <div className='cs_toolbox'>
                  {/* <button
                    className='cs_toolbox_btn cs_search_toggle_btn'
                    type='button'
                    onClick={() => setSearchToggle(!searchToggle)}>
                    <svg
                      width={30}
                      height={30}
                      viewBox='0 0 30 30'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M13.1684 0C5.91146 0 0 5.90944 0 13.164C0 20.4184 5.91146 26.3394 13.1684 26.3394C16.2681 26.3394 19.1188 25.2535 21.3719 23.4505L26.8571 28.931C27.1339 29.1962 27.5036 29.3426 27.887 29.3386C28.2704 29.3347 28.6371 29.1809 28.9084 28.91C29.1797 28.6392 29.3342 28.2729 29.3386 27.8896C29.3431 27.5064 29.1972 27.1365 28.9322 26.8595L23.4471 21.3762C25.2521 19.1204 26.3397 16.2662 26.3397 13.164C26.3397 5.90944 20.4254 0 13.1684 0ZM13.1684 2.926C18.8435 2.926 23.4099 7.49078 23.4099 13.164C23.4099 18.8371 18.8435 23.4134 13.1684 23.4134C7.4933 23.4134 2.92695 18.8371 2.92695 13.164C2.92695 7.49078 7.4933 2.926 13.1684 2.926Z'
                        fill='currentColor'
                      />
                    </svg>
                  </button> */}
                  <button
                    className='cs_toolbox_btn cs_sidebar_toggle_btn'
                    type='button'
                    onClick={() => setSideNav(!sideNav)}>
                    <svg
                      width={35}
                      height={30}
                      viewBox='0 0 35 30'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M0.483887 2.46544C0.483887 1.10383 1.14618 0 1.96315 0H33.5208C34.3377 0 35 1.10383 35 2.46544C35 3.82708 34.3377 4.93088 33.5208 4.93088H1.96315C1.14618 4.93088 0.483887 3.82708 0.483887 2.46544Z'
                        fill='currentColor'
                      />
                      <path
                        d='M0.483887 14.6694C0.483887 13.3074 1.14618 12.2039 1.96315 12.2039H33.5208C34.3377 12.2039 35 13.3074 35 14.6694C35 16.0309 34.3377 17.1348 33.5208 17.1348H1.96315C1.14618 17.1348 0.483887 16.0309 0.483887 14.6694Z'
                        fill='currentColor'
                      />
                      <path
                        d='M0.483887 26.6267C0.483887 25.2648 1.14618 24.1613 1.96315 24.1613H33.5208C34.3377 24.1613 35 25.2648 35 26.6267C35 27.9883 34.3377 29.0922 33.5208 29.0922H1.96315C1.14618 29.0922 0.483887 27.9883 0.483887 26.6267Z'
                        fill='currentColor'
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className={`cs_sidenav ${sideNav ? 'active' : ''}`}>
        <div
          className='cs_sidenav_overlay'
          onClick={() => setSideNav(!sideNav)}
        />
        <div className='cs_sidenav_in'>
          <button
            className='cs_close'
            type='button'
            onClick={() => setSideNav(!sideNav)}>
            <Image
              src='/images/icons/close.svg'
              alt='Close'
              height={28}
              width={28}
            />
          </button>
          <div className='cs_logo_box'>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Image
                src={(headerData?.logo_image as Media)?.url || ''}
                alt='Logo'
                height={28}
                width={50}
              />
              <span className='text-[#274760]' style={{ marginLeft: '5px' }}>
                {headerData?.app_name}
              </span>
            </div>
            <div className='cs_height_15' />
            <h3 className='cs_fs_24 cs_semibold mb-0'>
              {headerData?.app_description}
            </h3>
          </div>
          <Spacing md='35' lg='35' xl='35' />
          <hr />
          <Spacing md='35' lg='50' xl='35' />
          {headerData?.personal_details?.map((item, index) => (
            <div key={index}>
              <IconBoxStyle11
                title={item?.title}
                subTitle={item?.sub_title}
                iconSrc={listOfIcons[item?.icon]}
              />
              <Spacing md='30' lg='30' xl='30' />
            </div>
          ))}
          <Spacing md='60' lg='60' xl='60' />
          <Newsletter title='' subTitle='' />
          <Spacing md='70' lg='50' xl='50' />
          <hr />
          <Spacing md='70' lg='50' xl='50' />
          <SocialWidget socialMedia={headerData?.social_media} />
        </div>
      </div>
      <div className={`cs_header_search ${searchToggle ? 'active' : ''}`}>
        <div className='cs_header_search_in'>
          <div className='container'>
            <div className='cs_header_search_box'>
              <form className='cs_search_form'>
                <input type='text' placeholder='Search Doctors' />
                <button className='cs_search_btn'>
                  <svg
                    width={18}
                    height={18}
                    viewBox='0 0 18 18'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M8.07914 0C3.62682 0 0 3.62558 0 8.07641C0 12.5272 3.62682 16.1599 8.07914 16.1599C9.98086 16.1599 11.7299 15.4936 13.1122 14.3875L16.4775 17.7498C16.6473 17.9126 16.8741 18.0024 17.1094 18C17.3446 17.9975 17.5695 17.9032 17.736 17.737C17.9025 17.5708 17.9972 17.3461 17.9999 17.111C18.0027 16.8758 17.9132 16.6489 17.7506 16.4789L14.3853 13.1148C15.4928 11.7308 16.16 9.97968 16.16 8.07641C16.16 3.62558 12.5315 0 8.07914 0ZM8.07914 1.79517C11.561 1.79517 14.3625 4.59577 14.3625 8.07641C14.3625 11.557 11.561 14.3647 8.07914 14.3647C4.59732 14.3647 1.79575 11.557 1.79575 8.07641C1.79575 4.59577 4.59732 1.79517 8.07914 1.79517Z'
                      fill='currentColor'
                    />
                  </svg>
                </button>
              </form>
              <button
                className='cs_close'
                type='button'
                onClick={() => setSearchToggle(!searchToggle)}>
                <Image
                  src='/images/icons/close.svg'
                  alt='Close'
                  height={28}
                  width={28}
                />
              </button>
            </div>
          </div>
        </div>
        <div
          className='cs_sidenav_overlay'
          onClick={() => setSearchToggle(!searchToggle)}
        />
      </div>
    </>
  )
}
