import { env } from '@env'
import {
  GenerateDescription,
  GenerateImage,
  GenerateTitle,
  GenerateURL,
} from '@payloadcms/plugin-seo/types'

export const generateTitle: GenerateTitle = (data: any) => {
  const title =
    typeof data?.doc?.title?.value === 'string'
      ? data?.doc?.title?.value
      : typeof data?.title === 'string'
        ? data.title
        : ''

  return title
}

export const generateDescription: GenerateDescription = (data: any) => {
  if (data?.collectionSlug === 'blogs') {
    const description =
      typeof data?.publishedDoc?.sub_title === 'string'
        ? data?.publishedDoc?.sub_title
        : ''
    return description
  } else if (data?.collectionSlug === 'doctors') {
    const description =
      typeof data?.publishedDoc?.description === 'string'
        ? data?.publishedDoc?.description
        : ''
    return description
  }
  return ''
}

export const generateImage: GenerateImage = (data: any) => {
  const image =
    typeof data?.doc?.doctor_image?.value === 'string'
      ? data?.doc?.doctor_image?.value
      : ''

  return image
}

export const generateURL: GenerateURL = (data: any) => {
  const slug =
    data?.collectionSlug === 'blogs'
      ? 'blog'
      : data?.collectionSlug === 'doctors'
        ? 'doctor'
        : ''
  const url = `${env.PAYLOAD_URL}/${data?.locale ? data?.locale + '/' : ''}${slug}/${data?.initialData?.slug || ''}`

  return url || ''
}
