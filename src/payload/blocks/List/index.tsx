import { Params } from '../types'
import { ListType } from '@payload-types'
import React from 'react'

import AyurvedaList from './components/AyurvedaList'
import BlogsList from './components/BlogsList'
import DoctorsList from './components/DoctorsList'
import HospitalsList from './components/HospitalsList'
import YogaPosts from './components/YogaPosts'

interface ListProps extends ListType {
  params: Params
}

const List: React.FC<ListProps> = ({ params, ...block }) => {
  switch (block?.collectionSlug) {
    case 'hospitals': {
      return <HospitalsList />
    }
    case 'yoga': {
      return <YogaPosts />
    }
    case 'doctors': {
      return <DoctorsList />
    }
    case 'ayurveda': {
      return <AyurvedaList />
    }
    case 'blogs': {
      return <BlogsList />
    }
  }
}

export default List
