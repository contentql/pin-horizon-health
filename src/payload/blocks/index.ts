// This is just to consolidate all the existing blocks and it's respective jsx
// Always prefer to individually import, the required block or jsx
import { Test } from '@/payload/blocks/Test'
import { Test_Block } from '@/payload/blocks/Test/block'

import {

  AppointmentBanner,
  AppointmentContact,
  Appointment_Banner_Block,
  Appointment_Contact_Block,
} from './Appointment'

  DoctorBanner,
  DoctorHero,
  Doctor_Banner_Block,
  Doctor_Hero_Block,
} from './Doctor'
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
  Testimonials,
  Testimonials_Block,
} from './Home'

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

]
