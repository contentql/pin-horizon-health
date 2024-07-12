// This is just to consolidate all the existing blocks and it's respective jsx
// Always prefer to individually import, the required block or jsx
import { Test } from '@/payload/blocks/Test'
import { Test_Block } from '@/payload/blocks/Test/block'

import {
  AboutFeatures,
  AboutFeatures_Block,
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
  Banner,
  Appointment,
  Faqs,
  AboutHero,
  AboutServices,
  AboutFeatures,
  AboutStatistics,
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
  Banner_Block,
  Appointment_Block,
  Faqs_Block,
  AboutHero_Block,
  AboutServices_Block,
  AboutFeatures_Block,
  AboutStatistics_Block,
]
