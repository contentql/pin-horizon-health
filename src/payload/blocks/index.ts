// This is just to consolidate all the existing blocks and it's respective jsx
// Always prefer to individually import, the required block or jsx
import { Test } from '@/payload/blocks/Test'
import { Test_Block } from '@/payload/blocks/Test/block'

import {
  DoctorBanner,
  DoctorHero,
  Doctor_Banner_Block,
  Doctor_Hero_Block,
} from './Doctor'
import {
  About,
  About_Block,
  Award,
  Award_Block,
  Department,
  Department_Block,
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
  DoctorHero,
  DoctorBanner,
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
  Doctor_Hero_Block,
  Doctor_Banner_Block,
]
