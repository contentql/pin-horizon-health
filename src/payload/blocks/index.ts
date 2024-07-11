// This is just to consolidate all the existing blocks and it's respective jsx
// Always prefer to individually import, the required block or jsx
import { Test } from '@/payload/blocks/Test'
import { Test_Block } from '@/payload/blocks/Test/block'

import About from './Home/About'
import { About_Block } from './Home/About/block'
import Award from './Home/Award'
import { Award_Block } from './Home/Award/block'
import Department from './Home/Department'
import { Department_Block } from './Home/Department/block'
import Features from './Home/Features'
import { Features_Block } from './Home/Features/block'
import Hero from './Home/Hero'
import { Hero_Block } from './Home/Hero/block'
import Testimonials from './Home/Testimonials'
import { Testimonials_Block } from './Home/Testimonials/block'

export const blocksJSX = {
  Test,
  Hero,
  Features,
  About,
  Department,
  Award,
  Testimonials,
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
]
