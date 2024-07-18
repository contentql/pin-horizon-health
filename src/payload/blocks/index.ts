// This is just to consolidate all the existing blocks and it's respective jsx
// Always prefer to individually import, the required block or jsx
import { Test } from '@/payload/blocks/Test'
import { Test_Block } from '@/payload/blocks/Test/block'

import {
  AboutAwards,
  AboutAwards_Block,
  AboutBanner,
  AboutBanner_Block,
  AboutFeatures,
  AboutFeatures_Block,
  AboutGallery,
  AboutGallery_Block,
  AboutHero,
  AboutHero_Block,
  AboutServices,
  AboutServices_Block,
  AboutStatistics,
  AboutStatistics_Block,
} from './About'
import {
  AppointmentBanner,
  AppointmentContact,
  Appointment_Banner_Block,
  Appointment_Contact_Block,
} from './Appointment'
import { AllBlogs, AllBlogs_Block, BlogBanner, BlogBanner_Block } from './Blog'
import {
  ContactBanner,
  ContactBanner_Block,
  ContactDetails,
  ContactDetails_Block,
} from './Contact'
import {
  DepartmentBanner,
  DepartmentHero,
  Department_Banner_Block,
  Department_Hero_Block,
} from './Department'
import {
  DoctorBanner,
  DoctorHero,
  Doctor_Banner_Block,
  Doctor_Hero_Block,
} from './Doctor'
import { Gallery_Block } from './Gallery/block'
import Gallery from './Gallery/gallery'
import {
  About,
  About_Block,
  Appointment,
  Appointment_Block,
  Award,
  Award_Block,
  Banner,
  Banner_Block,
  Department,
  Department_Block,
  Faqs,
  Faqs_Block,
  Features,
  Features_Block,
  Hero,
  Hero_Block,
  LatestBlogs,
  LatestBlogs_Block,
  Testimonials,
  Testimonials_Block,
} from './Home'
import { YogaPosts, YogaPosts_Block } from './Yoga'

export const blocksJSX = {
  Test,
  Hero,
  Features,
  About,
  Department,
  Award,
  Testimonials,
  AppointmentBanner,
  AppointmentContact,
  DoctorHero,
  DoctorBanner,
  Banner,
  Appointment,
  Faqs,
  AboutHero,
  AboutServices,
  AboutFeatures,
  AboutStatistics,
  AboutGallery,
  AboutAwards,
  AboutBanner,
  AllBlogs,
  LatestBlogs,

  DepartmentHero,
  DepartmentBanner,

  Gallery,
  BlogBanner,
  ContactBanner,
  ContactDetails,
  YogaPosts,
}

export type SlugType = keyof typeof blocksJSX

export const blocks = [
  Test_Block,
  Hero_Block,
  Features_Block,
  About_Block,
  Department_Block,
  Award_Block,
  Testimonials_Block,
  Appointment_Banner_Block,
  Appointment_Contact_Block,
  Doctor_Hero_Block,
  Doctor_Banner_Block,
  Banner_Block,
  Appointment_Block,
  Faqs_Block,
  AboutHero_Block,
  AboutServices_Block,
  AboutFeatures_Block,
  AboutStatistics_Block,
  AboutGallery_Block,
  AboutAwards_Block,
  AboutBanner_Block,
  AllBlogs_Block,
  LatestBlogs_Block,

  Department_Banner_Block,
  Department_Hero_Block,
  Gallery_Block,
  BlogBanner_Block,
  ContactBanner_Block,
  ContactDetails_Block,
  YogaPosts_Block,
]
